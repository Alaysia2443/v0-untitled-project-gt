"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  let errorMessage = "An unknown error occurred"
  let errorDescription = "Please try again or contact support if the problem persists."

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
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-red-600">{errorMessage}</h1>
        <p className="mb-6 text-gray-600">{errorDescription}</p>
        <div className="flex flex-col space-y-4">
          <Link href="/signin" className="rounded-md bg-green-600 px-4 py-2 text-center text-white hover:bg-green-700">
            Back to Sign In
          </Link>
          <Link
            href="/"
            className="rounded-md border border-gray-300 px-4 py-2 text-center text-gray-700 hover:bg-gray-50"
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    </main>
  )
}
