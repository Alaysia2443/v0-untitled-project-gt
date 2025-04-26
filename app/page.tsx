import type React from "react"
import Link from "next/link"
import { ArrowRight, CreditCard, TrendingUp, BookOpen, Users } from "lucide-react"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-fixed bg-center opacity-5"></div>
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24 lg:py-32">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="max-w-xl">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Here to help <span className="text-green-600">every</span> university student.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We offer personalized credit management plans, promote healthy spending habits, and provide financial
                education to help every college student build financial stability.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/features"
                  className="inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-green-700"
                >
                  Explore Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/signin"
                  className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                >
                  Sign In
                </Link>
              </div>
            </div>
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl bg-white shadow-xl md:ml-auto">
              <div className="absolute left-0 top-0 h-24 w-24 bg-gradient-to-br from-green-500 to-green-600"></div>
              <div className="p-8">
                <div className="mb-6 font-serif text-2xl font-medium">
                  Demo
                  <br />
                  goes
                  <br />
                  here
                </div>
                <div className="space-y-4">
                  <div className="h-12 rounded-lg bg-gray-100"></div>
                  <div className="h-32 rounded-lg bg-gray-100"></div>
                  <div className="h-12 rounded-lg bg-gray-100"></div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button className="rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
                    Try Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-3">
          <div className="h-full w-1/2 bg-[#7d8e75]"></div>
          <div className="h-full w-1/2 bg-[#9c9494]"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              Building Credit <span className="text-green-600">Made Simple</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              SmartFin helps you build credit while making purchases, all in one easy-to-use platform.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<CreditCard className="h-8 w-8 text-green-600" />}
              title="Credit Building"
              description="Build your credit score with everyday purchases through our secure platform."
            />
            <FeatureCard
              icon={<TrendingUp className="h-8 w-8 text-green-600" />}
              title="Financial Tracking"
              description="Monitor your spending habits and track your financial growth in real-time."
            />
            <FeatureCard
              icon={<BookOpen className="h-8 w-8 text-green-600" />}
              title="Financial Education"
              description="Access educational resources to improve your financial literacy and decision-making."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-green-600" />}
              title="Community Support"
              description="Connect with other students on similar financial journeys for support and motivation."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#362a2a] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to take control of your financial future?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Join thousands of students already building credit and financial literacy with SmartFin.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/signin"
                className="inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-green-700"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              What Students Are Saying
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear from students who have transformed their financial futures with SmartFin.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <TestimonialCard
              quote="SmartFin helped me build my credit score from nothing to excellent in just one year of college. The educational resources were invaluable."
              name="Alex Johnson"
              role="Junior, Business Major"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="I never thought managing finances could be this easy. The app is intuitive and the community support keeps me motivated."
              name="Taylor Smith"
              role="Sophomore, Engineering"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="As a first-generation college student, I had no idea how to build credit. SmartFin made it simple and stress-free."
              name="Jordan Lee"
              role="Senior, Psychology"
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="mb-4 rounded-full bg-green-50 p-3 inline-flex">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, name, role, image }: { quote: string; name: string; role: string; image: string }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="mb-4 text-green-600">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.17 6C9.58 6 9.92 6.34 9.92 6.75C9.92 7.16 9.58 7.5 9.17 7.5H7.92C6.99 7.5 6.25 8.34 6.25 9.27C6.25 10.2 6.99 11.04 7.92 11.04H8.42C10.85 11.04 12.84 13.11 12.76 15.54C12.68 17.84 10.76 19.7 8.46 19.7H6.59C5.61 19.7 4.71 19.33 4.03 18.7C3.35 18.07 2.92 17.2 2.92 16.22C2.92 15.82 3.26 15.47 3.67 15.47C4.08 15.47 4.42 15.82 4.42 16.22C4.42 16.76 4.66 17.27 5.06 17.64C5.46 18.01 6 18.2 6.59 18.2H8.46C9.95 18.2 11.18 17.01 11.26 15.52C11.34 13.91 10.06 12.54 8.42 12.54H7.92C6.2 12.54 4.75 11.09 4.75 9.27C4.75 7.45 6.2 6 7.92 6H9.17Z"
            fill="currentColor"
          />
          <path
            d="M17.75 6C18.16 6 18.5 6.34 18.5 6.75C18.5 7.16 18.16 7.5 17.75 7.5H16.5C15.57 7.5 14.83 8.34 14.83 9.27C14.83 10.2 15.57 11.04 16.5 11.04H17C19.43 11.04 21.42 13.11 21.34 15.54C21.26 17.84 19.34 19.7 17.04 19.7H15.17C14.19 19.7 13.29 19.33 12.61 18.7C11.93 18.07 11.5 17.2 11.5 16.22C11.5 15.82 11.84 15.47 12.25 15.47C12.66 15.47 13 15.82 13 16.22C13 16.76 13.24 17.27 13.64 17.64C14.04 18.01 14.58 18.2 15.17 18.2H17.04C18.53 18.2 19.76 17.01 19.84 15.52C19.92 13.91 18.64 12.54 17 12.54H16.5C14.78 12.54 13.33 11.09 13.33 9.27C13.33 7.45 14.78 6 16.5 6H17.75Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="mb-4 text-gray-700">{quote}</p>
      <div className="flex items-center">
        <img src={image || "/placeholder.svg"} alt={name} className="mr-3 h-10 w-10 rounded-full object-cover" />
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  )
}
