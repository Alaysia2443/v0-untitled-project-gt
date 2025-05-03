"use client"

import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useProducts, type Purchase, type Product } from "../contexts/ProductContext"
import PageHeader from "../components/PageHeader"

export default function PurchasesPage() {
  const { user } = useAuth()
  const { getUserPurchases, products } = useProducts()
  const [purchases, setPurchases] = useState<Purchase[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      const userPurchases = getUserPurchases()
      setPurchases(userPurchases)
    }
    setLoading(false)
  }, [user, getUserPurchases])

  // Helper function to get product details
  const getProductDetails = (productId: string): Product | undefined => {
    return products.find((p) => p.id === productId)
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-600 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <main>
      <PageHeader title="My Purchases" subtitle="View your purchase history and receipts" />

      <div className="container mx-auto px-4 py-12 md:px-6">
        <header className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Purchase History</h2>
          <div className="flex items-center gap-2">
            <button className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
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
                className="mr-2 h-4 w-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
              Export
            </button>
          </div>
        </header>

        {purchases.length > 0 ? (
          <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Points Used
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {purchases.map((purchase) => {
                  const product = getProductDetails(purchase.productId)
                  return (
                    <tr key={purchase.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                            {product?.image ? (
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-gray-200">
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
                                  className="h-5 w-5 text-gray-400"
                                >
                                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                                  <path d="M3 6h18"></path>
                                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {product?.name || "Unknown Product"}
                            </div>
                            <div className="text-sm text-gray-500">#{purchase.id.slice(0, 8)}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">{new Date(purchase.createdAt).toLocaleDateString()}</div>
                        <div className="text-sm text-gray-500">{new Date(purchase.createdAt).toLocaleTimeString()}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{purchase.quantity}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-green-600">
                        {purchase.pointsUsed.toLocaleString()} points
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </section>
        ) : (
          <section className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-4 h-16 w-16 text-gray-400"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <path d="M3 6h18"></path>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <h3 className="mb-2 text-xl font-medium">No purchases yet</h3>
            <p className="mb-6 text-gray-500">
              You haven't made any purchases yet. Visit the shop to redeem your points for products.
            </p>
            <a
              href="/shop"
              className="inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-green-700"
            >
              Go to Shop
            </a>
          </section>
        )}
      </div>
    </main>
  )
}
