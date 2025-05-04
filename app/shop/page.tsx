"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/lib/auth-context"
import { useToast } from "@/components/ui/use-toast"

// Product types
type Product = {
  id: string
  name: string
  description: string
  pointsCost: number
  category: "trending" | "clothing" | "tech" | "gift-cards"
}

// Sample products data
const products: Product[] = [
  {
    id: "p1",
    name: "SmartFin T-Shirt",
    description: "Comfortable cotton t-shirt with SmartFin logo",
    pointsCost: 250,
    category: "trending",
  },
  {
    id: "p2",
    name: "Wireless Earbuds",
    description: "High-quality wireless earbuds for music and calls",
    pointsCost: 500,
    category: "trending",
  },
  {
    id: "p3",
    name: "Coffee Shop Gift Card",
    description: "$10 gift card for your favorite coffee shop",
    pointsCost: 300,
    category: "trending",
  },
  {
    id: "p4",
    name: "SmartFin Hoodie",
    description: "Warm and stylish hoodie with SmartFin logo",
    pointsCost: 450,
    category: "clothing",
  },
  {
    id: "p5",
    name: "SmartFin Cap",
    description: "Adjustable cap with embroidered SmartFin logo",
    pointsCost: 200,
    category: "clothing",
  },
  {
    id: "p6",
    name: "Portable Charger",
    description: "10,000mAh portable charger for your devices",
    pointsCost: 400,
    category: "tech",
  },
  {
    id: "p7",
    name: "Phone Stand",
    description: "Adjustable phone stand for desk or bedside",
    pointsCost: 150,
    category: "tech",
  },
  {
    id: "p8",
    name: "Movie Theater Gift Card",
    description: "$15 gift card for your local movie theater",
    pointsCost: 350,
    category: "gift-cards",
  },
  {
    id: "p9",
    name: "Online Bookstore Gift Card",
    description: "$20 gift card for online book purchases",
    pointsCost: 400,
    category: "gift-cards",
  },
]

