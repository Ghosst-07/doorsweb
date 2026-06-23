import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white p-1 rounded overflow-hidden h-12 w-12 flex items-center justify-center shadow-md">
                <img src="/bss-logo.jpg" alt="BSS Logo" className="object-contain max-h-full max-w-full" />
              </div>
              <div className="text-xl font-bold">Bihari Steel Solutions</div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed text-sm">
              Bihari Steel Solutions Private Limited is a premier high-tech enterprise specializing in laser cutting, CNC precision engineering, fire doors, cable trays, and automotive body parts.
            </p>
            <div className="text-xs text-red-500 font-mono mb-4">
              CIN: U25111BR2026PTC085757
            </div>
            {/* Social links removed */}
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
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>
                  <strong>Corporate Office:</strong>
                  <br />
                  Ward-27, Haziapur, Gopalganj,
                  <br />
                  Bihar - 841428
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>
                  <strong>Registered Address:</strong>
                  <br />
                  Kapleshwar Sthan Kharoua, P.S Rahika,
                  <br />
                  Madhubani, Bihar - 847238
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <div>
                  <a href="tel:+919015568648" className="hover:text-white transition block">+91 90155 68648</a>
                  <a href="tel:+919467188176" className="hover:text-white transition block">+91 94671 88176</a>
                </div>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <a
                  href="mailto:biharisteelsolutionspvtltd@gmail.com"
                  className="hover:text-white transition break-all"
                >
                  biharisteelsolutionspvtltd@gmail.com
                </a>
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
            <p>© 2026 Bihari Steel Solutions Private Limited. All Rights Reserved.</p>
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
