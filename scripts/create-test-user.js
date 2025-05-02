const postgres = require("postgres")
const bcrypt = require("bcryptjs")
const { nanoid } = require("nanoid")

async function main() {
  try {
    const connectionString = process.env.DATABASE_URL || process.env.LOCAL_DATABASE_URL
    if (!connectionString) {
      throw new Error("DATABASE_URL is not defined")
    }

    const client = postgres(connectionString, {
      max: 1,
      ssl: connectionString.includes("neon.tech") ? { rejectUnauthorized: false } : false,
      idle_timeout: 20,
      connect_timeout: 10,
    })

    // Check if test user already exists
    const existingUsers = await client`
      SELECT * FROM users WHERE email = 'test@example.com'
    `

    if (existingUsers.length > 0) {
      console.log("Test user already exists")
      await client.end()
      return
    }

    // Create test user
    const userId = nanoid()
    const hashedPassword = await bcrypt.hash("password123", 10)

    await client`
      INSERT INTO users (id, name, email, password, role, points, created_at, updated_at)
      VALUES (${userId}, 'Test User', 'test@example.com', ${hashedPassword}, 'user', 1000, NOW(), NOW())
    `

    console.log("Test user created successfully")
    await client.end()
  } catch (error) {
    console.error("Error creating test user:", error)
  }
}

main()
