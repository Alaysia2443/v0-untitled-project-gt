import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">SmartFin</h3>
            <p className="text-sm text-gray-600">Financial tools for university students.</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-gray-900">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase">Contact</h4>
            <p className="text-sm text-gray-600">support@smartfin.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} SmartFin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
