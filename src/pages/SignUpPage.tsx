"use client"

import type React from "react"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import PageHeader from "../components/PageHeader"

export default function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { signUp } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      const result = await signUp(email, password, name)

      if (!result.success) {
        setError(result.error || "Failed to create account")
        setIsLoading(false)
        return
      }

      // Redirect to dashboard
      navigate("/dashboard")
    } catch (error) {
      console.error("Sign up error:", error)
      setError("An unexpected error occurred")
      setIsLoading(false)
    }
  }

  return (
    <main>
      <PageHeader title="Sign Up" subtitle="Create your SmartFin account and start building your financial future" />

      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold mb-6">Create Account</h2>

          {error && <p className="bg-red-50 text-red-700 p-3 rounded-md mb-4 text-sm">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

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
                minLength={8}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
                minLength={8}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 disabled:bg-green-400"
            >
              {isLoading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <Link to="/signin" className="text-green-600 hover:text-green-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
