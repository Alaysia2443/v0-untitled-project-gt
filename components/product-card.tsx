"use client"

import { useState } from "react"
import { Plus, ShoppingCart, Heart } from "lucide-react"
import { motion } from "framer-motion"

interface ProductCardProps {
  name: string
  price?: string
  image?: string
}

export default function ProductCard({
  name,
  price = "500 points",
  image = "/placeholder.svg?height=300&width=300",
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

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
          <button className="rounded-full bg-green-600 p-2 text-white shadow-md transition-transform hover:bg-green-700 hover:scale-110">
            <Plus className="h-4 w-4" />
          </button>
          <button className="rounded-full bg-white/90 p-2 text-gray-700 shadow-md backdrop-blur-sm transition-transform hover:bg-white hover:scale-110">
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{price}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-medium text-green-600">In stock</span>
          <button className="rounded-full bg-gray-100 p-1.5 text-gray-700 transition-colors hover:bg-gray-200">
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
