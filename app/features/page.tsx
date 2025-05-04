import Link from "next/link"

export default function FeaturesPage() {
  return (
    <>
      {/* Header */}
      <section className="header-section">
        <div className="container text-center">
          <h1 className="text-4xl mb-3">Features</h1>
          <p className="text-gray-300 text-lg">
            Discover how SmartFin helps students build credit and financial literacy
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl mb-6">
              This is <span className="text-primary italic">SmartFin</span>.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              SmartFin helps you build credit while you make purchases on the app. As an app, SmartFin uses your
              spending habits and financial data to help you manage your finances. For university students, SmartFin is
              designed to build financial literacy and credit history.
            </p>
          </div>

          <div className="grid grid-3 gap-8 mt-16">
            {/* Earn Points */}
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="bg-primary text-white p-4">
                <h3 className="text-xl font-medium">Earn Points</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-8">
                  SmartFin offers rewards for each purchase you make. Use your points to get discounts on future
                  purchases or pay off your credit card installments.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="text-primary font-medium text-2xl mb-1">500+</div>
                  <div className="text-gray-500">Points</div>
                </div>
                <p className="text-gray-500 text-sm">
                  You can convert your points into savings or apply to your credit card balance.
                </p>
              </div>
            </div>

            {/* Financial Insights */}
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="bg-primary text-white p-4">
                <h3 className="text-xl font-medium">Financial Insights</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-8">
                  Every month, we generate reports for your spending habits. These insights help you make informed
                  decisions and improve your financial literacy.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="text-primary font-medium text-2xl mb-1">85%</div>
                  <div className="text-gray-500">Smart Spend</div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-gray-100 px-3 py-2 rounded text-sm">Monthly</div>
                  <div className="bg-primary text-white px-3 py-2 rounded text-sm">Weekly</div>
                  <div className="bg-gray-100 px-3 py-2 rounded text-sm">Daily</div>
                </div>
              </div>
            </div>

            {/* Direct Support */}
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="bg-primary text-white p-4">
                <h3 className="text-xl font-medium">Direct Support</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-8">
                  Students have direct access to contact our team for financial advice. Our experts are available to
                  answer your questions and provide guidance.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="text-primary font-medium text-2xl mb-1">24/7</div>
                  <div className="text-gray-500">Support</div>
                </div>
                <div className="bg-gray-100 px-4 py-3 rounded-lg text-center">Schedule Appointment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Courses */}
      <section className="section section-alt">
        <div className="container">
          <div className="mb-12">
            <div className="inline-block bg-primary-light text-primary px-4 py-2 rounded-full text-sm mb-3">
              Financial Courses
            </div>
            <h2 className="text-3xl mb-4">Learn Together</h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              A gamified learning experience where students can join study groups to learn financial concepts together.
              Courses are designed to be fun, practical, and deliver real-world value.
            </p>
          </div>

          <div className="bg-white border rounded-lg p-8 max-w-md shadow-sm">
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="text-primary font-medium text-2xl mb-1">90%</div>
              <div className="text-gray-500">Pass</div>
            </div>
            <div className="text-gray-500 mb-6">Your score: Finance Basics</div>
            <Link href="#" className="btn btn-primary w-full block text-center py-3">
              Continue
            </Link>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="cta-section">
        <div className="container">
          <div className="text-center">
            <h2 className="cta-title">Ready to get started?</h2>
            <p className="cta-description">Download the SmartFin app today and start building your financial future.</p>
            <div className="cta-actions">
              <Link href="/signin" className="btn btn-primary">
                Sign Up
              </Link>
              <Link href="#" className="btn btn-outline btn-outline-white">
                Download App
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
