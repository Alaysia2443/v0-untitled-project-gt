"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useAuth } from "./AuthContext"

// Define product type
export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

// Define purchase type
export interface Purchase {
  id: string
  userId: string
  productId: string
  quantity: number
  pointsUsed: number
  createdAt: string
}

// Define context type
interface ProductContextType {
  products: Product[]
  purchases: Purchase[]
  loading: boolean
  purchaseProduct: (productId: string, quantity: number) => Promise<{ success: boolean; error?: string }>
  getUserPurchases: () => Purchase[]
}

// Create context
const ProductContext = createContext<ProductContextType | undefined>(undefined)

// Provider component
export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([])
  const [purchases, setPurchases] = useState<Purchase[]>([])
  const [loading, setLoading] = useState(true)
  const { user, deductPoints } = useAuth()

  // Initialize products and purchases from localStorage
  useEffect(() => {
    // Initialize default products if none exist
    const storedProducts = localStorage.getItem("products")
    if (!storedProducts) {
      const defaultProducts = [
        {
          id: "1",
          name: "Wireless Earbuds",
          description: "High-quality wireless earbuds with noise cancellation",
          price: 2500,
          image: "/placeholder.svg?height=300&width=300",
          category: "electronics",
        },
        {
          id: "2",
          name: "SmartFin Hoodie",
          description: "Comfortable hoodie with the SmartFin logo",
          price: 1800,
          image: "/placeholder.svg?height=300&width=300",
          category: "clothing",
        },
        {
          id: "3",
          name: "Power Bank",
          description: "10,000mAh power bank for charging your devices on the go",
          price: 1200,
          image: "/placeholder.svg?height=300&width=300",
          category: "electronics",
        },
        {
          id: "4",
          name: "Study Lamp",
          description: "Adjustable LED desk lamp for studying",
          price: 1100,
          image: "/placeholder.svg?height=300&width=300",
          category: "home",
        },
        {
          id: "5",
          name: "Wireless Charger",
          description: "Fast wireless charger for compatible devices",
          price: 1300,
          image: "/placeholder.svg?height=300&width=300",
          category: "electronics",
        },
        {
          id: "6",
          name: "Coffee Mug",
          description: "Ceramic coffee mug with SmartFin logo",
          price: 600,
          image: "/placeholder.svg?height=300&width=300",
          category: "home",
        },
      ]
      localStorage.setItem("products", JSON.stringify(defaultProducts))
      setProducts(defaultProducts)
    } else {
      setProducts(JSON.parse(storedProducts))
    }

    // Load purchases
    const storedPurchases = localStorage.getItem("purchases")
    if (storedPurchases) {
      setPurchases(JSON.parse(storedPurchases))
    }

    setLoading(false)
  }, [])

  // Purchase product function
  const purchaseProduct = async (productId: string, quantity: number) => {
    try {
      if (!user) {
        return { success: false, error: "You must be signed in to make a purchase" }
      }

      // Find product
      const product = products.find((p) => p.id === productId)
      if (!product) {
        return { success: false, error: "Product not found" }
      }

      // Calculate total points
      const totalPoints = product.price * quantity

      // Deduct points
      const deductionSuccessful = deductPoints(totalPoints)
      if (!deductionSuccessful) {
        return { success: false, error: "Insufficient points" }
      }

      // Create purchase
      const newPurchase = {
        id: Date.now().toString(),
        userId: user.id,
        productId,
        quantity,
        pointsUsed: totalPoints,
        createdAt: new Date().toISOString(),
      }

      // Add purchase to purchases array
      const updatedPurchases = [...purchases, newPurchase]
      setPurchases(updatedPurchases)
      localStorage.setItem("purchases", JSON.stringify(updatedPurchases))

      return { success: true }
    } catch (error) {
      console.error("Purchase error:", error)
      return { success: false, error: "An error occurred during purchase" }
    }
  }

  // Get user purchases function
  const getUserPurchases = () => {
    if (!user) return []
    return purchases.filter((p) => p.userId === user.id)
  }

  const value = {
    products,
    purchases,
    loading,
    purchaseProduct,
    getUserPurchases,
  }

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

// Custom hook to use product context
export function useProducts() {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider")
  }
  return context
}
