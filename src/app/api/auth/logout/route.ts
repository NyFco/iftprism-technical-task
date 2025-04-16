// Logout API endpoint
import { clearTokenCookie } from "@/lib/auth";
import { ErrorResponse, LogoutResponse } from "@/types";
import { NextResponse } from "next/server";

export async function POST(): Promise<
  NextResponse<LogoutResponse | ErrorResponse>
> {
  try {
    // Clear token cookie
    await clearTokenCookie();

    // Return success response
    return NextResponse.json({
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
