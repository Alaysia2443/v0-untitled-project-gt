import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
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

  return NextResponse.json({
    error: errorMessage,
    description: errorDescription,
    originalError: error,
  })
}
