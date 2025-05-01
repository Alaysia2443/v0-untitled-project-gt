import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

// For use in production
const connectionString = process.env.DATABASE_URL as string
const client = postgres(connectionString)
export const db = drizzle(client, { schema })

// For query usage
import { eq, and, desc, asc } from "drizzle-orm"
export { eq, and, desc, asc }
