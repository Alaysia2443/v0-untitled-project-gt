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

    // Check if user already exists
    const existingUser = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    })

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user with nanoid for ID
    const userId = nanoid()

    // Insert user directly without returning to avoid potential issues
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

    // Fetch the created user to return in response
    const newUser = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, userId),
      columns: {
        id: true,
        name: true,
        email: true,
        points: true,
      },
    })

    return NextResponse.json({
      user: newUser,
      message: "User registered successfully",
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Failed to register user" }, { status: 500 })
  }
}