export default function ShopPage() {
  const { user, updatePoints } = useAuth()
  const { toast } = useToast()
  const [selectedCategory, setSelectedCategory] = useState<string>("trending")
  const [selectedProducts, setSelectedProducts] = useState<Record<string, number>>({})
  const [isProcessing, setIsProcessing] = useState(false)

  const filteredProducts = products.filter((product) => product.category === selectedCategory)

  const handlePurchase = (product: Product) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to purchase items with your points.",
        variant: "destructive",
      })
      return
    }

    if (user.points < product.pointsCost) {
      toast({
        title: "Not enough points",
        description: `You need ${product.pointsCost - user.points} more points to purchase this item.`,
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    // Calculate new points balance
    const newPointsBalance = user.points - product.pointsCost

    // Update the user's points
    updatePoints(newPointsBalance)

    toast({
      title: "Purchase successful!",
      description: `You've redeemed ${product.name} for ${product.pointsCost} points. Your new balance is ${newPointsBalance} points.`,
    })

    setTimeout(() => {
      setIsProcessing(false)
    }, 1000)
  }

  const calculateTotalPoints = () => {
    return Object.entries(selectedProducts).reduce((total, [productId, quantity]) => {
      const product = products.find((p) => p.id === productId)
      return total + (product ? product.pointsCost * quantity : 0)
    }, 0)
  }

  const handleAddToCart = (product: Product) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to add items to your cart.",
        variant: "destructive",
      })
      return
    }

    setSelectedProducts((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }))

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleBulkPurchase = () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to purchase items.",
        variant: "destructive",
      })
      return
    }

    const totalCost = calculateTotalPoints()

    if (user.points < totalCost) {
      toast({
        title: "Not enough points",
        description: `You need ${totalCost - user.points} more points to complete this purchase.`,
        variant: "destructive",
      })
      return
    }

    if (totalCost === 0) {
      toast({
        title: "Empty cart",
        description: "Please add items to your cart before checking out.",
      })
      return
    }

    setIsProcessing(true)

    // Calculate new points balance
    const newPointsBalance = user.points - totalCost

    // Update the user's points
    updatePoints(newPointsBalance)

    toast({
      title: "Purchase successful!",
      description: `You've redeemed items for ${totalCost} points. Your new balance is ${newPointsBalance} points.`,
    })

    // Clear cart
    setSelectedProducts({})

    setTimeout(() => {
      setIsProcessing(false)
    }, 1000)
  }

  return (
    <>
      {/* Header */}
      <section className="bg-[#3d3d3d] text-white py-16">
        <div className="container text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-sans">Shop</h1>
          <p className="max-w-2xl mx-auto font-light">Redeem your points for exclusive products and gift cards</p>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16">
        <div className="container">
          {user ? (
            <div className="bg-[#4CAF50]/10 p-6 rounded-lg mb-8 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">Your Points Balance</h3>
                <p className="text-[#4CAF50] font-bold text-3xl">{user.points} Points</p>
              </div>
              <Link href="/features">
                <Button variant="outline" className="text-[#4CAF50] border-[#4CAF50] hover:bg-[#4CAF50]/10">
                  Earn More Points
                </Button>
              </Link>
            </div>
          ) : (
            <div className="bg-gray-100 p-6 rounded-lg mb-8 text-center">
              <p className="mb-4 text-lg">Sign in to redeem products with your points</p>
              <Button asChild className="bg-[#4CAF50] hover:bg-[#3e8e41] px-8 py-6 text-lg">
                <Link href="/signin">Sign In</Link>
              </Button>
            </div>
          )}

          <Tabs defaultValue="trending" value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="mb-8 w-full justify-start border-b pb-2">
              <TabsTrigger
                value="trending"
                className="data-[state=active]:text-[#4CAF50] data-[state=active]:border-b-2 data-[state=active]:border-[#4CAF50]"
              >
                Trending
              </TabsTrigger>
              <TabsTrigger
                value="clothing"
                className="data-[state=active]:text-[#4CAF50] data-[state=active]:border-b-2 data-[state=active]:border-[#4CAF50]"
              >
                Clothing
              </TabsTrigger>
              <TabsTrigger
                value="tech"
                className="data-[state=active]:text-[#4CAF50] data-[state=active]:border-b-2 data-[state=active]:border-[#4CAF50]"
              >
                Tech
              </TabsTrigger>
              <TabsTrigger
                value="gift-cards"
                className="data-[state=active]:text-[#4CAF50] data-[state=active]:border-b-2 data-[state=active]:border-[#4CAF50]"
              >
                Gift Cards
              </TabsTrigger>
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[#4CAF50] font-bold text-lg">{product.pointsCost} Points</span>
                        <Button
                          onClick={() => handlePurchase(product)}
                          className="bg-[#4CAF50] hover:bg-[#3e8e41]"
                          disabled={isProcessing || (user && user.points < product.pointsCost) || !user}
                        >
                          {isProcessing ? "Processing..." : "Redeem Now"}
                        </Button>
                      </div>
                      <Button
                        onClick={() => handleAddToCart(product)}
                        variant="outline"
                        className="w-full mt-3 border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50]/10"
                        disabled={isProcessing || !user}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Cart Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-2xl mb-6">Your Cart</h3>

            {Object.keys(selectedProducts).length > 0 ? (
              <div className="space-y-4 mb-6">
                {Object.entries(selectedProducts).map(([productId, quantity]) => {
                  const product = products.find((p) => p.id === productId)
                  if (!product) return null

                  return (
                    <div key={productId} className="flex justify-between items-center border-b pb-3">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-500">
                          {product.pointsCost} points × {quantity}
                        </p>
                      </div>
                      <p className="font-semibold text-[#4CAF50]">{product.pointsCost * quantity} points</p>
                    </div>
                  )
                })}

                <div className="flex justify-between items-center pt-2 font-bold">
                  <p>Total</p>
                  <p className="text-[#4CAF50]">{calculateTotalPoints()} points</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 mb-6">Your cart is empty. Add items to proceed with checkout.</p>
            )}

            <div className="flex justify-between items-center">
              <Button
                onClick={handleBulkPurchase}
                className="bg-[#4CAF50] hover:bg-[#3e8e41] px-8"
                disabled={
                  isProcessing ||
                  Object.keys(selectedProducts).length === 0 ||
                  !user ||
                  (user && user.points < calculateTotalPoints())
                }
              >
                {isProcessing ? "Processing..." : "Checkout"}
              </Button>

              <Button
                variant="outline"
                onClick={() => setSelectedProducts({})}
                disabled={Object.keys(selectedProducts).length === 0}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
