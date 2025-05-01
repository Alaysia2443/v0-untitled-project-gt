"use client"

import { useSession } from "next-auth/react"
import { CreditCard } from "lucide-react"

export default function UserPointsDisplay() {
  const { data: session } = useSession()

  if (!session?.user) {
    return null
  }

  return (
    <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700">
      <CreditCard className="h-4 w-4" />
      <span>{session.user.points || 0} points</span>
    </div>
  )
}
