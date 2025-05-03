"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useProducts, type Product } from "../contexts/ProductContext"
import PageHeader from "../components/PageHeader"
import ProductCard from "../components/ProductCard"

interface ShopPageProps {
  isLoggedIn: boolean
}

export default function ShopPage() {
  const { user } = useAuth()
  const { products, loading } = useProducts()
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  // Extract unique categories from products
  useEffect(() => {
    if (products.length > 0) {
      const uniqueCategories = Array.from(new Set(products.map((p) => p.category)))
      setCategories(uniqueCategories)
    }
  }, [products])

  // Filter products by category
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter((p) => p.category === selectedCategory))
    }
  }, [selectedCategory, products])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-600 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <main>
      <PageHeader title="Shop" subtitle="Redeem your points for exclusive products and services" />

      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        {!user ? (
          <section className="mb-12 rounded-xl bg-gradient-to-r from-[#362a2a] to-[#4a3c3c] p-8 text-white md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Sign In Required</h2>
                <p className="mb-6 text-gray-200">
                  You'll need to sign in to access the shop as purchases are specific to the SmartFin Connect point
                  system. Earn points through daily activities and redeem them for exclusive products.
                </p>
                <Link
                  to="/signin"
                  className="inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-green-700"
                >
                  Sign In
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-5 w-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-48 w-48 rounded-full bg-white/10 p-4 backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="96"
                      height="96"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-24 w-24 text-green-500 opacity-50"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                      <path d="M3 6h18"></path>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </div>
                  <div className="absolute -right-4 -top-4 rounded-full bg-green-600 p-3">
                    <span className="text-lg font-bold">New</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <>
            <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-2xl font-bold">Shop Products</h2>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`rounded-lg px-4 py-2 text-sm font-medium ${
                    selectedCategory === "all"
                      ? "bg-green-600 text-white"
                      : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium ${
                      selectedCategory === category
                        ? "bg-green-600 text-white"
                        : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </header>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <section className="md:col-span-9">
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>

                  {filteredProducts.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mb-4 text-gray-400"
                      >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                        <path d="M3 6h18"></path>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                      <h3 className="mb-2 text-xl font-medium">No products found</h3>
                      <p className="text-gray-500">Try selecting a different category or check back later.</p>
                    </div>
                  )}
                </div>
              </section>

              <aside className="md:col-span-3">
                <div className="sticky top-24 space-y-6">
                  {user && (
                    <section className="rounded-xl bg-white p-6 shadow-sm">
                      <h3 className="mb-4 text-lg font-medium">Your Points</h3>
                      <div className="mb-4 flex items-center justify-between rounded-lg bg-green-50 p-4">
                        <span className="font-medium">Available</span>
                        <span className="text-lg font-bold text-green-600">{user.points.toLocaleString()} pts</span>
                      </div>
                      <Link
                        to="/purchases"
                        className="block w-full rounded-lg border border-gray-300 bg-white py-2.5 text-center text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        View Purchases
                      </Link>
                    </section>
                  )}

                  <section className="rounded-xl bg-gray-50 p-6">
                    <h3 className="mb-4 text-lg font-medium">Get the App</h3>
                    <p className="mb-4 text-sm text-gray-600">
                      Download the SmartFin app to earn more points and shop on the go.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="flex items-center justify-center rounded-lg border border-gray-300 bg-white p-2 text-xs">
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
                          className="mr-1 h-4 w-4"
                        >
                          <path d="m12 17-1.5-1.5L16 10l-5.5-5.5L12 3l7 7Z"></path>
                          <path d="M5 21V5a2 2 0 0 1 2-2h4"></path>
                          <path d="M9 21h10a2 2 0 0 0 2-2v-4"></path>
                        </svg>
                        <span className="ml-1">Google Play</span>
                      </button>
                      <button className="flex items-center justify-center rounded-lg border border-gray-300 bg-white p-2 text-xs">
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
                          className="mr-1 h-4 w-4"
                        >
                          <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                          <path d="M10 2c1 .5 2 2 2 5"></path>
                        </svg>
                        <span className="ml-1">App Store</span>
                      </button>
                    </div>
                  </section>
                </div>
              </aside>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
