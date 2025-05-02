import { NextResponse } from "next/server"
import { db, eq } from "@/database"
import { users, products, purchases } from "@/database/schema"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userPurchases = await db.query.purchases.findMany({
      where: eq(purchases.userId, session.user.id),
      with: {
        product: true,
      },
      orderBy: (purchases, { desc }) => [desc(purchases.createdAt)],
    })

    return NextResponse.json(userPurchases)
  } catch (error) {
    console.error("Error fetching purchases:", error)
    return NextResponse.json({ error: "Failed to fetch purchases" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { productId, quantity = 1 } = await request.json()

    // Validate input
    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
    }

    // Get product
    const product = await db.query.products.findFirst({
      where: eq(products.id, productId),
    })

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    // Check stock
    if (product.stock < quantity) {
      return NextResponse.json({ error: "Insufficient stock" }, { status: 400 })
    }

    // Get user
    const user = await db.query.users.findFirst({
      where: eq(users.id, session.user.id),
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Calculate total points needed
    const totalPoints = product.price * quantity

    // Check if user has enough points
    if (user.points < totalPoints) {
      return NextResponse.json({ error: "Insufficient points" }, { status: 400 })
    }

    // Create purchase
    const newPurchase = await db
      .insert(purchases)
      .values({
        userId: user.id,
        productId: product.id,
        quantity,
        pointsUsed: totalPoints,
      })
      .returning()

    // Update user points
    await db
      .update(users)
      .set({
        points: user.points - totalPoints,
        updatedAt: new Date(),
      })
      .where(eq(users.id, user.id))

    // Update product stock
    await db
      .update(products)
      .set({
        stock: product.stock - quantity,
        updatedAt: new Date(),
      })
      .where(eq(products.id, product.id))

    return NextResponse.json({
      success: true,
      message: "Purchase successful",
      purchase: newPurchase[0],
      remainingPoints: user.points - totalPoints,
    })
  } catch (error) {
    console.error("Error creating purchase:", error)
    return NextResponse.json({ error: "Failed to create purchase" }, { status: 500 })
  }
}
