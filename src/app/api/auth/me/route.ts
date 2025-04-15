// Get current user API endpoint
import { getTokenFromCookie, verifyToken } from "@/lib/auth";
import { MeErrorResponse, MeResponse } from "@/types";
import { NextResponse } from "next/server";

export async function GET(): Promise<
  NextResponse<MeResponse | MeErrorResponse>
> {
  try {
    // Get token from cookie
    const token = await getTokenFromCookie();

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Verify token
    const user = verifyToken(token);

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // Return user data
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Get user error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
