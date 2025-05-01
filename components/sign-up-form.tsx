"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, ArrowRight, Check, Info } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function SignUpForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [step, setStep] = useState(1)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === "password") {
      // Simple password strength calculation
      let strength = 0
      if (value.length >= 8) strength += 1
      if (/[A-Z]/.test(value)) strength += 1
      if (/[0-9]/.test(value)) strength += 1
      if (/[^A-Za-z0-9]/.test(value)) strength += 1
      setPasswordStrength(strength)
    }

    if (name === "confirmPassword" || name === "password") {
      if (name === "confirmPassword") {
        setPasswordMatch(value === formData.password)
      } else {
        setPasswordMatch(value === formData.confirmPassword)
      }
    }
  }

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      console.log("Registering user...")
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to create account")
      }

      console.log("Registration successful, signing in...")

      // Sign in the user
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      })

      if (result?.error) {
        console.error("Sign in error:", result.error)
        throw new Error(result.error)
      }

      // Redirect to dashboard or home page
      console.log("Sign in successful, redirecting...")
      router.push("/")
      router.refresh()
    } catch (error: any) {
      console.error("Registration/login error:", error)
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialSignIn = async (provider: string) => {
    try {
      await signIn(provider, { callbackUrl: "/" })
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error)
    }
  }

  return (
    <div className="w-full">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
        <p className="mt-2 text-sm text-gray-600">Join SmartFin and start building your financial future</p>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-800"
        >
          {error}
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleNextStep} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="relative flex w-full items-center justify-center rounded-lg bg-green-600 px-5 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Continue
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    placeholder="••••••••"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="mt-2">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs text-gray-500">Password strength:</span>
                    <span
                      className={`text-xs font-medium ${
                        passwordStrength === 0
                          ? "text-gray-400"
                          : passwordStrength === 1
                            ? "text-red-500"
                            : passwordStrength === 2
                              ? "text-orange-500"
                              : passwordStrength === 3
                                ? "text-yellow-500"
                                : "text-green-500"
                      }`}
                    >
                      {passwordStrength === 0
                        ? "None"
                        : passwordStrength === 1
                          ? "Weak"
                          : passwordStrength === 2
                            ? "Fair"
                            : passwordStrength === 3
                              ? "Good"
                              : "Strong"}
                    </span>
                  </div>
                  <div className="flex h-1.5 w-full space-x-1 rounded-full bg-gray-200">
                    <div
                      className={`h-full rounded-full ${
                        passwordStrength >= 1
                          ? passwordStrength === 1
                            ? "bg-red-500"
                            : passwordStrength === 2
                              ? "bg-orange-500"
                              : passwordStrength === 3
                                ? "bg-yellow-500"
                                : "bg-green-500"
                          : "bg-gray-300"
                      }`}
                      style={{ width: "25%" }}
                    ></div>
                    <div
                      className={`h-full rounded-full ${
                        passwordStrength >= 2
                          ? passwordStrength === 2
                            ? "bg-orange-500"
                            : passwordStrength === 3
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          : "bg-gray-300"
                      }`}
                      style={{ width: "25%" }}
                    ></div>
                    <div
                      className={`h-full rounded-full ${
                        passwordStrength >= 3
                          ? passwordStrength === 3
                            ? "bg-yellow-500"
                            : "bg-green-500"
                          : "bg-gray-300"
                      }`}
                      style={{ width: "25%" }}
                    ></div>
                    <div
                      className={`h-full rounded-full ${passwordStrength >= 4 ? "bg-green-500" : "bg-gray-300"}`}
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center text-xs">
                    <Check
                      size={12}
                      className={`mr-1 ${formData.password.length >= 8 ? "text-green-500" : "text-gray-300"}`}
                    />
                    <span className={formData.password.length >= 8 ? "text-green-700" : "text-gray-500"}>
                      At least 8 characters
                    </span>
                  </div>
                  <div className="flex items-center text-xs">
                    <Check
                      size={12}
                      className={`mr-1 ${/[A-Z]/.test(formData.password) ? "text-green-500" : "text-gray-300"}`}
                    />
                    <span className={/[A-Z]/.test(formData.password) ? "text-green-700" : "text-gray-500"}>
                      At least one uppercase letter
                    </span>
                  </div>
                  <div className="flex items-center text-xs">
                    <Check
                      size={12}
                      className={`mr-1 ${/[0-9]/.test(formData.password) ? "text-green-500" : "text-gray-300"}`}
                    />
                    <span className={/[0-9]/.test(formData.password) ? "text-green-700" : "text-gray-500"}>
                      At least one number
                    </span>
                  </div>
                  <div className="flex items-center text-xs">
                    <Check
                      size={12}
                      className={`mr-1 ${/[^A-Za-z0-9]/.test(formData.password) ? "text-green-500" : "text-gray-300"}`}
                    />
                    <span className={/[^A-Za-z0-9]/.test(formData.password) ? "text-green-700" : "text-gray-500"}>
                      At least one special character
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`block w-full rounded-lg border ${
                      formData.confirmPassword && !passwordMatch
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300 bg-gray-50"
                    } p-3 text-gray-900 shadow-sm focus:border-green-500 focus:ring-2 focus:ring-green-200`}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {formData.confirmPassword && !passwordMatch && (
                  <p className="mt-1 text-xs text-red-500">Passwords do not match</p>
                )}
              </div>

              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-green-600 focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700">
                    I agree to the{" "}
                    <Link href="/terms" className="text-green-600 hover:text-green-700">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-green-600 hover:text-green-700">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading || !passwordMatch}
                className="relative flex w-full items-center justify-center rounded-lg bg-green-600 px-5 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-green-400"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="mr-2 h-5 w-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating account...
                  </>
                ) : (
                  <>
                    Create account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </motion.button>

              <div className="flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm font-medium text-green-600 hover:text-green-700"
                >
                  Back to previous step
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Or sign up with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={() => handleSocialSignIn("google")}
            type="button"
            className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Google
          </button>
          <button
            onClick={() => handleSocialSignIn("github")}
            type="button"
            className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </button>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/signin" className="font-medium text-green-600 hover:text-green-700">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-6 rounded-lg bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <Info className="h-5 w-5 text-green-600" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">Student verification</h3>
            <div className="mt-2 text-sm text-green-700">
              <p>
                After creating your account, you'll be able to verify your student status to unlock additional features
                and benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
