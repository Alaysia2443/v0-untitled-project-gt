import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  // Skip middleware for API routes
  if (request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next()
  }

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  const isAuthenticated = !!token

  // Protected routes that require authentication
  const protectedRoutes = ["/shop", "/profile", "/purchases"]
  const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

  // Check if user is trying to access a protected route without being authenticated
  if (isProtectedRoute && !isAuthenticated) {
    const redirectUrl = new URL("/signin", request.url)
    redirectUrl.searchParams.set("callbackUrl", request.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/shop/:path*", "/profile/:path*", "/purchases/:path*"],
}
