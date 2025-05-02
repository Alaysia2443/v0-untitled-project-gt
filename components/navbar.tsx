"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { Menu, X, User, LogOut, ShoppingBag } from "lucide-react"
import UserPointsDisplay from "./user-points-display"

export default function Navbar() {
  const { data: session } = useSession()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-3xl font-serif italic tracking-tight">
          SmartFin
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/features"
            className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            Features
          </Link>
          <Link
            href="/shop"
            className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            About
          </Link>

          {session ? (
            <>
              <UserPointsDisplay />
              <div className="relative ml-2">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  aria-expanded={userMenuOpen}
                  aria-haspopup="true"
                >
                  <span className="mr-1">{session.user.name?.split(" ")[0] || "User"}</span>
                  <User className="h-4 w-4" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <User className="mr-2 inline h-4 w-4" />
                      Profile
                    </Link>
                    <Link
                      href="/purchases"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <ShoppingBag className="mr-2 inline h-4 w-4" />
                      My Purchases
                    </Link>
                    <button
                      onClick={() => {
                        setUserMenuOpen(false)
                        signOut({ callbackUrl: "/" })
                      }}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="mr-2 inline h-4 w-4" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link
              href="/signin"
              className="ml-2 rounded-full bg-green-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
            >
              Sign in
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="rounded-md p-2 text-gray-700 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="absolute left-0 right-0 top-16 z-50 bg-white px-4 py-5 shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href="/features"
                className="flex items-center rounded-md px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="flex items-center rounded-md px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center rounded-md px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>

            {session ? (
              <>
                <li className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <UserPointsDisplay />
                </li>
                <li>
                  <Link
                    href="/profile"
                    className="flex items-center rounded-md px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/purchases"
                    className="flex items-center rounded-md px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    My Purchases
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      signOut({ callbackUrl: "/" })
                    }}
                    className="flex w-full items-center rounded-md px-4 py-2 text-left text-base font-medium text-gray-700 transition-colors hover:bg-gray-100"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  href="/signin"
                  className="mt-2 block rounded-full bg-green-600 px-5 py-2.5 text-center font-medium text-white transition-colors hover:bg-green-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  )
}
