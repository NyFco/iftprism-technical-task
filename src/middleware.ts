import { jwtDecode } from "jwt-decode";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { SafeUser } from "./types";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignore static files, Next internals, API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api")
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

    if (role === "admin" && pathname !== "/admin-dashboard") {
      return NextResponse.redirect(new URL("/admin-dashboard", req.url));
    } else if (role === "user" && pathname !== "/user-dashboard") {
      return NextResponse.redirect(new URL("/user-dashboard", req.url));
    }

    return NextResponse.next();
  } catch {
    // Delete the token and redirect to the login page
    req.cookies.delete("token");
    if (pathname !== "/login") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
