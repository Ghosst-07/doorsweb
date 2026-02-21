import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Fire Doors India - Leading Fire Safety Solutions Since 1995",
  description:
    "India's most trusted fire door manufacturer. Steel fire doors, wooden fire doors, lead-lined doors, clean room doors. BIS certified, ISO 9001:2015. 50,000+ installations across India. 24/7 support.",
  keywords: [
    "fire doors India",
    "fire rated doors",
    "steel fire doors",
    "wooden fire doors",
    "fire safety doors",
    "BIS certified fire doors",
    "NBC compliant doors",
    "fire door manufacturer India",
    "passive fire protection",
    "lead lined doors",
    "clean room doors",
    "acoustic doors",
    "fire doors Maharashtra",
    "fire doors Mumbai",
    "fire doors Bhiwandi",
  ],
  authors: [{ name: "Premium Fire Doors" }],
  creator: "Premium Fire Doors",
  publisher: "Premium Fire Doors",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://premiumfiredoors.in",
    title: "Premium Fire Doors India - Leading Fire Safety Solutions Since 1995",
    description:
      "India's most trusted fire door manufacturer. 50,000+ installations, BIS certified, ISO 9001:2015. Steel, wooden, lead-lined & clean room doors.",
    siteName: "Premium Fire Doors",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Fire Doors India - Fire Safety Solutions",
    description:
      "India's most trusted fire door manufacturer. 50,000+ installations across India. BIS certified, 24/7 support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
