"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Plus, ShoppingCart, Heart } from "lucide-react"
import { motion } from "framer-motion"

interface ProductCardProps {
  id?: string
  name: string
  price?: string | number
  image?: string
}

export default function ProductCard({
  id,
  name,
  price = "500 points",
  image = "/placeholder.svg?height=300&width=300",
}: ProductCardProps) {
  const router = useRouter()
  const { data: session } = useSession()
  const [isHovered, setIsHovered] = useState(false)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const handleAddToCart = async () => {
    if (!session) {
      router.push("/signin?callbackUrl=/shop")
      return
    }

    if (!id) return

    setIsAddingToCart(true)

    try {
      const response = await fetch("/api/purchases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: id,
          quantity: 1,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to add to cart")
      }

      // Refresh the page to show updated points
      router.refresh()
    } catch (error) {
      console.error("Error adding to cart:", error)
    } finally {
      setIsAddingToCart(false)
    }
  }

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute right-2 top-2 flex flex-col gap-2">
          <button
            className="rounded-full bg-green-600 p-2 text-white shadow-md transition-transform hover:bg-green-700 hover:scale-110"
            onClick={handleAddToCart}
            disabled={isAddingToCart}
          >
            {isAddingToCart ? (
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </button>
          <button className="rounded-full bg-white/90 p-2 text-gray-700 shadow-md backdrop-blur-sm transition-transform hover:bg-white hover:scale-110">
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{typeof price === "number" ? `${price} points` : price}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-medium text-green-600">In stock</span>
          <button
            className="rounded-full bg-gray-100 p-1.5 text-gray-700 transition-colors hover:bg-gray-200"
            onClick={handleAddToCart}
            disabled={isAddingToCart}
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
