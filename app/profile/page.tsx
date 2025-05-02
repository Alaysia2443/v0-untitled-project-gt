import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import PageHeader from "@/components/page-header"
import { db, eq } from "@/database"
import { users, purchases } from "@/database/schema"
import { CreditCard, ShoppingBag, Calendar } from "lucide-react"

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/signin?callbackUrl=/profile")
  }

  // Get user
  const user = await db.query.users.findFirst({
    where: eq(users.id, session.user.id),
  })

  if (!user) {
    redirect("/signin")
  }

  // Count purchases
  const purchaseCountResult = await db
    .select({ count: { value: purchases.id } })
    .from(purchases)
    .where(eq(purchases.userId, session.user.id))

  const purchaseCount = purchaseCountResult[0]?.count?.value || 0

  // Get recent purchases
  const recentPurchases = await db.query.purchases.findMany({
    where: eq(purchases.userId, session.user.id),
    with: {
      product: true,
    },
    orderBy: (purchases, { desc }) => [desc(purchases.createdAt)],
    limit: 3,
  })

  return (
    <main>
      <PageHeader title="My Profile" subtitle="Manage your account and view your purchases" />

      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <aside className="md:col-span-1">
            <section className="rounded-xl bg-white p-6 shadow-sm">
              <header className="mb-6 flex flex-col items-center">
                <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-200">
                  {user?.image ? (
                    <img
                      src={user.image || "/placeholder.svg"}
                      alt={user.name || "User"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-green-600 text-3xl font-bold text-white">
                      {user?.name?.charAt(0) || "U"}
                    </div>
                  )}
                </div>
                <h2 className="text-xl font-bold">{user?.name}</h2>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </header>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center">
                    <CreditCard className="mr-3 h-5 w-5 text-green-600" />
                    <span className="font-medium">Points Balance</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">{user?.points || 0}</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center">
                    <ShoppingBag className="mr-3 h-5 w-5 text-green-600" />
                    <span className="font-medium">Total Purchases</span>
                  </div>
                  <span className="text-lg font-bold">{purchaseCount}</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center">
                    <Calendar className="mr-3 h-5 w-5 text-green-600" />
                    <span className="font-medium">Member Since</span>
                  </div>
                  <span className="text-sm">
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
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
                          {purchase.product.image ? (
                            <img
                              src={purchase.product.image || "/placeholder.svg"}
                              alt={purchase.product.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gray-200">
                              <ShoppingBag className="h-6 w-6 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium">{purchase.product.name}</h4>
                          <p className="text-sm text-gray-500">{new Date(purchase.createdAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">{purchase.pointsUsed} points</p>
                        <p className="text-sm text-gray-500">Qty: {purchase.quantity}</p>
                      </div>
                    </div>
                  ))}

                  <div className="mt-6 text-center">
                    <a
                      href="/purchases"
                      className="inline-flex items-center rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                    >
                      View All Purchases
                      <ShoppingBag className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center">
                  <ShoppingBag className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                  <h4 className="mb-2 text-lg font-medium">No purchases yet</h4>
                  <p className="mb-4 text-gray-500">
                    You haven't made any purchases yet. Visit the shop to redeem your points for products.
                  </p>
                  <a
                    href="/shop"
                    className="inline-flex items-center rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
                  >
                    Go to Shop
                  </a>
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
