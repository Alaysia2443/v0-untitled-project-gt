import { NextResponse } from "next/server"
import { db } from "@/database"
import { products } from "@/database/schema"

export async function GET(request: Request) {
  try {
    // Check if we're in development mode
    if (process.env.NODE_ENV !== "development") {
      return NextResponse.json({ error: "This endpoint is only available in development mode" }, { status: 403 })
    }

    // Check if products already exist
    const existingProducts = await db.query.products.findMany({
      limit: 1,
    })

    if (existingProducts.length > 0) {
      return NextResponse.json({ message: "Products already exist" })
    }

    // Seed products
    const defaultProducts = [
      {
        name: "Wireless Earbuds",
        description: "High-quality wireless earbuds with noise cancellation",
        price: 2500,
        image: "/placeholder.svg?height=300&width=300",
        category: "electronics",
        stock: 10,
      },
      {
        name: "SmartFin Hoodie",
        description: "Comfortable hoodie with the SmartFin logo",
        price: 1800,
        image: "/placeholder.svg?height=300&width=300",
        category: "clothing",
        stock: 20,
      },
      {
        name: "Power Bank",
        description: "10,000mAh power bank for charging your devices on the go",
        price: 1200,
        image: "/placeholder.svg?height=300&width=300",
        category: "electronics",
        stock: 15,
      },
      {
        name: "Study Lamp",
        description: "Adjustable LED desk lamp for studying",
        price: 1100,
        image: "/placeholder.svg?height=300&width=300",
        category: "home",
        stock: 8,
      },
      {
        name: "Wireless Charger",
        description: "Fast wireless charger for compatible devices",
        price: 1300,
        image: "/placeholder.svg?height=300&width=300",
        category: "electronics",
        stock: 12,
      },
      {
        name: "Coffee Mug",
        description: "Ceramic coffee mug with SmartFin logo",
        price: 600,
        image: "/placeholder.svg?height=300&width=300",
        category: "home",
        stock: 25,
      },
    ]

    // Insert products
    await db.insert(products).values(
      defaultProducts.map((product) => ({
        ...product,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    )

    return NextResponse.json({
      success: true,
      message: "Products seeded successfully",
      count: defaultProducts.length,
    })
  } catch (error) {
    console.error("Error seeding products:", error)
    return NextResponse.json({ error: "Failed to seed products" }, { status: 500 })
  }
}
