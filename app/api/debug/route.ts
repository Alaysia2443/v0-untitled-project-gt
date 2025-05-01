import { NextResponse } from "next/server"
import { db } from "@/database"
import { users, accounts, sessions } from "@/database/schema"

export async function GET(request: Request) {
  try {
    // Only allow in development
    if (process.env.NODE_ENV !== "development") {
      return NextResponse.json({ error: "Not available in production" }, { status: 403 })
    }

    const userCount = await db.select({ count: { value: users.id } }).from(users)
    const accountCount = await db.select({ count: { value: accounts.userId } }).from(accounts)
    const sessionCount = await db.select({ count: { value: sessions.userId } }).from(sessions)

    return NextResponse.json({
      users: userCount[0]?.count?.value || 0,
      accounts: accountCount[0]?.count?.value || 0,
      sessions: sessionCount[0]?.count?.value || 0,
      env: {
        googleClientId: process.env.GOOGLE_CLIENT_ID ? "Set" : "Not set",
        googleClientSecret: process.env.GOOGLE_CLIENT_SECRET ? "Set" : "Not set",
        githubClientId: process.env.GITHUB_CLIENT_ID ? "Set" : "Not set",
        githubClientSecret: process.env.GITHUB_CLIENT_SECRET ? "Set" : "Not set",
        databaseUrl: process.env.DATABASE_URL ? "Set" : "Not set",
      },
    })
  } catch (error) {
    console.error("Debug error:", error)
    return NextResponse.json({ error: "Failed to get debug info" }, { status: 500 })
  }
}
