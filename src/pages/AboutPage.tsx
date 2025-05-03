import PageHeader from "../components/PageHeader"

export default function AboutPage() {
  return (
    <main>
      <PageHeader title="About Us" subtitle="Learn more about SmartFin and our mission" />

      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight md:text-4xl">Our Mission</h2>
              <p className="mb-4 text-gray-600">
                At SmartFin, we believe that financial literacy is a fundamental skill that every student should have
                access to. Our mission is to empower the next generation with the knowledge, tools, and community
                support they need to make informed financial decisions.
              </p>
              <p className="mb-4 text-gray-600">
                We're dedicated to breaking down complex financial concepts into accessible, engaging content that
                resonates with students. Through our platform, we aim to foster a community where students can learn,
                share, and grow their financial knowledge together.
              </p>
              <p className="text-gray-600">
                Our rewards program is designed to incentivize learning and positive financial habits, making the
                journey to financial literacy both educational and rewarding.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-64 overflow-hidden rounded-full bg-[#362a2a] p-4 md:h-80 md:w-80">
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
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16 rounded-xl bg-gray-50 p-8 md:p-12">
          <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight md:text-4xl">Our Story</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 text-gray-600">
                SmartFin was founded in 2020 by a group of college students who recognized a significant gap in
                financial education among their peers. Despite being on the cusp of major financial decisions—student
                loans, credit cards, investments—many students lacked the knowledge to make informed choices.
              </p>
              <p className="text-gray-600">
                What started as a small campus initiative quickly grew into a comprehensive platform serving students
                across the country. Today, SmartFin is a leading resource for financial literacy among college students,
                with a community of over 50,000 users.
              </p>
            </div>
            <div>
              <p className="mb-4 text-gray-600">
                Our team has grown to include financial experts, educators, and tech innovators, all united by a common
                goal: to make financial literacy accessible and engaging for every student in America.
              </p>
              <p className="text-gray-600">
                Through innovative technology, community-driven learning, and our unique rewards system, we're
                transforming how students approach their finances and building a foundation for their future financial
                success.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-gray-200">
                <div className="flex h-full w-full items-center justify-center bg-green-600 text-3xl font-bold text-white">
                  A
                </div>
              </div>
              <h3 className="mb-1 font-bold">Alex Johnson</h3>
              <p className="text-sm text-gray-500">Co-Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-gray-200">
                <div className="flex h-full w-full items-center justify-center bg-green-600 text-3xl font-bold text-white">
                  M
                </div>
              </div>
              <h3 className="mb-1 font-bold">Maya Patel</h3>
              <p className="text-sm text-gray-500">Co-Founder & COO</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-gray-200">
                <div className="flex h-full w-full items-center justify-center bg-green-600 text-3xl font-bold text-white">
                  D
                </div>
              </div>
              <h3 className="mb-1 font-bold">David Chen</h3>
              <p className="text-sm text-gray-500">CTO</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-gray-200">
                <div className="flex h-full w-full items-center justify-center bg-green-600 text-3xl font-bold text-white">
                  S
                </div>
              </div>
              <h3 className="mb-1 font-bold">Sarah Williams</h3>
              <p className="text-sm text-gray-500">Head of Education</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
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
                  <path d="M18 6 7 17l-5-5"></path>
                  <path d="m22 10-7.5 7.5L13 16"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Accessibility</h3>
              <p className="text-gray-600">
                We believe financial education should be accessible to all students, regardless of their background or
                current knowledge level.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
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
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Transparency</h3>
              <p className="text-gray-600">
                We're committed to being transparent in all our operations, from how our rewards system works to the
                advice we provide.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Community</h3>
              <p className="text-gray-600">
                We foster a supportive community where students can learn from each other and grow together on their
                financial journeys.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="rounded-xl bg-[#362a2a] p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get in Touch</h2>
              <p className="mb-6 text-gray-200">
                Have questions or feedback? We'd love to hear from you. Reach out to our team using the contact
                information below.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
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
                    className="mr-3 h-5 w-5 text-green-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
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
                    className="mr-3 h-5 w-5 text-green-400"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>contact@smartfin.com</span>
                </div>
                <div className="flex items-center">
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
                    className="mr-3 h-5 w-5 text-green-400"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>123 Financial Way, San Francisco, CA 94107</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <form className="w-full space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-md border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-md border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    rows={4}
                    className="w-full rounded-md border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 backdrop-blur-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-green-600 py-3 font-medium text-white transition-colors hover:bg-green-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
