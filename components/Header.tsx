"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-red-950 text-white py-2">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a
                href="tel:+919015568648"
                className="hover:text-red-200 transition flex items-center"
              >
                <span className="mr-2">📞</span>
                <span className="hidden sm:inline">+91 90155 68648 / +91 94671 88176</span>
              </a>
              <a
                href="mailto:biharisteelsolutionspvtltd@gmail.com"
                className="hover:text-red-200 transition flex items-center"
              >
                <span className="mr-2">✉️</span>
                <span className="hidden md:inline">
                  biharisteelsolutionspvtltd@gmail.com
                </span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-red-200">
                🕒 Mon-Sat: 9AM-7PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-lg border border-gray-100 flex items-center justify-center bg-white shadow-sm">
                <img
                  src="/bss-logo.jpg"
                  alt="BSS Logo"
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-red-700 bg-clip-text text-transparent">
                  Bihari Steel Solutions
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  Laser Cutting | CNC Precision | Endless Solutions
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-600 transition font-semibold"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-orange-600 transition font-semibold"
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-orange-600 transition font-semibold"
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-orange-600 transition font-semibold"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-orange-600 to-red-700 text-white px-6 py-2 rounded-full font-bold hover:from-orange-700 hover:to-red-800 transition shadow-lg"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-orange-600"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-orange-600 transition font-semibold py-2"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-orange-600 transition font-semibold py-2"
                >
                  About Us
                </Link>
                <Link
                  href="/products"
                  className="text-gray-700 hover:text-orange-600 transition font-semibold py-2"
                >
                  Products
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-orange-600 transition font-semibold py-2"
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-orange-700 transition"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
