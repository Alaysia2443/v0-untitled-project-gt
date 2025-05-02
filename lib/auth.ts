import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/database"
import { users } from "@/database/schema"
import { eq } from "drizzle-orm"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          // Find user by email
          const user = await db.query.users.findFirst({
            where: eq(users.email, credentials.email),
          })

          if (!user || !user.password) {
            return null
          }

          // Compare passwords
          const passwordMatch = await bcrypt.compare(credentials.password, user.password)

          if (!passwordMatch) {
            return null
          }

          // Return user data
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            points: user.points,
          }
        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role || "user"
        token.points = user.points || 1000
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.role = (token.role as string) || "user"
        session.user.points = (token.points as number) || 1000
      }
      return session
    },
  },
  debug: process.env.NODE_ENV === "development",
}
