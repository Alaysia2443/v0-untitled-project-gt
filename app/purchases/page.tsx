import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import PageHeader from "@/components/page-header"
import { db, eq } from "@/database"
import { purchases } from "@/database/schema"
import { ShoppingBag, Download } from "lucide-react"

export default async function PurchasesPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/signin?callbackUrl=/purchases")
  }

  // Get all user purchases
  const userPurchases = await db.query.purchases.findMany({
    where: eq(purchases.userId, session.user.id),
    with: {
      product: true,
    },
    orderBy: (purchases, { desc }) => [desc(purchases.createdAt)],
  })

  return (
    <main>
      <PageHeader title="My Purchases" subtitle="View your purchase history and receipts" />

      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Purchase History</h2>
          <div className="flex items-center gap-2">
            <button className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
              <Download className="mr-2 h-4 w-4" />
              Export
            </button>
          </div>
        </div>

        {userPurchases.length > 0 ? (
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
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
                {userPurchases.map((purchase) => (
                  <tr key={purchase.id} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                          {purchase.product.image ? (
                            <img
                              src={purchase.product.image || "/placeholder.svg"}
                              alt={purchase.product.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gray-200">
                              <ShoppingBag className="h-5 w-5 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{purchase.product.name}</div>
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
                      {purchase.pointsUsed} points
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-gray-400" />
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
          </div>
        )}
      </div>
    </main>
  )
}
