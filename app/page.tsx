import Link from "next/link"
import { CreditCard, BarChart3, BookOpen, Users } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center py-24">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        <div className="container relative">
          <div className="grid grid-2 items-center">
            <div>
              <h1 className="mb-4">
                Here to help <span className="text-primary">every</span> <br />
                university student.
              </h1>
              <p className="text-gray-600 mb-8 max-w-lg">
                SmartFin empowers college students with financial tools and education to build credit and prepare for
                their future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signin" className="btn btn-primary">
                  Create Account
                </Link>
                <Link href="#demo" className="btn btn-outline btn-outline-primary">
                  Demo
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-64 h-auto">
                <div className="bg-white rounded-3xl shadow-sm p-4 border">
                  <div className="bg-primary rounded-2xl p-4 text-white text-center">
                    <div className="text-xl font-medium mb-1">SmartFin</div>
                    <div className="flex justify-center mb-2">
                      <div className="w-16 h-12 bg-white/20 rounded-md flex items-center justify-center">
                        <div className="w-8 h-6 bg-white/40 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                    <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                    <div className="h-8 bg-primary/10 rounded w-full mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">
              Building Credit <span className="text-primary">Made Simple</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              SmartFin helps you build credit while providing tools to track your finances.
            </p>
          </div>

          <div className="grid grid-4">
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Credit Building</h3>
              <p className="text-gray-600 text-sm">
                Build your credit score with our student-focused credit building tools.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Financial Tracking</h3>
              <p className="text-gray-600 text-sm">
                Monitor your spending habits and set budgets to stay on track with your goals.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Financial Education</h3>
              <p className="text-gray-600 text-sm">
                Access educational resources to improve your understanding of credit, budgeting, and investing.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Community Support</h3>
              <p className="text-gray-600 text-sm">
                Connect with other students to share experiences and learn from each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-4">
            <div className="text-center">
              <div className="text-3xl font-medium text-primary mb-1">50K+</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-medium text-primary mb-1">200+</div>
              <div className="text-sm text-gray-600">Colleges</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-medium text-primary mb-1">85%</div>
              <div className="text-sm text-gray-600">Credit Improvement</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-medium text-primary mb-1">$2M+</div>
              <div className="text-sm text-gray-600">Student Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-header text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4">Ready to take control of your financial future?</h2>
            <p className="mb-8 text-gray-300">
              Join thousands of students already building credit and financial literacy with SmartFin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signin" className="btn btn-primary">
                Get Started
              </Link>
              <Link href="/features" className="btn btn-outline btn-outline-white">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-2">What Students Are Saying</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from students who are using SmartFin to take control of their financial future.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h4 className="font-medium">Alex Johnson</h4>
                  <p className="text-xs text-gray-500">UCLA, Junior</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "SmartFin helped me understand my credit score for the first time. I'm now confidently managing my
                finances while in college."
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h4 className="font-medium">Sophia Rodriguez</h4>
                  <p className="text-xs text-gray-500">NYU, Sophomore</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "I love how SmartFin rewards me for making smart financial decisions. The app is intuitive and perfect
                for students."
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h4 className="font-medium">Marcus Williams</h4>
                  <p className="text-xs text-gray-500">Howard University, Senior</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "As a first-generation college student, I had no idea where to start with finances. SmartFin guided me
                every step of the way."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
