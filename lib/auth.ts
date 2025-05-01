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
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
    error: "/error",
  },
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

        const user = await db.query.users.findFirst({
          where: eq(users.email, credentials.email),
        })

        if (!user || !user.password) {
          return null
        }

        const passwordMatch = await bcrypt.compare(credentials.password, user.password)

        if (!passwordMatch) {
          return null
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          points: user.points,
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true, // Allow linking accounts with same email
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true, // Allow linking accounts with same email
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // If this is a social login, ensure the user has points set
      if (account && account.provider !== "credentials" && user.email) {
        const existingUser = await db.query.users.findFirst({
          where: eq(users.email, user.email),
        })

        // If user doesn't exist yet, we'll set default points when created
        if (!existingUser && user.id) {
          await db
            .update(users)
            .set({ points: 1000 })
            .where(eq(users.id, user.id))
            .execute()
            .catch((err) => console.error("Error setting initial points:", err))
        }
      }
      return true
    },
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update" && session) {
        // Handle session updates
        return { ...token, ...session.user }
      }

      if (user) {
        return {
          ...token,
          id: user.id,
          role: user.role || "user",
          points: user.points || 1000,
        }
      }

      // If user has logged in before, fetch their current points
      if (token.id) {
        const dbUser = await db.query.users.findFirst({
          where: eq(users.id, token.id as string),
        })

        if (dbUser) {
          token.points = dbUser.points
          token.role = dbUser.role
        }
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
  events: {
    async createUser({ user }) {
      // Ensure new users created via OAuth have points
      if (user.id && (!user.points || user.points === 0)) {
        await db
          .update(users)
          .set({ points: 1000 })
          .where(eq(users.id, user.id))
          .execute()
          .catch((err) => console.error("Error setting initial points for new user:", err))
      }
    },
  },
  debug: process.env.NODE_ENV === "development",
}
