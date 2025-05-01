import { NextResponse } from "next/server"
import { db } from "@/database"
import { products } from "@/database/schema"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { eq, desc } from "drizzle-orm"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const limitParam = searchParams.get("limit")
    const limit = limitParam ? Number.parseInt(limitParam) : undefined

    let query = db.select().from(products)

    if (category) {
      query = query.where(eq(products.category, category))
    }

    if (limit) {
      query = query.limit(limit)
    }

    query = query.orderBy(desc(products.createdAt))

    const productsList = await query

    return NextResponse.json(productsList)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { name, description, price, image, category, stock } = await request.json()

    // Validate input
    if (!name || !price || !category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const newProduct = await db
      .insert(products)
      .values({
        name,
        description,
        price,
        image,
        category,
        stock: stock || 10,
      })
      .returning()

    return NextResponse.json(newProduct[0])
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
