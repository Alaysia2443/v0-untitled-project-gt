import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#111] py-24 text-white">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Here to help <span className="text-green-500">every</span> <br />
              university student.
            </h1>
            <p className="mt-6 max-w-md text-lg text-gray-300">
              We offer personalized credit management tools, student-friendly spending habits, and financial education
              to help every campus in America.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="flex items-center rounded-md bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
              >
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
                  className="mr-2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Now
              </Link>
              <Link
                to="/features"
                className="flex items-center rounded-md border border-gray-600 px-6 py-3 font-medium text-white hover:bg-white/10"
              >
                Learn More
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
                  className="ml-2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[500px] w-[250px] rounded-[40px] border-8 border-gray-800 bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
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
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Features</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center">
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
                  className="text-green-600"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Credit Management</h3>
              <p className="text-gray-600">Tools to help you build and maintain good credit.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center">
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
                  className="text-green-600"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Spending Habits</h3>
              <p className="text-gray-600">Learn how to manage your money effectively.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center">
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
                  className="text-green-600"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Financial Education</h3>
              <p className="text-gray-600">Resources to improve your financial literacy.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
