"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

export default function ErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  let errorMessage = "An error occurred"
  let errorDescription = "Something went wrong. Please try again."

  // Map error codes to user-friendly messages
  switch (error) {
    case "Configuration":
      errorMessage = "Server configuration error"
      errorDescription = "There is a problem with the server configuration."
      break
    case "AccessDenied":
      errorMessage = "Access denied"
      errorDescription = "You do not have permission to sign in."
      break
    case "Verification":
      errorMessage = "Verification error"
      errorDescription = "The verification token has expired or has already been used."
      break
    case "OAuthSignin":
    case "OAuthCallback":
    case "OAuthCreateAccount":
    case "EmailCreateAccount":
    case "Callback":
      errorMessage = "Authentication error"
      errorDescription = "There was a problem with the authentication service."
      break
    case "OAuthAccountNotLinked":
      errorMessage = "Account not linked"
      errorDescription = "This email is already associated with another account."
      break
    case "EmailSignin":
      errorMessage = "Email sign-in error"
      errorDescription = "The email could not be sent or the email link is invalid."
      break
    case "CredentialsSignin":
      errorMessage = "Invalid credentials"
      errorDescription = "The email or password you entered is incorrect."
      break
    case "SessionRequired":
      errorMessage = "Authentication required"
      errorDescription = "You must be signed in to access this page."
      break
    default:
      // Keep default message
      break
  }

  return (
    <main className="container mx-auto px-4 py-12 md:px-6">
      <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-red-100 p-3">
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="mb-2 text-2xl font-bold text-gray-900">{errorMessage}</h1>
          <p className="mb-6 text-gray-600">{errorDescription}</p>
          <div className="flex gap-4">
            <Link
              href="/signin"
              className="rounded-full bg-green-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
            >
              Back to Sign In
            </Link>
            <Link
              href="/"
              className="rounded-full border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
