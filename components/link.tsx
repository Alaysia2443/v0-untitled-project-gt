import NextLink from "next/link"
import type { ReactNode } from "react"

interface LinkProps {
  href: string
  children: ReactNode
  className?: string
}

export default function Link({ href, children, className = "" }: LinkProps) {
  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  )
}
