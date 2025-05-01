import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import PageHeader from "@/components/page-header"
import SectionCard from "@/components/section-card"
import ProductCard from "@/components/product-card"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Filter, ArrowRight } from "lucide-react"
import prisma from "@/lib/db"

export default async function ShopPage() {
  const session = await getServerSession(authOptions)

  // Fetch products from the database
  const trendingProducts = await prisma.product.findMany({
    take: 3,
    orderBy: {
      purchases: {
        _count: "desc",
      },
    },
  })

  const newProducts = await prisma.product.findMany({
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  })

  // If no products in database, use these defaults
  const defaultProducts = [
    { id: "1", name: "Wireless Earbuds", price: 2500, image: "/placeholder.svg?height=300&width=300" },
    { id: "2", name: "SmartFin Hoodie", price: 1800, image: "/placeholder.svg?height=300&width=300" },
    { id: "3", name: "Power Bank", price: 1200, image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <main>
      <PageHeader title="Shop" subtitle="Redeem your points for exclusive products and services" />

      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        {!session ? (
          <div className="mb-12 rounded-xl bg-gradient-to-r from-[#362a2a] to-[#4a3c3c] p-8 text-white md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Waah!</h2>
                <p className="mb-6 text-gray-200">
                  You'll need to sign in to access the shop as purchases are specific to the SmartFin Connect point
                  system. Earn points through daily activities and redeem them for exclusive products.
                </p>
                <Link
                  href="/signin?callbackUrl=/shop"
                  className="inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-green-700"
                >
                  Sign In
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-48 w-48 rounded-full bg-white/10 p-4 backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingCart className="h-24 w-24 text-green-500 opacity-50" />
                  </div>
                  <div className="absolute -right-4 -top-4 rounded-full bg-green-600 p-3">
                    <span className="text-lg font-bold">New</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Shop Products</h2>
          <button className="flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-9">
            <div className="space-y-12">
              <SectionCard title="Trending">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {(trendingProducts.length > 0 ? trendingProducts : defaultProducts).map((product) => (
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      price={`${product.price} points`}
                      image={product.image || "/placeholder.svg?height=300&width=300"}
                    />
                  ))}
                </div>
              </SectionCard>

              <SectionCard title="New">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {(newProducts.length > 0 ? newProducts : defaultProducts).map((product) => (
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      price={`${product.price} points`}
                      image={product.image || "/placeholder.svg?height=300&width=300"}
                    />
                  ))}
                </div>
              </SectionCard>

              <SectionCard title="For You">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProductCard name="Study Lamp" price="1,100 points" />
                  <ProductCard name="Wireless Charger" price="1,300 points" />
                  <ProductCard name="Coffee Mug" price="600 points" />
                </div>
              </SectionCard>

              <SectionCard title="Clothing">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProductCard name="SmartFin T-Shirt" price="1,000 points" />
                  <ProductCard name="Campus Cap" price="750 points" />
                  <ProductCard name="Winter Scarf" price="900 points" />
                </div>
              </SectionCard>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="sticky top-24 space-y-6">
              {session ? (
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-lg font-medium">Your Cart</h3>
                  <div className="mb-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">SmartFin Hoodie</span>
                      <span className="text-sm font-medium">1,800 pts</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Wireless Earbuds</span>
                      <span className="text-sm font-medium">2,500 pts</span>
                    </div>
                  </div>
                  <div className="mb-4 border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between font-medium">
                      <span>Total Points:</span>
                      <span className="text-green-600">4,300 pts</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <button className="w-full rounded-lg bg-green-600 py-2.5 text-sm font-medium text-white hover:bg-green-700">
                      Make Purchase
                    </button>
                    <button className="w-full rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                      View Receipt
                    </button>
                  </div>
                </div>
              ) : null}

              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="mb-4 text-lg font-medium">Get the App</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Download the SmartFin app to earn more points and shop on the go.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button className="flex items-center justify-center rounded-lg border border-gray-300 bg-white p-2 text-xs">
                    <Image src="/placeholder.svg?height=16&width=16" alt="Google Play" width={16} height={16} />
                    <span className="ml-1">Google Play</span>
                  </button>
                  <button className="flex items-center justify-center rounded-lg border border-gray-300 bg-white p-2 text-xs">
                    <Image src="/placeholder.svg?height=16&width=16" alt="App Store" width={16} height={16} />
                    <span className="ml-1">App Store</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
