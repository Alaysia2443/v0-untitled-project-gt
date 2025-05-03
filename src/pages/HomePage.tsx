"use client"

import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function HomePage() {
  const { user } = useAuth()

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#362a2a] py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Financial freedom starts with SmartFin
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Empowering students with the tools, knowledge, and community to build a strong financial foundation for
                the future.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {!user ? (
                  <Link
                    to="/signup"
                    className="inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-green-700"
                  >
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-5 w-5"
                    >
                      <path d="m5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                ) : (
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-green-700"
                  >
                    My Dashboard
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-5 w-5"
                    >
                      <path d="m5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                )}
                <Link
                  to="/features"
                  className="inline-flex items-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-64 overflow-hidden rounded-full bg-white/10 p-4 backdrop-blur-sm md:h-80 md:w-80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-48 w-48 text-green-500 opacity-50 md:h-64 md:w-64"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Bar */}
      <div className="flex h-2 md:h-3">
        <div className="h-full w-1/2 bg-[#7d8e75]"></div>
        <div className="h-full w-1/2 bg-[#9c9494]"></div>
      </div>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Why Choose SmartFin?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We provide the tools and resources you need to take control of your financial future.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Financial Education</h3>
              <p className="text-gray-600">
                Access courses, articles, and tools designed to help you understand personal finance concepts.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                  <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                  <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Rewards Program</h3>
              <p className="text-gray-600">
                Earn points for completing financial tasks and redeem them for exclusive products and services.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <circle cx="12" cy="10" r="2"></circle>
                  <line x1="8" x2="8" y1="2" y2="4"></line>
                  <line x1="16" x2="16" y1="2" y2="4"></line>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Community Support</h3>
              <p className="text-gray-600">
                Connect with peers and financial experts to share knowledge and get personalized advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-xl bg-gradient-to-r from-[#362a2a] to-[#4a3c3c] p-8 text-white md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to take control of your finances?</h2>
                <p className="mb-6 text-gray-200">
                  Join thousands of students who are building their financial future with SmartFin. Sign up today and
                  get 10,000 points to start your journey.
                </p>
                {!user ? (
                  <Link
                    to="/signup"
                    className="inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-green-700"
                  >
                    Sign Up Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-5 w-5"
                    >
                      <path d="m5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                ) : (
                  <Link
                    to="/shop"
                    className="inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-green-700"
                  >
                    Visit Shop
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-5 w-5"
                    >
                      <path d="m5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                )}
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">10,000</div>
                    <div className="text-sm text-gray-200">Starting Points</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-gray-200">Support</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm text-gray-200">Products</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">50K+</div>
                    <div className="text-sm text-gray-200">Users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">What Our Users Say</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Hear from students who have transformed their financial lives with SmartFin.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <div className="flex h-full w-full items-center justify-center bg-green-600 text-xl font-bold text-white">
                    J
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">Jamie L.</h3>
                  <p className="text-sm text-gray-500">University of Michigan</p>
                </div>
              </div>
              <p className="text-gray-600">
                "SmartFin helped me understand how to budget effectively and save for my future. The rewards program is
                an amazing bonus!"
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <div className="flex h-full w-full items-center justify-center bg-green-600 text-xl font-bold text-white">
                    M
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">Michael T.</h3>
                  <p className="text-sm text-gray-500">UCLA</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The community support on SmartFin is incredible. I've learned so much from other students and the
                financial experts."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <div className="flex h-full w-full items-center justify-center bg-green-600 text-xl font-bold text-white">
                    S
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">Sarah K.</h3>
                  <p className="text-sm text-gray-500">NYU</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I've redeemed my points for some amazing products. It's a great incentive to stay on top of my finances
                and learn more."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
