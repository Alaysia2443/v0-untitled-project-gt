import { NextResponse } from "next/server"
import { db } from "@/database"
import { users } from "@/database/schema"
import bcrypt from "bcryptjs"
import { nanoid } from "nanoid"

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    })

    if (existingUser) {
      return NextResponse.json({ error: "Email already in use" }, { status: 409 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user with nanoid for ID
    const userId = nanoid()

    // Insert user
    await db.insert(users).values({
      id: userId,
      name,
      email,
      password: hashedPassword,
      points: 1000, // Starting points for new users
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      message: "User registered successfully",
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json(
      {
        error: "Failed to register user",
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    )
  }
}
