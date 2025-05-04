import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="header-section">
        <div className="container text-center">
          <h1 className="text-4xl mb-3">About</h1>
          <p className="text-gray-300 text-lg">Learn about our mission to empower students financially</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2 gap-12">
            <div>
              <h2 className="text-3xl mb-6">
                Financially empowering <span className="text-primary">every</span> student in America
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                We help students from all financial, ethnic, and social backgrounds get the opportunity to build their
                credit and financial habits well before they enter the workforce.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Underserved students are struggling to manage their financial circumstances at their colleges. SmartFin
                provides a solution that empowers students to use our credits for the future.
              </p>
              <p className="text-gray-600 text-lg">
                SmartFin is a student-centered mobile application providing products to build credit, track spending,
                and manage finances. Our personalized credit management plans provide healthy spending habits, and
                builds community around financial stability.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-3">Our Mission</h3>
                  <p className="text-gray-600">
                    To financially empower every student in America through accessible tools and education.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Our Vision</h3>
                  <p className="text-gray-600">
                    A world where all students have the financial knowledge and tools to succeed.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Our Values</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Accessibility</li>
                    <li>Education</li>
                    <li>Community</li>
                    <li>Innovation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Our Impact</h2>
          </div>

          <div className="grid grid-4 gap-6 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-primary font-medium text-4xl mb-2">50K+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-primary font-medium text-4xl mb-2">200+</div>
              <div className="text-gray-600">Colleges</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-primary font-medium text-4xl mb-2">85%</div>
              <div className="text-gray-600">Credit Improvement</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-primary font-medium text-4xl mb-2">$2M+</div>
              <div className="text-gray-600">Student Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Doing */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary-light text-primary px-4 py-2 rounded-full text-sm mb-3">
              What We're Doing
            </div>
            <h2 className="text-3xl">Our Approach</h2>
          </div>

          <div className="grid grid-3 gap-8">
            <div className="border rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary font-medium mr-4">
                  1
                </div>
                <h3 className="text-xl font-medium">Student-Centered Approach</h3>
              </div>
              <p className="text-gray-600">
                We put students at the center of all our product design decisions. Our app is designed specifically for
                the unique financial needs and challenges students face.
              </p>
            </div>

            <div className="border rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary font-medium mr-4">
                  2
                </div>
                <h3 className="text-xl font-medium">Financial Education</h3>
              </div>
              <p className="text-gray-600">
                We provide comprehensive resources to help students understand credit, budgeting, saving, and investing
                concepts in an accessible way.
              </p>
            </div>

            <div className="border rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary font-medium mr-4">
                  3
                </div>
                <h3 className="text-xl font-medium">Community Support</h3>
              </div>
              <p className="text-gray-600">
                Students connect with peers and mentors to share experiences and learn from each other's financial
                journeys.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/features" className="btn btn-primary px-8 py-3 text-base">
              Join Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Our Team</h2>
          </div>

          <div className="grid grid-4 gap-6">
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-medium mb-1">Ben Johnson</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-medium mb-1">Taylor Smith</h3>
              <p className="text-gray-500">Chief Technology Officer</p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-medium mb-1">Jordan Lee</h3>
              <p className="text-gray-500">Head of Product Development</p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-medium mb-1">Casey Morgan</h3>
              <p className="text-gray-500">Financial Education Strategist</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
