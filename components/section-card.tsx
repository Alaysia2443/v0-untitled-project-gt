import type { ReactNode } from "react"

interface SectionCardProps {
  title: string
  children: ReactNode
  className?: string
  titleClassName?: string
}

export default function SectionCard({ title, children, className = "", titleClassName = "" }: SectionCardProps) {
  return (
    <section className={`mb-12 ${className}`}>
      <header className="mb-6">
        <div className="inline-block rounded-r-full bg-gradient-to-r from-green-600 to-green-500 px-6 py-2.5 text-white shadow-md">
          <h2 className={`font-medium ${titleClassName}`}>{title}</h2>
        </div>
      </header>
      <div className="rounded-xl bg-white p-6 shadow-sm">{children}</div>
    </section>
  )
}
