"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useProducts } from "../contexts/ProductContext"
import PageHeader from "../components/PageHeader"

export default function DashboardPage() {
  const { user } = useAuth()
  const { getUserPurchases, products } = useProducts()
  const [recentPurchases, setRecentPurchases] = useState([])
  const [purchaseCount, setPurchaseCount] = useState(0)

  useEffect(() => {
    if (user) {
      const userPurchases = getUserPurchases()
      setPurchaseCount(userPurchases.length)

      // Get recent purchases (last 3)
      const recent = userPurchases
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 3)

      // Add product details to purchases
      const purchasesWithProducts = recent.map((purchase) => {
        const product = products.find((p) => p.id === purchase.productId)
        return { ...purchase, product }
      })

      setRecentPurchases(purchasesWithProducts)
    }
  }, [user, getUserPurchases, products])

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div>You need to be signed in to view this page.</div>
      </div>
    )
  }

  return (
    <main>
      <PageHeader title="My Dashboard" subtitle="Manage your account and view your purchases" />

      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <aside className="md:col-span-1">
            <section className="rounded-xl bg-white p-6 shadow-sm">
              <header className="mb-6 flex flex-col items-center">
                <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-200">
                  <div className="flex h-full w-full items-center justify-center bg-green-600 text-3xl font-bold text-white">
                    {user.name ? user.name.charAt(0) : user.email.charAt(0)}
                  </div>
                </div>
                <h2 className="text-xl font-bold">{user.name || user.email.split("@")[0]}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </header>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center">
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
                      className="mr-3 h-5 w-5 text-green-600"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                      <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                    <span className="font-medium">Points Balance</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">{user.points.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center">
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
                      className="mr-3 h-5 w-5 text-green-600"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                      <path d="M3 6h18"></path>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <span className="font-medium">Total Purchases</span>
                  </div>
                  <span className="text-lg font-bold">{purchaseCount}</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center">
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
                      className="mr-3 h-5 w-5 text-green-600"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <line x1="3" x2="21" y1="9" y2="9"></line>
                      <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></path>
                    </svg>
                    <span className="font-medium">Member Since</span>
                  </div>
                  <span className="text-sm">
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
                  </span>
                </div>
              </div>
            </section>
          </aside>

          <section className="md:col-span-2">
            <article className="rounded-xl bg-white p-6 shadow-sm">
              <header className="mb-6">
                <h3 className="text-xl font-bold">Recent Purchases</h3>
              </header>

              {recentPurchases.length > 0 ? (
                <div className="space-y-4">
                  {recentPurchases.map((purchase) => (
                    <div
                      key={purchase.id}
                      className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
                    >
                      <div className="flex items-center">
                        <div className="h-12 w-12 overflow-hidden rounded-md bg-gray-100">
                          {purchase.product?.image ? (
                            <img
                              src={purchase.product.image || "/placeholder.svg"}
                              alt={purchase.product.name}
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
                                className="h-6 w-6 text-gray-400"
                              >
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                                <path d="M3 6h18"></path>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium">{purchase.product?.name || "Unknown Product"}</h4>
                          <p className="text-sm text-gray-500">{new Date(purchase.createdAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">{purchase.pointsUsed.toLocaleString()} points</p>
                        <p className="text-sm text-gray-500">Qty: {purchase.quantity}</p>
                      </div>
                    </div>
                  ))}

                  <div className="mt-6 text-center">
                    <Link
                      to="/purchases"
                      className="inline-flex items-center rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                    >
                      View All Purchases
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
                        className="ml-2 h-4 w-4"
                      >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                        <path d="M3 6h18"></path>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center">
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
                    className="mx-auto mb-4 h-12 w-12 text-gray-400"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                    <path d="M3 6h18"></path>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                  <h4 className="mb-2 text-lg font-medium">No purchases yet</h4>
                  <p className="mb-4 text-gray-500">
                    You haven't made any purchases yet. Visit the shop to redeem your points for products.
                  </p>
                  <Link
                    to="/shop"
                    className="inline-flex items-center rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                  >
                    Go to Shop
                  </Link>
                </div>
              )}
            </article>

            <article className="mt-8 rounded-xl bg-white p-6 shadow-sm">
              <header className="mb-6">
                <h3 className="text-xl font-bold">Earn More Points</h3>
              </header>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-gray-200 p-4">
                  <h4 className="mb-2 font-medium">Complete Daily Tasks</h4>
                  <p className="mb-4 text-sm text-gray-600">
                    Log in daily, complete financial literacy quizzes, and track your spending to earn points.
                  </p>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div className="h-2 w-3/4 rounded-full bg-green-600"></div>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">75% complete today</p>
                </div>

                <div className="rounded-lg border border-gray-200 p-4">
                  <h4 className="mb-2 font-medium">Refer Friends</h4>
                  <p className="mb-4 text-sm text-gray-600">
                    Invite friends to join SmartFin and earn 500 points for each successful referral.
                  </p>
                  <button className="w-full rounded-lg border border-green-600 py-2 text-sm font-medium text-green-600 transition-colors hover:bg-green-50">
                    Get Referral Link
                  </button>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </main>
  )
}
