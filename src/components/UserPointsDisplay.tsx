"use client"

import { useAuth } from "../contexts/AuthContext"

export default function UserPointsDisplay() {
  const { user } = useAuth()

  if (!user) {
    return null
  }

  return (
    <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
        <line x1="2" x2="22" y1="10" y2="10"></line>
      </svg>
      <span>{user.points.toLocaleString()} points</span>
    </div>
  )
}
