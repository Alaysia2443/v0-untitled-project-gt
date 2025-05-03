import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t bg-[#362a2a] text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-serif italic">SmartFin</h3>
            <p className="text-sm text-gray-300">
              Financially empowering every student in America through education, tools, and community.
            </p>
          </div>
          <nav>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features" className="text-gray-300 transition-colors hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 transition-colors hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/signin" className="text-gray-300 transition-colors hover:text-white">
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">Download App</h4>
            <div className="flex space-x-4">
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
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} SmartFin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
