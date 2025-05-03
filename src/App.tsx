"use client"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import FeaturesPage from "./pages/FeaturesPage"
import ShopPage from "./pages/ShopPage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import DashboardPage from "./pages/DashboardPage"
import PurchasesPage from "./pages/PurchasesPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check if user is logged in on component mount
  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      setIsLoggedIn(true)
    }
  }, [])

  // Simple auth functions
  const login = (email: string, password: string) => {
    // For simplicity, just check if email and password are not empty
    if (email && password) {
      // Create a simple user object
      const user = {
        email,
        name: email.split("@")[0],
        points: 10000,
      }

      // Store in localStorage
      localStorage.setItem("user", JSON.stringify(user))
      setIsLoggedIn(true)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem("user")
    setIsLoggedIn(false)
  }

  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar isLoggedIn={isLoggedIn} onLogout={logout} />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/shop" element={<ShopPage isLoggedIn={isLoggedIn} />} />
            <Route
              path="/signin"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <SignInPage onLogin={login} />}
            />
            <Route
              path="/signup"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <SignUpPage onLogin={login} />}
            />
            <Route path="/dashboard" element={isLoggedIn ? <DashboardPage /> : <Navigate to="/signin" />} />
            <Route path="/purchases" element={isLoggedIn ? <PurchasesPage /> : <Navigate to="/signin" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
