import Link from "next/link"
import Image from "next/image"
import PageHeader from "@/components/page-header"
import SectionCard from "@/components/section-card"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <main>
      <PageHeader title="About" subtitle="Learn about our mission to empower students financially" />

      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Financially empowering <span className="text-green-600">every student</span> in America
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              We help students from all financial, ethnic, and social backgrounds get the opportunity to build their
              credit and financial plans well before they enter the workforce.
            </p>

            <div className="mb-8 overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Diverse group of students"
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="mr-3 h-6 w-6 text-green-600" />
                <div>
                  <h3 className="text-lg font-medium">Student-Centered Approach</h3>
                  <p className="text-gray-600">
                    Our platform is designed specifically for the unique financial needs and challenges of university
                    students.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-3 h-6 w-6 text-green-600" />
                <div>
                  <h3 className="text-lg font-medium">Financial Education</h3>
                  <p className="text-gray-600">
                    We provide comprehensive resources to help students understand credit, budgeting, and financial
                    planning.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-3 h-6 w-6 text-green-600" />
                <div>
                  <h3 className="text-lg font-medium">Community Support</h3>
                  <p className="text-gray-600">
                    Students connect with peers and mentors to share experiences and learn from each other.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionCard title="Why?">
              <div className="space-y-6">
                <p className="text-gray-700">
                  Underserved students are struggling to manage their financial plans without a financial understanding
                  of their options. SmartFin provides a solution that empowers students to set up their credits for the
                  future.
                </p>
                <p className="text-gray-700">
                  SmartFin is a student-centered mobile application empowering students to build credit, learn financial
                  literacy, and manage their finances. Our personalized credit management plans promote healthy spending
                  habits, and builds community around financial stability.
                </p>

                <div className="rounded-lg bg-gray-50 p-6">
                  <h4 className="mb-3 text-lg font-medium">Our Impact</h4>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-green-600">50K+</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-green-600">200+</div>
                      <div className="text-sm text-gray-600">Universities</div>
                    </div>
                    <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-green-600">85%</div>
                      <div className="text-sm text-gray-600">Credit Improvement</div>
                    </div>
                    <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-green-600">$2M+</div>
                      <div className="text-sm text-gray-600">Student Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="What we bring">
              <div className="space-y-6">
                <p className="text-gray-700">
                  SmartFin plans to improve socialization by teaching students the fundamentals of financial literacy in
                  a collaborative space. We offer a solution that builds empowers students' financial literacy through
                  gamification, personalized credit management plans and the fun from successful in-app usage.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-green-50 p-4">
                    <h4 className="mb-2 font-medium text-green-800">For Students</h4>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li>• Build credit history safely</li>
                      <li>• Learn financial management</li>
                      <li>• Connect with financial advisors</li>
                      <li>• Earn rewards for good habits</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-gray-100 p-4">
                    <h4 className="mb-2 font-medium text-gray-800">For Universities</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Improve student financial wellness</li>
                      <li>• Reduce financial dropout rates</li>
                      <li>• Provide valuable financial resources</li>
                      <li>• Support student success initiatives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SectionCard>

            <div className="mt-8">
              <Link
                href="/signin"
                className="inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-green-700"
              >
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <TeamMember name="Alex Johnson" role="Founder & CEO" image="/placeholder.svg?height=300&width=300" />
            <TeamMember
              name="Taylor Smith"
              role="Chief Technology Officer"
              image="/placeholder.svg?height=300&width=300"
            />
            <TeamMember
              name="Jordan Lee"
              role="Head of Student Relations"
              image="/placeholder.svg?height=300&width=300"
            />
            <TeamMember
              name="Casey Morgan"
              role="Financial Education Director"
              image="/placeholder.svg?height=300&width=300"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  )
}
