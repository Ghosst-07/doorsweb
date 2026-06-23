"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-red-950 text-white py-2">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a
                href="tel:+919015568648"
                className="hover:text-red-200 transition flex items-center gap-1.5"
              >
                <svg className="w-4 h-4 text-red-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="hidden sm:inline">+91 90155 68648 / +91 94671 88176</span>
              </a>
              <a
                href="mailto:biharisteelsolutionspvtltd@gmail.com"
                className="hover:text-red-200 transition flex items-center gap-1.5"
              >
                <svg className="w-4 h-4 text-red-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="hidden md:inline">
                  biharisteelsolutionspvtltd@gmail.com
                </span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-red-200 flex items-center gap-1.5">
                <svg className="w-4 h-4 text-red-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Mon-Sat: 9AM-7PM
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
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-900 to-red-700 bg-clip-text text-transparent">
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
                className="text-gray-700 hover:text-red-600 transition font-semibold"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-red-600 transition font-semibold"
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-red-600 transition font-semibold"
              >
                Products & Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-red-600 transition font-semibold"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-900 to-red-600 text-white px-6 py-2 rounded-full font-bold hover:from-blue-800 hover:to-red-500 transition shadow-lg"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-red-600"
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
                  className="text-gray-700 hover:text-red-600 transition font-semibold py-2"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-red-600 transition font-semibold py-2"
                >
                  About Us
                </Link>
                <Link
                  href="/products"
                  className="text-gray-700 hover:text-red-600 transition font-semibold py-2"
                >
                  Products & Services
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-red-600 transition font-semibold py-2"
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-red-700 transition"
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
