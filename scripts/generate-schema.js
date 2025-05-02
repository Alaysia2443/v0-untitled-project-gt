// This script will run during the build process to ensure the database schema is up to date
async function main() {
  console.log("Connecting to database...")

  const connectionString = process.env.DATABASE_URL || process.env.LOCAL_DATABASE_URL
  if (!connectionString) {
    console.error("DATABASE_URL or LOCAL_DATABASE_URL environment variable is not set")
    process.exit(1)
  }

  try {
    // Import postgres
    const postgres = require("postgres")
    const client = postgres(connectionString, {
      max: 1,
      ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
      idle_timeout: 20,
      connect_timeout: 10,
    })

    console.log("Running migrations...")

    // Generate schema
    await client.unsafe(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT,
        email TEXT UNIQUE NOT NULL,
        "emailVerified" TIMESTAMP,
        image TEXT,
        password TEXT,
        role TEXT NOT NULL DEFAULT 'user',
        points INTEGER NOT NULL DEFAULT 1000,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      
      CREATE TABLE IF NOT EXISTS accounts (
        "userId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        type TEXT NOT NULL,
        provider TEXT NOT NULL,
        "providerAccountId" TEXT NOT NULL,
        refresh_token TEXT,
        access_token TEXT,
        expires_at INTEGER,
        token_type TEXT,
        scope TEXT,
        id_token TEXT,
        session_state TEXT,
        PRIMARY KEY (provider, "providerAccountId")
      );
      
      CREATE TABLE IF NOT EXISTS sessions (
        "sessionToken" TEXT PRIMARY KEY,
        "userId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        expires TIMESTAMP NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS "verificationTokens" (
        identifier TEXT NOT NULL,
        token TEXT NOT NULL,
        expires TIMESTAMP NOT NULL,
        PRIMARY KEY (identifier, token)
      );
      
      CREATE TABLE IF NOT EXISTS products (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL,
        description TEXT,
        price INTEGER NOT NULL,
        image TEXT,
        category TEXT NOT NULL,
        stock INTEGER NOT NULL DEFAULT 10,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      
      CREATE TABLE IF NOT EXISTS purchases (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        "userId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        "productId" UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
        quantity INTEGER NOT NULL DEFAULT 1,
        points_used INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
    `)

    console.log("Database schema created successfully")
    await client.end()
  } catch (error) {
    console.error("Error creating database schema:", error)
    process.exit(1)
  }
}

main().catch(console.error)
