import Link from "next/link"

export default function FeaturesPage() {
  return (
    <>
      {/* Header */}
      <section className="header-section">
        <div className="container text-center">
          <h1 className="mb-2">Features</h1>
          <p className="text-gray-300">Discover how SmartFin helps students build credit and financial literacy</p>
        </div>
      </section>

      {/* Main Features */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">
              This is <span className="text-primary italic">SmartFin</span>.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              SmartFin helps you build credit while you make purchases on the app. As an app, SmartFin uses your
              spending habits and financial data to help you manage your finances. For university students, SmartFin is
              designed to build financial literacy and credit history.
            </p>
          </div>

          <div className="grid grid-3 mt-12">
            {/* Earn Points */}
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="bg-primary text-white p-3">
                <h3 className="font-medium">Earn Points</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-6">
                  SmartFin offers rewards for each purchase you make. Use your points to get discounts on future
                  purchases or pay off your credit card installments.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="text-primary font-medium text-xl">500+</div>
                  <div className="text-xs text-gray-500">Points</div>
                </div>
                <p className="text-xs text-gray-500">
                  You can convert your points into savings or apply to your credit card balance.
                </p>
              </div>
            </div>

            {/* Financial Insights */}
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="bg-primary text-white p-3">
                <h3 className="font-medium">Financial Insights</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-6">
                  Every month, we generate reports for your spending habits. These insights help you make informed
                  decisions and improve your financial literacy.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="text-primary font-medium text-xl">85%</div>
                  <div className="text-xs text-gray-500">Smart Spend</div>
                </div>
                <div className="flex gap-2 text-xs">
                  <div className="bg-gray-100 px-2 py-1 rounded">Monthly</div>
                  <div className="bg-primary text-white px-2 py-1 rounded">Weekly</div>
                  <div className="bg-gray-100 px-2 py-1 rounded">Daily</div>
                </div>
              </div>
            </div>

            {/* Direct Support */}
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="bg-primary text-white p-3">
                <h3 className="font-medium">Direct Support</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-6">
                  Students have direct access to contact our team for financial advice. Our experts are available to
                  answer your questions and provide guidance.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="text-primary font-medium text-xl">24/7</div>
                  <div className="text-xs text-gray-500">Support</div>
                </div>
                <div className="bg-gray-100 px-3 py-2 rounded-lg text-center text-xs">Schedule Appointment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Courses */}
      <section className="section section-alt">
        <div className="container">
          <div className="mb-8">
            <div className="inline-block bg-primary-light text-primary px-3 py-1 rounded-full text-sm mb-2">
              Financial Courses
            </div>
            <h2 className="mb-2">Learn Together</h2>
            <p className="text-gray-600 max-w-2xl">
              A gamified learning experience where students can join study groups to learn financial concepts together.
              Courses are designed to be fun, practical, and deliver real-world value.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-6 max-w-sm shadow-sm">
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="text-primary font-medium text-xl">90%</div>
              <div className="text-xs text-gray-500">Pass</div>
            </div>
            <div className="text-xs text-gray-500 mb-4">Your score: Finance Basics</div>
            <Link href="#" className="btn btn-primary w-full block text-center">
              Continue
            </Link>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="section bg-header text-white">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="mb-2">Ready to get started?</h2>
            <p className="text-gray-300">Download the SmartFin app today and start building your financial future.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signin" className="btn btn-primary">
              Sign Up
            </Link>
            <Link href="#" className="btn btn-outline btn-outline-white">
              Download App
            </Link>
          </div>

          <div className="flex justify-center mt-6 gap-4">
            <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center">
              <span className="text-sm">App Store</span>
            </div>
            <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center">
              <span className="text-sm">Google Play</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
