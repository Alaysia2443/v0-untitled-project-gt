import PageHeader from "@/components/page-header"
import SignInForm from "@/components/sign-in-form"

export default function SignInPage() {
  return (
    <main>
      <PageHeader title="Sign In" subtitle="Access your SmartFin account to manage your finances" />

      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-sm md:p-8">
          <SignInForm />
        </div>
      </div>
    </main>
  )
}
