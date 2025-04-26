import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import SectionCard from "@/components/section-card"
import DemoBox from "@/components/demo-box"
import { ArrowRight, Download, Star, Users, BookOpen, Headphones } from "lucide-react"

export default function FeaturesPage() {
  return (
    <main>
      <PageHeader
        title="Features"
        subtitle="Discover how SmartFin helps students build credit and financial literacy"
      />

      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            This is <span className="font-serif italic text-green-600">SmartFin.</span>
          </h2>
          <p className="text-lg text-gray-600">
            SmartFin helps you build credit while you make purchases on the app to let you use the payment methods such
            as credit cards. Our platform is designed specifically for university students to build financial literacy
            and credit history.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <SectionCard title="Rewards">
            <div className="space-y-4">
              <div className="flex items-start">
                <Star className="mr-3 h-6 w-6 text-green-600" />
                <div>
                  <h3 className="text-lg font-medium">Earn Points</h3>
                  <p className="text-gray-600">
                    SmartFin offers rewards for each purchase you make on the app to let you use the payment methods
                    such as credit cards.
                  </p>
                </div>
              </div>
              <DemoBox className="aspect-video w-full" />
              <div className="rounded-lg bg-green-50 p-4">
                <p className="text-sm text-green-800">
                  <strong>Pro tip:</strong> Connect your student ID to earn 2x points on campus purchases!
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Reviews">
            <div className="space-y-4">
              <div className="flex items-start">
                <BookOpen className="mr-3 h-6 w-6 text-green-600" />
                <div>
                  <h3 className="text-lg font-medium">Financial Insights</h3>
                  <p className="text-gray-600">
                    Every month, the app generates reviews for your daily purchases financial payment patterns in
                    graphical and tabular manners.
                  </p>
                </div>
              </div>
              <DemoBox className="aspect-video w-full" />
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium">Monthly</div>
                <div className="rounded-md bg-green-600 p-2 text-center text-xs font-medium text-white">Quarterly</div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium">Yearly</div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Supporters">
            <div className="space-y-4">
              <div className="flex items-start">
                <Headphones className="mr-3 h-6 w-6 text-green-600" />
                <div>
                  <h3 className="text-lg font-medium">Direct Support</h3>
                  <p className="text-gray-600">
                    Students have direct access to contact their school's financial departments and their financial aid
                    advisors through the app.
                  </p>
                </div>
              </div>
              <DemoBox className="aspect-video w-full" />
              <button className="w-full rounded-lg border border-green-600 py-2 text-sm font-medium text-green-600 transition-colors hover:bg-green-50">
                Schedule Appointment
              </button>
            </div>
          </SectionCard>

          <SectionCard title="Campus Connect">
            <div className="space-y-4">
              <div className="flex items-start">
                <Users className="mr-3 h-6 w-6 text-green-600" />
                <div>
                  <h3 className="text-lg font-medium">Learn Together</h3>
                  <p className="text-gray-600">
                    A gamified learning experience where students are grouped together to build their financial
                    literacy. Points earned in the app can be spent on earning prizes.
                  </p>
                </div>
              </div>
              <DemoBox className="aspect-video w-full" />
              <div className="flex items-center justify-between rounded-lg bg-gray-100 p-3">
                <span className="text-sm font-medium">Your team: Finance Wizards</span>
                <span className="rounded-full bg-green-600 px-2 py-1 text-xs font-medium text-white">1,240 pts</span>
              </div>
            </div>
          </SectionCard>
        </div>

        <div className="mt-16 rounded-2xl bg-[#362a2a] p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">Ready to get started?</h3>
              <p className="mb-6 text-gray-300">
                Download the SmartFin app today and start building your financial future. Available on iOS and Android.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/signin"
                  className="inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-green-700"
                >
                  Sign In
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                </button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center rounded-xl bg-white/10 px-6 py-4 backdrop-blur-sm transition-colors hover:bg-white/20">
                  <Image src="/placeholder.svg?height=30&width=30" alt="Google Play" width={30} height={30} />
                  <div className="ml-3 text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-medium">Google Play</div>
                  </div>
                </button>
                <button className="flex items-center justify-center rounded-xl bg-white/10 px-6 py-4 backdrop-blur-sm transition-colors hover:bg-white/20">
                  <Image src="/placeholder.svg?height=30&width=30" alt="App Store" width={30} height={30} />
                  <div className="ml-3 text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-medium">App Store</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
