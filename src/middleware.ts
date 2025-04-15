import { jwtDecode } from "jwt-decode";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { SafeUser } from "./types";

const adminOnlyRoutes: string[] = ["/api/admin/users"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignore static files, Next internals, API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    (pathname.startsWith("/api") && !adminOnlyRoutes.includes(pathname))
  ) {
    return NextResponse.next();
  }

  // Auth check
  const token = req.cookies.get("token")?.value;

  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Decode the existing auth token and redirect based on the role
  try {
    const decoded: SafeUser = jwtDecode(token as string);
    const role = decoded?.role;

    // Protect hte admin-only api route
    if (pathname === "/api/admin/users" && role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (role === "admin" && pathname !== "/admin-dashboard") {
      return NextResponse.redirect(new URL("/admin-dashboard", req.url));
    } else if (role === "user" && pathname !== "/user-dashboard") {
      return NextResponse.redirect(new URL("/user-dashboard", req.url));
    }

    return NextResponse.next();
  } catch {
    // Delete the token and redirect to the login page
    if (pathname !== "/login") {
      const response = NextResponse.redirect(new URL("/login", req.url));
      response.cookies.delete("token");
      return response;
    }
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
