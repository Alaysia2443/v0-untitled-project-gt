import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-[#362a2a] text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-serif italic">SmartFin</h3>
            <p className="text-sm text-gray-300">
              Financially empowering every student in America through education, tools, and community.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-gray-300 transition-colors hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 transition-colors hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/signin" className="text-gray-300 transition-colors hover:text-white">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-gray-300 transition-colors hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 transition-colors hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-300">Download our app:</p>
              <div className="mt-2 flex space-x-2">
                <a
                  href="#"
                  className="rounded-md bg-white/10 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-white/20"
                >
                  App Store
                </a>
                <a
                  href="#"
                  className="rounded-md bg-white/10 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-white/20"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} SmartFin. All rights reserved.</p>
          <p className="mt-2">*Footnotes: Terms and conditions apply. See website for details.</p>
        </div>
      </div>
    </footer>
  )
}
