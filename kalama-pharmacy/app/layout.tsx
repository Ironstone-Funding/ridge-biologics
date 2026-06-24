import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kalama Pharmacy | Your Local Community Pharmacy",
    template: "%s | Kalama Pharmacy",
  },
  description:
    "Kalama Pharmacy is a locally focused community pharmacy dedicated to personal service, affordable care, and dependable support for patients and families in Kalama and the surrounding community.",
  keywords: [
    "Kalama Pharmacy",
    "community pharmacy",
    "local pharmacy",
    "prescription refill",
    "diabetes care",
    "medication therapy management",
    "Medicare enrollment",
    "medication synchronization",
    "prescription savings",
  ],
  authors: [{ name: "Kalama Pharmacy" }],
  openGraph: {
    type: "website",
    siteName: "Kalama Pharmacy",
    title: "Kalama Pharmacy | Your Local Community Pharmacy",
    description:
      "Personal service, affordable care, and dependable support for patients and families in Kalama.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2B5F38",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-kp-text">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
