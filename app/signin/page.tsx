"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/lib/auth-context"
import { useToast } from "@/components/ui/use-toast"

export default function SignInPage() {
  const router = useRouter()
  const { user, login, signup } = useAuth()
  const { toast } = useToast()

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      router.push("/")
    }
  }, [user, router])

  // Sign In form state
  const [signInEmail, setSignInEmail] = useState("")
  const [signInPassword, setSignInPassword] = useState("")
  const [signInLoading, setSignInLoading] = useState(false)

  // Sign Up form state
  const [signUpName, setSignUpName] = useState("")
  const [signUpEmail, setSignUpEmail] = useState("")
  const [signUpPassword, setSignUpPassword] = useState("")
  const [signUpLoading, setSignUpLoading] = useState(false)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setSignInLoading(true)

    try {
      const success = await login(signInEmail, signInPassword)

      if (success) {
        toast({
          title: "Sign in successful",
          description: "Welcome back to SmartFin!",
        })
        router.push("/")
      } else {
        toast({
          title: "Sign in failed",
          description: "Please check your email and password.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Sign in error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSignInLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setSignUpLoading(true)

    try {
      const success = await signup(signUpName, signUpEmail, signUpPassword)

      if (success) {
        toast({
          title: "Account created",
          description: "Welcome to SmartFin! Your account has been created with 2000 points.",
        })
        router.push("/")
      } else {
        toast({
          title: "Sign up failed",
          description: "This email may already be registered. Please try another email.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Sign up error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSignUpLoading(false)
    }
  }

  return (
    <div className="container max-w-md py-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold font-sans">Welcome to SmartFin</h1>
        <p className="text-gray-600 mt-2 font-light">Access your account to manage your points</p>
      </div>

      <Tabs defaultValue="signin" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="signin" className="text-lg py-3">
            Sign In
          </TabsTrigger>
          <TabsTrigger value="signup" className="text-lg py-3">
            Sign Up
          </TabsTrigger>
        </TabsList>

        <TabsContent value="signin">
          <form onSubmit={handleSignIn} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={signInEmail}
                onChange={(e) => setSignInEmail(e.target.value)}
                required
                className="py-6 text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-base font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
                required
                className="py-6 text-base"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#4CAF50] hover:bg-[#3e8e41] py-6 text-lg"
              disabled={signInLoading}
            >
              {signInLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <Link href="#" className="text-[#4CAF50] hover:underline">
              Forgot password?
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="signup">
          <form onSubmit={handleSignUp} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={signUpName}
                onChange={(e) => setSignUpName(e.target.value)}
                required
                className="py-6 text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-email" className="text-base font-medium">
                Email
              </Label>
              <Input
                id="signup-email"
                type="email"
                placeholder="your@email.com"
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
                required
                className="py-6 text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password" className="text-base font-medium">
                Password
              </Label>
              <Input
                id="signup-password"
                type="password"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
                required
                className="py-6 text-base"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#4CAF50] hover:bg-[#3e8e41] py-6 text-lg"
              disabled={signUpLoading}
            >
              {signUpLoading ? "Creating account..." : "Sign Up"}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              By signing up, you agree to our{" "}
              <Link href="#" className="text-[#4CAF50] hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-[#4CAF50] hover:underline">
                Privacy Policy
              </Link>
            </p>
            <p className="mt-2 text-[#4CAF50] font-medium">New users receive 2000 points to start!</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
