"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define user type
export interface User {
  id: string
  email: string
  name?: string
  points: number
  createdAt: string
}

// Define context type
interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signUp: (email: string, password: string, name?: string) => Promise<{ success: boolean; error?: string }>
  signOut: () => void
  updatePoints: (newPoints: number) => void
  addPoints: (pointsToAdd: number) => void
  deductPoints: (pointsToDeduct: number) => boolean
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Initialize auth state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  // Sign in function
  const signIn = async (email: string, password: string) => {
    try {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem("users") || "[]")

      // Find user with matching email and password
      const foundUser = users.find((u: any) => u.email === email && u.password === password)

      if (!foundUser) {
        return { success: false, error: "Invalid email or password" }
      }

      // Create user object without password
      const { password: _, ...userWithoutPassword } = foundUser

      // Store user in state and localStorage
      setUser(userWithoutPassword)
      localStorage.setItem("user", JSON.stringify(userWithoutPassword))

      return { success: true }
    } catch (error) {
      console.error("Sign in error:", error)
      return { success: false, error: "An error occurred during sign in" }
    }
  }

  // Sign up function
  const signUp = async (email: string, password: string, name?: string) => {
    try {
      // Get existing users
      const users = JSON.parse(localStorage.getItem("users") || "[]")

      // Check if user already exists
      if (users.some((u: any) => u.email === email)) {
        return { success: false, error: "User with this email already exists" }
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        email,
        password,
        name: name || "",
        points: 10000, // Starting with 10,000 points
        createdAt: new Date().toISOString(),
      }

      // Add user to users array
      users.push(newUser)
      localStorage.setItem("users", JSON.stringify(users))

      // Create user object without password
      const { password: _, ...userWithoutPassword } = newUser

      // Store user in state and localStorage
      setUser(userWithoutPassword)
      localStorage.setItem("user", JSON.stringify(userWithoutPassword))

      return { success: true }
    } catch (error) {
      console.error("Sign up error:", error)
      return { success: false, error: "An error occurred during sign up" }
    }
  }

  // Sign out function
  const signOut = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  // Update points function
  const updatePoints = (newPoints: number) => {
    if (!user) return

    // Update user in state
    const updatedUser = { ...user, points: newPoints }
    setUser(updatedUser)

    // Update user in localStorage
    localStorage.setItem("user", JSON.stringify(updatedUser))

    // Update user in users array
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const updatedUsers = users.map((u: any) => (u.id === user.id ? { ...u, points: newPoints } : u))
    localStorage.setItem("users", JSON.stringify(updatedUsers))
  }

  // Add points function
  const addPoints = (pointsToAdd: number) => {
    if (!user) return
    updatePoints(user.points + pointsToAdd)
  }

  // Deduct points function
  const deductPoints = (pointsToDeduct: number) => {
    if (!user) return false

    // Check if user has enough points
    if (user.points < pointsToDeduct) {
      return false
    }

    // Deduct points
    updatePoints(user.points - pointsToDeduct)
    return true
  }

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    updatePoints,
    addPoints,
    deductPoints,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
