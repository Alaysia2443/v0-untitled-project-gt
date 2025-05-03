"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

export default function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/"
  const errorParam = searchParams.get("error")

  // Set error message if there's an error in the URL
  useState(() => {
    if (errorParam) {
      switch (errorParam) {
        case "CredentialsSignin":
          setError("Invalid email or password")
          break
        default:
          setError("An error occurred during sign in")
          break
      }
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl,
      })

      if (result?.error) {
        setError("Invalid email or password")
        setIsLoading(false)
        return
      }

      router.push(callbackUrl)
      router.refresh()
    } catch (error) {
      console.error("Sign in error:", error)
      setError("An error occurred during sign in")
      setIsLoading(false)
    }
  }

  return (
    <section className="max-w-md mx-auto">
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
        <Link href="/signup" className="text-green-600 hover:text-green-700">
          Sign up
        </Link>
      </p>

      <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-md">
        <h3 className="text-sm font-medium mb-2">Test Account</h3>
        <p className="text-xs">Email: test@example.com</p>
        <p className="text-xs">Password: password123</p>
      </div>
    </section>
  )
}
