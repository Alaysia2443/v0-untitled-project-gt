"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import SignOutButton from "./sign-out-button"

export default function UserMenu() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <Link href="/signin" className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
        Sign In
      </Link>
    )
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium">Welcome, {session.user.name || session.user.email}</span>
      <Link href="/profile" className="text-sm text-green-600 hover:text-green-700">
        Profile
      </Link>
      <SignOutButton />
    </div>
  )
}
