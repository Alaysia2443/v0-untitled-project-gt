import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

// Get database connection string
const connectionString = process.env.DATABASE_URL || process.env.LOCAL_DATABASE_URL
if (!connectionString) {
  throw new Error("No database connection string provided")
}

// Create postgres client
const client = postgres(connectionString, {
  max: 1,
  ssl: connectionString.includes("neon.tech") ? { rejectUnauthorized: false } : false,
})

// Create drizzle db instance
export const db = drizzle(client, { schema })

// Export common operators
export { eq, and, desc, asc } from "drizzle-orm"
