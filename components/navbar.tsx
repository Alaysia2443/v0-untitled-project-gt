"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/shop">Shop</NavLink>
          <NavLink href="/about">About</NavLink>
          <Link
            href="/signin"
            className="ml-2 rounded-full bg-green-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
          >
            Sign in
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="rounded-md p-2 text-gray-700 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 bg-white px-4 py-5 shadow-lg md:hidden">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink href="/features" onClick={() => setMobileMenuOpen(false)}>
              Features
            </MobileNavLink>
            <MobileNavLink href="/shop" onClick={() => setMobileMenuOpen(false)}>
              Shop
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </MobileNavLink>
            <Link
              href="/signin"
              className="mt-2 rounded-full bg-green-600 px-5 py-2.5 text-center font-medium text-white transition-colors hover:bg-green-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="block rounded-md px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
