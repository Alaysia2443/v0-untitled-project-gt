"use client"

import { Link } from "react-router-dom"

interface NavbarProps {
  isLoggedIn: boolean
  onLogout: () => void
}

export default function Navbar({ isLoggedIn, onLogout }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" stroke="currentColor" strokeWidth="2" />
            <line x1="2" x2="22" y1="10" y2="10" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="ml-2 text-xl font-bold">SmartFin</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link to="/features" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Features
          </Link>
          <Link to="/shop" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Shop
          </Link>
          <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            About
          </Link>

          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/signin"
              className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
