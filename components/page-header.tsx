interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center opacity-10"></div>
      <div className="bg-[#362a2a] py-16 md:py-24">
        <div className="container relative mx-auto px-4 md:px-6">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-3xl text-lg text-gray-300">{subtitle}</p>}
        </div>
      </div>
      <div className="flex h-2 md:h-3">
        <div className="h-full w-1/2 bg-[#7d8e75]"></div>
        <div className="h-full w-1/2 bg-[#9c9494]"></div>
      </div>
    </div>
  )
}
