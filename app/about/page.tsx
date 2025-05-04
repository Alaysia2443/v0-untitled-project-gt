import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="header-section">
        <div className="container text-center">
          <h1 className="mb-2">About</h1>
          <p className="text-gray-300">Learn about our mission to empower students financially</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2 gap-12">
            <div>
              <h2 className="mb-4">
                Financially empowering <span className="text-primary">every</span> student in America
              </h2>
              <p className="text-gray-600 mb-4">
                We help students from all financial, ethnic, and social backgrounds get the opportunity to build their
                credit and financial habits well before they enter the workforce.
              </p>
              <p className="text-gray-600 mb-4">
                Underserved students are struggling to manage their financial circumstances at their colleges. SmartFin
                provides a solution that empowers students to use our credits for the future.
              </p>
              <p className="text-gray-600">
                SmartFin is a student-centered mobile application providing products to build credit, track spending,
                and manage finances. Our personalized credit management plans provide healthy spending habits, and
                builds community around financial stability.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To financially empower every student in America through accessible tools and education.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    A world where all students have the financial knowledge and tools to succeed.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Our Values</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
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
          <div className="text-center mb-8">
            <h2 className="mb-2">Our Impact</h2>
          </div>

          <div className="grid grid-4 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-primary font-medium text-3xl mb-1">50K+</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-primary font-medium text-3xl mb-1">200+</div>
              <div className="text-sm text-gray-600">Colleges</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-primary font-medium text-3xl mb-1">85%</div>
              <div className="text-sm text-gray-600">Credit Improvement</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-primary font-medium text-3xl mb-1">$2M+</div>
              <div className="text-sm text-gray-600">Student Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Doing */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <div className="inline-block bg-primary-light text-primary px-3 py-1 rounded-full text-sm mb-2">
              What We're Doing
            </div>
            <h2>Our Approach</h2>
          </div>

          <div className="grid grid-3">
            <div className="border rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-primary font-medium mr-3">
                  1
                </div>
                <h3 className="font-medium">Student-Centered Approach</h3>
              </div>
              <p className="text-gray-600 text-sm">
                We put students at the center of all our product design decisions. Our app is designed specifically for
                the unique financial needs and challenges students face.
              </p>
            </div>

            <div className="border rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-primary font-medium mr-3">
                  2
                </div>
                <h3 className="font-medium">Financial Education</h3>
              </div>
              <p className="text-gray-600 text-sm">
                We provide comprehensive resources to help students understand credit, budgeting, saving, and investing
                concepts in an accessible way.
              </p>
            </div>

            <div className="border rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-primary font-medium mr-3">
                  3
                </div>
                <h3 className="font-medium">Community Support</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Students connect with peers and mentors to share experiences and learn from each other's financial
                journeys.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/features" className="btn btn-primary">
              Join Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-8">
            <h2>Our Team</h2>
          </div>

          <div className="grid grid-4">
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-medium">Ben Johnson</h3>
              <p className="text-gray-500 text-sm">Founder & CEO</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-medium">Taylor Smith</h3>
              <p className="text-gray-500 text-sm">Chief Technology Officer</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-medium">Jordan Lee</h3>
              <p className="text-gray-500 text-sm">Head of Product Development</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-medium">Casey Morgan</h3>
              <p className="text-gray-500 text-sm">Financial Education Strategist</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
