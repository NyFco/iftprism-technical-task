// Get all users API endpoint (admin only)
import { getAllUsers } from "@/lib/db";
import { UsersErrorResponse, UsersResponse } from "@/types";
import { NextResponse } from "next/server";

export async function GET(): Promise<
  NextResponse<UsersResponse | UsersErrorResponse>
> {
  try {
    // Get all users (this endpoint is protected by middleware for admin only)
    const users = getAllUsers();

    return NextResponse.json({ users });
  } catch (error) {
    console.error("Get users error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
