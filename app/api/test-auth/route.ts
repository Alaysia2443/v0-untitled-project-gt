import { NextResponse } from "next/server"
import { db } from "@/database"
import { users } from "@/database/schema"

export async function GET() {
  try {
    // Test database connection
    const result = await db.select({ count: { value: users.id } }).from(users)

    // Get environment variables status
    const envStatus = {
      DATABASE_URL: process.env.DATABASE_URL ? "Set" : "Not set",
      LOCAL_DATABASE_URL: process.env.LOCAL_DATABASE_URL ? "Set" : "Not set",
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ? "Set" : "Not set",
      BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET ? "Set" : "Not set",
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID ? "Set" : "Not set",
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET ? "Set" : "Not set",
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID ? "Set" : "Not set",
      GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET ? "Set" : "Not set",
    }

    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      userCount: result[0]?.count?.value || 0,
      environmentVariables: envStatus,
    })
  } catch (error) {
    console.error("Test error:", error)

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
