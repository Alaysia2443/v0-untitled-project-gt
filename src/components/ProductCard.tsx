"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useProducts, type Product } from "../contexts/ProductContext"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { purchaseProduct } = useProducts()
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handlePurchase = async () => {
    if (!user) {
      navigate("/signin")
      return
    }

    setIsAddingToCart(true)
    setError("")
    setSuccess(false)

    try {
      const result = await purchaseProduct(product.id, 1)

      if (!result.success) {
        setError(result.error || "Failed to purchase product")
      } else {
        setSuccess(true)
        setTimeout(() => setSuccess(false), 3000)
      }
    } catch (error) {
      console.error("Purchase error:", error)
      setError("An unexpected error occurred")
    } finally {
      setIsAddingToCart(false)
    }
  }

  return (
    <article className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute right-2 top-2 flex flex-col gap-2">
          <button
            className="rounded-full bg-green-600 p-2 text-white shadow-md transition-transform hover:bg-green-700 hover:scale-110"
            onClick={handlePurchase}
            disabled={isAddingToCart}
            aria-label="Purchase"
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
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            )}
          </button>
          <button
            className="rounded-full bg-white/90 p-2 text-gray-700 shadow-md backdrop-blur-sm transition-transform hover:bg-white hover:scale-110"
            aria-label="Add to favorites"
          >
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
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.price.toLocaleString()} points</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-medium text-green-600">In stock</span>
          <button
            className="rounded-full bg-gray-100 p-1.5 text-gray-700 transition-colors hover:bg-gray-200"
            onClick={handlePurchase}
            disabled={isAddingToCart}
            aria-label="Purchase"
          >
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
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <path d="M3 6h18"></path>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </div>
        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
        {success && <p className="mt-2 text-xs text-green-500">Purchase successful!</p>}
      </div>
    </article>
  )
}
