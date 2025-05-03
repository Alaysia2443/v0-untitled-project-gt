import type { Product } from "../contexts/ProductContext"

export function initLocalStorage() {
  // Initialize users array if it doesn't exist
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]))
  }

  // Initialize products array if it doesn't exist
  if (!localStorage.getItem("products")) {
    const defaultProducts: Product[] = [
      {
        id: "1",
        name: "Wireless Earbuds",
        description: "High-quality wireless earbuds with noise cancellation",
        price: 2500,
        image: "/placeholder.svg?height=300&width=300",
        category: "electronics",
      },
      {
        id: "2",
        name: "SmartFin Hoodie",
        description: "Comfortable hoodie with the SmartFin logo",
        price: 1800,
        image: "/placeholder.svg?height=300&width=300",
        category: "clothing",
      },
      {
        id: "3",
        name: "Power Bank",
        description: "10,000mAh power bank for charging your devices on the go",
        price: 1200,
        image: "/placeholder.svg?height=300&width=300",
        category: "electronics",
      },
      {
        id: "4",
        name: "Study Lamp",
        description: "Adjustable LED desk lamp for studying",
        price: 1100,
        image: "/placeholder.svg?height=300&width=300",
        category: "home",
      },
      {
        id: "5",
        name: "Wireless Charger",
        description: "Fast wireless charger for compatible devices",
        price: 1300,
        image: "/placeholder.svg?height=300&width=300",
        category: "electronics",
      },
      {
        id: "6",
        name: "Coffee Mug",
        description: "Ceramic coffee mug with SmartFin logo",
        price: 600,
        image: "/placeholder.svg?height=300&width=300",
        category: "home",
      },
    ]
    localStorage.setItem("products", JSON.stringify(defaultProducts))
  }

  // Initialize purchases array if it doesn't exist
  if (!localStorage.getItem("purchases")) {
    localStorage.setItem("purchases", JSON.stringify([]))
  }

  // Create a test user if no users exist
  const users = JSON.parse(localStorage.getItem("users") || "[]")
  if (users.length === 0) {
    const testUser = {
      id: "1",
      email: "test@example.com",
      password: "password123",
      name: "Test User",
      points: 10000,
      createdAt: new Date().toISOString(),
    }
    users.push(testUser)
    localStorage.setItem("users", JSON.stringify(users))
  }
}
