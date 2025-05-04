"use client"

import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const { user, logout } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <section className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-medium tracking-tight">SmartFin</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-sm font-normal text-gray-600 hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/shop" className="text-sm font-normal text-gray-600 hover:text-primary transition-colors">
            Shop
          </Link>
          <Link href="/about" className="text-sm font-normal text-gray-600 hover:text-primary transition-colors">
            About
          </Link>
          {user ? (
            <button
              onClick={logout}
              className="text-sm font-medium bg-primary hover:bg-primary-dark text-white rounded px-4 py-2 transition"
            >
              Sign Out
            </button>
          ) : (
            <Link
              href="/signin"
              className="text-sm font-medium bg-primary hover:bg-primary-dark text-white rounded px-4 py-2 transition"
            >
              Sign In
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </section>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <nav className="container py-4 flex flex-col gap-4">
            <Link
              href="/features"
              className="text-sm text-gray-600 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/shop"
              className="text-sm text-gray-600 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-600 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            {user ? (
              <button
                onClick={() => {
                  logout()
                  setMobileMenuOpen(false)
                }}
                className="text-sm font-medium bg-primary hover:bg-primary-dark text-white rounded px-4 py-2 w-full transition"
              >
                Sign Out
              </button>
            ) : (
              <Link
                href="/signin"
                className="text-sm font-medium bg-primary hover:bg-primary-dark text-white rounded px-4 py-2 w-full text-center transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
