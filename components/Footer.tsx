import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-orange-600 p-2 rounded">
                <span className="text-2xl">🚪</span>
              </div>
              <div className="text-xl font-bold">Premium Fire Doors</div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Leading provider of fire-rated doors and passive fire protection
              solutions in India since 1995. Trusted by thousands of customers
              nationwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-orange-600 p-2 rounded hover:bg-orange-700 transition"
              >
                F
              </a>
              <a
                href="#"
                className="bg-orange-600 p-2 rounded hover:bg-orange-700 transition"
              >
                L
              </a>
              <a
                href="#"
                className="bg-orange-600 p-2 rounded hover:bg-orange-700 transition"
              >
                T
              </a>
              <a
                href="#"
                className="bg-orange-600 p-2 rounded hover:bg-orange-700 transition"
              >
                I
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  News & Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Steel Fire Doors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Wooden Fire Doors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Lead Lined Doors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Acoustic Doors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Clean Room Doors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>
                  Plot No. 45, MIDC Industrial Area,
                  <br />
                  Bhiwandi, Maharashtra 421302
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a
                  href="tel:+912240123456"
                  className="hover:text-white transition"
                >
                  +91 22 4012 3456
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <a
                  href="mailto:info@premiumfiredoors.in"
                  className="hover:text-white transition"
                >
                  info@premiumfiredoors.in
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🚨</span>
                <span>
                  24/7 Emergency:
                  <br />
                  +91 98765 43210
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <span>✓ ISO 9001:2015</span>
            <span>✓ UL Listed</span>
            <span>✓ NFPA Certified</span>
            <span>✓ FM Approved</span>
            <span>✓ CE Marked</span>
            <span>✓ LEED Certified</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2026 Premium Fire Doors. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
