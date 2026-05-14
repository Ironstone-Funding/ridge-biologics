import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

export const metadata: Metadata = {
  title: {
    default: "Ridge Biologics | Compliance-First Regenerative Biologics Distribution",
    template: "%s | Ridge Biologics",
  },
  description:
    "Ridge Biologics provides compliance-conscious advanced biologics distribution, provider onboarding, clinical education, and operational infrastructure for licensed healthcare providers.",
  keywords: [
    "regenerative biologics distribution",
    "compliance-conscious biologics",
    "provider biologics support",
    "biologics onboarding",
    "clinical education biologics",
    "chain of custody biologics",
    "regenerative medicine support",
  ],
  authors: [{ name: "Ridge Biologics" }],
  openGraph: {
    type: "website",
    siteName: "Ridge Biologics",
    title: "Ridge Biologics | Compliance-First Regenerative Biologics Distribution",
    description:
      "Premium advanced biologics distribution and provider infrastructure. Compliance-conscious. Documentation-focused. Provider-first.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#284454",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased bg-white text-rb-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
