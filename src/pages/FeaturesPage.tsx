import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"

export default function FeaturesPage() {
  return (
    <main>
      <PageHeader title="Features" subtitle="Discover all the tools and resources SmartFin offers" />

      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        {/* Main Features Section */}
        <section className="mb-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight md:text-4xl">
                Everything You Need for Financial Success
              </h2>
              <p className="mb-6 text-gray-600">
                SmartFin provides a comprehensive suite of tools and resources designed specifically for students. From
                educational content to rewards and community support, we've got everything you need to build a strong
                financial foundation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Financial Education</h3>
                    <p className="text-sm text-gray-600">
                      Access courses, articles, and tools designed to help you understand personal finance concepts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Rewards Program</h3>
                    <p className="text-sm text-gray-600">
                      Earn points for completing financial tasks and redeem them for exclusive products and services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Community Support</h3>
                    <p className="text-sm text-gray-600">
                      Connect with peers and financial experts to share knowledge and get personalized advice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-64 overflow-hidden rounded-xl bg-[#362a2a] p-4 md:h-80 md:w-80">
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
        </section>

        {/* Feature Cards Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Explore Our Features
          </h2>
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
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Financial Courses</h3>
              <p className="mb-4 text-gray-600">
                Access a library of interactive courses covering everything from budgeting basics to advanced investment
                strategies.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-600"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Self-paced learning
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-600"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Interactive quizzes
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-600"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Earn points for completion
                </li>
              </ul>
              <a href="#" className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
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
              <h3 className="mb-2 text-xl font-bold">Points & Rewards</h3>
              <p className="mb-4 text-gray-600">
                Earn points for completing financial tasks and learning activities, then redeem them for exclusive
                products and services.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-600"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  10,000 starting points
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-600"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Daily point opportunities
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-600"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Exclusive product shop
                </li>
              </ul>
              <Link
                to="/shop"
                className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
              >
                Visit shop
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Link>
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
              <h3 className="mb-2 text-xl font-bold">Community & Support</h3>
              <p className="mb-4 text-gray-600">
                Connect with peers and financial experts to share knowledge, ask questions, and get personalized advice.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-600"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Discussion forums
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-600"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Expert Q&A sessions
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-600"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Peer mentorship
                </li>
              </ul>
              <Link
                to="/messages"
                className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
              >
                Join community
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="mb-16 rounded-xl bg-gray-50 p-8 md:p-12">
          <h2 className="mb-8 font-serif text-3xl font-bold tracking-tight md:text-4xl">Financial Tools</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold">Budget Calculator</h3>
              <p className="mb-4 text-gray-600">
                Our interactive budget calculator helps you create a personalized budget based on your income, expenses,
                and financial goals. Track your spending, identify areas for improvement, and stay on top of your
                finances.
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                Try Budget Calculator
              </a>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Loan Simulator</h3>
              <p className="mb-4 text-gray-600">
                Understand the true cost of loans with our loan simulator. Compare different loan options, see how
                interest rates affect your payments, and create a repayment plan that works for your budget.
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                Try Loan Simulator
              </a>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Savings Goal Tracker</h3>
              <p className="mb-4 text-gray-600">
                Set savings goals and track your progress over time. Our tool helps you visualize your progress, adjust
                your strategy as needed, and stay motivated to reach your financial goals.
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                Try Savings Goal Tracker
              </a>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Investment Calculator</h3>
              <p className="mb-4 text-gray-600">
                Explore the power of compound interest and see how your investments could grow over time. Adjust
                variables like contribution amount, interest rate, and time horizon to plan your investment strategy.
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                Try Investment Calculator
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-xl bg-gradient-to-r from-[#362a2a] to-[#4a3c3c] p-8 text-white md:p-12">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to get started?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-200">
              Join thousands of students who are building their financial future with SmartFin. Sign up today and get
              10,000 points to start your journey.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-green-700"
            >
              Create Your Account
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
          </div>
        </section>
      </div>
    </main>
  )
}
