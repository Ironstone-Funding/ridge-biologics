import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { COMPANY_META } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_META.name} | ${COMPANY_META.tagline}`,
    template: `%s | ${COMPANY_META.name}`,
  },
  description:
    "Ridge Biologics engineers next-generation antibodies, cell therapies, and mRNA medicines to defeat diseases that devastate lives. Seven clinical programs. Three Phase 3 trials.",
  keywords: [
    "biopharmaceutical",
    "biologics",
    "oncology",
    "immunology",
    "rare disease",
    "CAR-T",
    "mRNA",
    "antibody",
    "clinical trials",
  ],
  authors: [{ name: "Ridge Biologics, Inc." }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ridgebiologics.com",
    siteName: COMPANY_META.name,
    title: `${COMPANY_META.name} | ${COMPANY_META.tagline}`,
    description:
      "Advancing transformative biologics for patients with serious diseases worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_META.name} | ${COMPANY_META.tagline}`,
    description: "Advancing transformative biologics for patients with serious diseases.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A1628",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
