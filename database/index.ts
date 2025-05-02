import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

// For use in production
const connectionString = process.env.DATABASE_URL || process.env.LOCAL_DATABASE_URL
if (!connectionString) {
  throw new Error("DATABASE_URL is not defined")
}

// Configure postgres with proper options
const client = postgres(connectionString, {
  max: 1,
  ssl: connectionString.includes("neon.tech") ? { rejectUnauthorized: false } : false,
  idle_timeout: 20,
  connect_timeout: 10,
})

export const db = drizzle(client, { schema })

// For query usage
import { eq, and, desc, asc } from "drizzle-orm"
export { eq, and, desc, asc }
