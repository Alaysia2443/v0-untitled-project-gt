"use client"

import type React from "react"

import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import PageHeader from "../components/PageHeader"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Get the redirect path from the location state or default to '/'
  const from = location.state?.from?.pathname || "/"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const result = await signIn(email, password)

      if (!result.success) {
        setError(result.error || "Failed to sign in")
        setIsLoading(false)
        return
      }

      // Redirect to the page they were trying to access or home
      navigate(from, { replace: true })
    } catch (error) {
      console.error("Sign in error:", error)
      setError("An unexpected error occurred")
      setIsLoading(false)
    }
  }

  return (
    <main>
      <PageHeader title="Sign In" subtitle="Access your SmartFin account to manage your finances" />

      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>

          {error && <p className="bg-red-50 text-red-700 p-3 rounded-md mb-4 text-sm">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 disabled:bg-green-400"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-green-600 hover:text-green-700">
              Sign up
            </Link>
          </p>

          <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-md">
            <h3 className="text-sm font-medium mb-2">Test Account</h3>
            <p className="text-xs">Email: test@example.com</p>
            <p className="text-xs">Password: password123</p>
          </div>
        </div>
      </div>
    </main>
  )
}
