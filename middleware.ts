import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAuthenticated = !!token

  // Protected routes that require authentication
  const protectedRoutes = ["/profile", "/purchases"]
  const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

  // Admin routes that require admin role
  const adminRoutes = ["/admin"]
  const isAdminRoute = adminRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

  // Check if user is trying to access a protected route without being authenticated
  if (isProtectedRoute && !isAuthenticated) {
    const redirectUrl = new URL("/signin", request.url)
    redirectUrl.searchParams.set("callbackUrl", request.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Check if user is trying to access an admin route without admin role
  if (isAdminRoute && (!isAuthenticated || token?.role !== "admin")) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // If user is authenticated and trying to access auth pages, redirect to home
  if (isAuthenticated && (request.nextUrl.pathname === "/signin" || request.nextUrl.pathname === "/signup")) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/profile/:path*", "/purchases/:path*", "/admin/:path*", "/signin", "/signup"],
}
