import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import { ProductProvider } from "./contexts/ProductContext"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import FeaturesPage from "./pages/FeaturesPage"
import ShopPage from "./pages/ShopPage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import DashboardPage from "./pages/DashboardPage"
import MessagesPage from "./pages/MessagesPage"
import PurchasesPage from "./pages/PurchasesPage"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="features" element={<FeaturesPage />} />
              <Route path="shop" element={<ShopPage />} />
              <Route path="signin" element={<SignInPage />} />
              <Route path="signup" element={<SignUpPage />} />
              <Route
                path="dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="messages"
                element={
                  <ProtectedRoute>
                    <MessagesPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="purchases"
                element={
                  <ProtectedRoute>
                    <PurchasesPage />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </Router>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App
