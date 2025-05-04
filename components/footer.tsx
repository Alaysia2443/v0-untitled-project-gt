import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-header text-white">
      <div className="container py-12">
        <div className="grid grid-4">
          <div>
            <div className="mb-4">
              <span className="text-lg font-medium">SmartFin</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Financially empowering every student in America through accessible tools and education.
            </p>
            <div className="flex gap-2">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook size={16} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter size={16} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram size={16} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin size={16} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-300 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">support@smartfin.com</li>
              <li className="text-gray-300">1-800-SMARTFIN</li>
              <li className="text-gray-300">123 Finance St, College Town, USA</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container py-4">
          <p className="text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} SmartFin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
