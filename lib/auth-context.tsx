"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type User = {
  id: string
  name: string
  email: string
  points: number
} | null

type AuthContextType = {
  user: User
  login: (email: string, password: string) => Promise<boolean>
  signup: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  loading: boolean
  updatePoints: (newPoints: number) => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => false,
  signup: async () => false,
  logout: () => {},
  loading: true,
  updatePoints: () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("smartfin_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const updatePoints = (newPoints: number) => {
    if (user) {
      const updatedUser = { ...user, points: newPoints }
      setUser(updatedUser)

      // Save to both global and user-specific storage
      localStorage.setItem("smartfin_user", JSON.stringify(updatedUser))
      localStorage.setItem(`smartfin_user_${user.email}`, JSON.stringify(updatedUser))

      console.log(`Points updated: ${user.points} -> ${newPoints}`)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      if (email && password) {
        // Check if this user has logged in before
        const existingUserData = localStorage.getItem(`smartfin_user_${email}`)

        if (existingUserData) {
          // User exists, load their data including points
          const existingUser = JSON.parse(existingUserData)
          setUser(existingUser)
          localStorage.setItem("smartfin_user", JSON.stringify(existingUser))
          console.log(`User logged in with ${existingUser.points} points`)
          return true
        } else {
          // New user, create with 2000 initial points
          const newUser = {
            id: `user_${Date.now()}`,
            name: email.split("@")[0],
            email,
            points: 2000, // New users start with 2000 points
          }
          setUser(newUser)
          localStorage.setItem("smartfin_user", JSON.stringify(newUser))
          localStorage.setItem(`smartfin_user_${email}`, JSON.stringify(newUser))
          console.log(`New user created with ${newUser.points} points`)
          return true
        }
      }
      return false
    } catch (error) {
      console.error("Login error:", error)
      return false
    }
  }

  const signup = async (name: string, email: string, password: string) => {
    try {
      if (name && email && password) {
        // Check if user already exists
        const existingUserData = localStorage.getItem(`smartfin_user_${email}`)
        if (existingUserData) {
          return false // User already exists
        }

        // Create new user with 2000 initial points
        const newUser = {
          id: `user_${Date.now()}`,
          name,
          email,
          points: 2000, // New users start with 2000 points
        }
        setUser(newUser)
        localStorage.setItem("smartfin_user", JSON.stringify(newUser))
        localStorage.setItem(`smartfin_user_${email}`, JSON.stringify(newUser))
        console.log(`New user signed up with ${newUser.points} points`)
        return true
      }
      return false
    } catch (error) {
      console.error("Signup error:", error)
      return false
    }
  }

  const logout = () => {
    if (user) {
      // Save current user data before logging out
      localStorage.setItem(`smartfin_user_${user.email}`, JSON.stringify(user))
      console.log(`User logged out with ${user.points} points saved`)
    }
    setUser(null)
    localStorage.removeItem("smartfin_user")
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading, updatePoints }}>
      {children}
    </AuthContext.Provider>
  )
}
