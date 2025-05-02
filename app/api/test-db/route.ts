import { NextResponse } from "next/server"
import { db } from "@/database"
import { users } from "@/database/schema"

export async function GET() {
  try {
    console.log("Testing database connection...")

    // Test database connection with a simple query
    const result = await db.select({ count: { value: users.id } }).from(users)

    console.log("Database query successful:", result)

    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      userCount: result[0]?.count?.value || 0,
      connectionInfo: {
        databaseUrl: process.env.DATABASE_URL ? "Set" : "Not set",
        localDatabaseUrl: process.env.LOCAL_DATABASE_URL ? "Set" : "Not set",
        nodeEnv: process.env.NODE_ENV || "Not set",
      },
      env: {
        nextAuthSecret: process.env.NEXTAUTH_SECRET ? "Set" : "Not set",
        googleClientId: process.env.GOOGLE_CLIENT_ID ? "Set" : "Not set",
        googleClientSecret: process.env.GOOGLE_CLIENT_SECRET ? "Set" : "Not set",
        githubClientId: process.env.GITHUB_CLIENT_ID ? "Set" : "Not set",
        githubClientSecret: process.env.GITHUB_CLIENT_SECRET ? "Set" : "Not set",
      },
    })
  } catch (error) {
    console.error("Database test error:", error)

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
        connectionInfo: {
          databaseUrl: process.env.DATABASE_URL ? "Set" : "Not set",
          localDatabaseUrl: process.env.LOCAL_DATABASE_URL ? "Set" : "Not set",
          nodeEnv: process.env.NODE_ENV || "Not set",
        },
      },
      { status: 500 },
    )
  }
}
