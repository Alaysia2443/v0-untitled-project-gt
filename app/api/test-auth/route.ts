import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  try {
    // Test database connection
    const userCount = await prisma.user.count()

    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      userCount,
      env: {
        nextAuthSecret: process.env.NEXTAUTH_SECRET ? "Set" : "Not set",
        googleClientId: process.env.GOOGLE_CLIENT_ID ? "Set" : "Not set",
        googleClientSecret: process.env.GOOGLE_CLIENT_SECRET ? "Set" : "Not set",
        githubClientId: process.env.GITHUB_CLIENT_ID ? "Set" : "Not set",
        githubClientSecret: process.env.GITHUB_CLIENT_SECRET ? "Set" : "Not set",
        databaseUrl: process.env.DATABASE_URL ? "Set" : "Not set",
      },
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
