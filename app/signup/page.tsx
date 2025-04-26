import PageHeader from "@/components/page-header"
import SignUpForm from "@/components/sign-up-form"

export default function SignUpPage() {
  return (
    <main>
      <PageHeader title="Sign Up" subtitle="Create your SmartFin account and start building your financial future" />

      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-sm md:p-8">
          <SignUpForm />
        </div>
      </div>
    </main>
  )
}
