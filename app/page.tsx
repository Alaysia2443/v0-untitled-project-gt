import Link from "next/link"
import { CreditCard, BarChart3, BookOpen, Users } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-[url('/placeholder.svg?height=1080&width=1920')]">
        <div className="hero-overlay"></div>
        <div className="container relative">
          <div className="grid grid-2 items-center gap-12">
            <div className="hero-content">
              <h1 className="hero-title">
                Here to help <span className="text-primary">every</span> <br />
                university student.
              </h1>
              <p className="hero-description">
                SmartFin empowers college students with financial tools and education to build credit and prepare for
                their future.
              </p>
              <div className="hero-actions">
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
                <div className="bg-white rounded-3xl shadow-sm p-6 border">
                  <div className="bg-primary rounded-2xl p-4 text-white text-center">
                    <div className="text-xl font-medium mb-2">SmartFin</div>
                    <div className="flex justify-center mb-3">
                      <div className="w-16 h-12 bg-white/20 rounded-md flex items-center justify-center">
                        <div className="w-8 h-6 bg-white/40 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    <div className="h-4 bg-gray-100 rounded-full w-full"></div>
                    <div className="h-4 bg-gray-100 rounded-full w-3/4"></div>
                    <div className="h-8 bg-primary/10 rounded-full w-full mt-5"></div>
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
            <h2 className="text-4xl mb-4">
              Building Credit <span className="text-primary">Made Simple</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              SmartFin helps you build credit while providing tools to track your finances.
            </p>
          </div>

          <div className="grid grid-4 gap-6">
            <div className="feature-card">
              <div className="feature-icon">
                <CreditCard />
              </div>
              <h3 className="feature-title">Credit Building</h3>
              <p className="feature-description">
                Build your credit score with our student-focused credit building tools.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <BarChart3 />
              </div>
              <h3 className="feature-title">Financial Tracking</h3>
              <p className="feature-description">
                Monitor your spending habits and set budgets to stay on track with your goals.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <BookOpen />
              </div>
              <h3 className="feature-title">Financial Education</h3>
              <p className="feature-description">
                Access educational resources to improve your understanding of credit, budgeting, and investing.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users />
              </div>
              <h3 className="feature-title">Community Support</h3>
              <p className="feature-description">
                Connect with other students to share experiences and learn from each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-4 gap-6">
            <div className="stat-container">
              <div className="stat-value">50K+</div>
              <div className="stat-label">Students</div>
            </div>

            <div className="stat-container">
              <div className="stat-value">200+</div>
              <div className="stat-label">Colleges</div>
            </div>

            <div className="stat-container">
              <div className="stat-value">85%</div>
              <div className="stat-label">Credit Improvement</div>
            </div>

            <div className="stat-container">
              <div className="stat-value">$2M+</div>
              <div className="stat-label">Student Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="text-center">
            <h2 className="cta-title">Ready to take control of your financial future?</h2>
            <p className="cta-description">
              Join thousands of students already building credit and financial literacy with SmartFin.
            </p>
            <div className="cta-actions">
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
            <h2 className="text-4xl mb-4">What Students Are Saying</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Hear from students who are using SmartFin to take control of their financial future.
            </p>
          </div>

          <div className="grid grid-3 gap-6">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar"></div>
                <div>
                  <h4 className="testimonial-name">Alex Johnson</h4>
                  <p className="testimonial-role">UCLA, Junior</p>
                </div>
              </div>
              <p className="testimonial-content">
                "SmartFin helped me understand my credit score for the first time. I'm now confidently managing my
                finances while in college."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar"></div>
                <div>
                  <h4 className="testimonial-name">Sophia Rodriguez</h4>
                  <p className="testimonial-role">NYU, Sophomore</p>
                </div>
              </div>
              <p className="testimonial-content">
                "I love how SmartFin rewards me for making smart financial decisions. The app is intuitive and perfect
                for students."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar"></div>
                <div>
                  <h4 className="testimonial-name">Marcus Williams</h4>
                  <p className="testimonial-role">Howard University, Senior</p>
                </div>
              </div>
              <p className="testimonial-content">
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
