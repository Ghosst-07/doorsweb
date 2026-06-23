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
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>
                  <strong>Corporate Office:</strong>
                  <br />
                  Ward-27, Haziapur, Gopalganj,
                  <br />
                  Bihar - 841428
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>
                  <strong>Registered Address:</strong>
                  <br />
                  Kapleshwar Sthan Kharoua, P.S Rahika,
                  <br />
                  Madhubani, Bihar - 847238
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div>
                  <a href="tel:+919015568648" className="hover:text-white transition block">+91 90155 68648</a>
                  <a href="tel:+919467188176" className="hover:text-white transition block">+91 94671 88176</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
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
            {[
              "ISO 9001:2015",
              "UL Listed",
              "NFPA Certified",
              "FM Approved",
              "CE Marked",
              "LEED Certified",
            ].map((cert, index) => (
              <span key={index} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {cert}
              </span>
            ))}
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
