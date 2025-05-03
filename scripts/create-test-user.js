const postgres = require("postgres")
const bcrypt = require("bcryptjs")
const { nanoid } = require("nanoid")

async function main() {
  try {
    // Get database connection string
    const connectionString = process.env.DATABASE_URL || process.env.LOCAL_DATABASE_URL
    if (!connectionString) {
      console.error("No database connection string provided")
      process.exit(1)
    }

    console.log("Connecting to database...")

    // Create postgres client
    const sql = postgres(connectionString, {
      max: 1,
      ssl: connectionString.includes("neon.tech") ? { rejectUnauthorized: false } : false,
    })

    // Check if test user already exists
    console.log("Checking if test user exists...")
    const existingUsers = await sql`SELECT * FROM users WHERE email = 'test@example.com'`

    if (existingUsers.length > 0) {
      console.log("Test user already exists")
      await sql.end()
      return
    }

    // Create test user
    console.log("Creating test user...")
    const userId = nanoid()
    const hashedPassword = await bcrypt.hash("password123", 10)

    await sql`
      INSERT INTO users (id, name, email, password, role, points, created_at, updated_at)
      VALUES (${userId}, 'Test User', 'test@example.com', ${hashedPassword}, 'user', 1000, NOW(), NOW())
    `

    console.log("Test user created successfully with ID:", userId)
    await sql.end()
  } catch (error) {
    console.error("Error creating test user:", error)
    process.exit(1)
  }
}

main()
