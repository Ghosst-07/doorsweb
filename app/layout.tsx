import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bihari Steel Solutions - Laser Cutting, CNC Precision & Endless Solutions",
  description:
    "Bihari Steel Solutions Private Limited is a premier provider of laser cutting, CNC precision engineering, fire doors, cable trays, automotive body parts, and custom steel fabrication services in India.",
  keywords: [
    "Bihari Steel Solutions",
    "laser cutting Bihar",
    "CNC precision Madhubani",
    "steel fire doors Bihar",
    "cable trays Gopalganj",
    "automotive body parts Bihar",
    "steel fabrication solutions India",
    "custom steel engineering",
    "industrial steel fabrication",
    "fire rated doors",
    "passive fire protection",
    "custom metal doors",
  ],
  authors: [{ name: "Bihari Steel Solutions Private Limited" }],
  creator: "Bihari Steel Solutions Private Limited",
  publisher: "Bihari Steel Solutions Private Limited",
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
    url: "https://biharisteelsolutions.com",
    title: "Bihari Steel Solutions - Laser Cutting, CNC Precision & Endless Solutions",
    description:
      "Premier provider of laser cutting, CNC precision engineering, fire doors, cable trays, body parts, and custom steel fabrication services in India.",
    siteName: "Bihari Steel Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bihari Steel Solutions - Laser Cutting, CNC Precision & Endless Solutions",
    description:
      "Premier provider of laser cutting, CNC precision, and custom steel solutions including fire doors, cable trays, and body parts.",
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
        <WhatsAppFAB />
      </body>
    </html>
  );
}
