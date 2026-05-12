import Link from "next/link";
import { COMPANY_META, NAV_ITEMS } from "@/lib/constants";

const FOOTER_LINKS = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Careers", href: "/about#careers" },
    { label: "News & Media", href: "/news" },
  ],
  Science: [
    { label: "Technology Platforms", href: "/science#platforms" },
    { label: "Research Areas", href: "/science#research" },
    { label: "Publications", href: "/science#publications" },
  ],
  Pipeline: [
    { label: "Clinical Programs", href: "/pipeline#clinical" },
    { label: "Preclinical Programs", href: "/pipeline#preclinical" },
  ],
  Investors: [
    { label: "IR Overview", href: "/investors" },
    { label: "SEC Filings", href: "/investors#filings" },
    { label: "Events & Presentations", href: "/investors#events" },
    { label: "Stock Information", href: "/investors#stock" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ridge-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-gradient flex items-center justify-center">
                <span className="text-white font-black text-sm">R</span>
              </div>
              <span className="text-white font-semibold text-lg">{COMPANY_META.name}</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              {COMPANY_META.tagline} Advancing transformative biologics for patients with serious diseases worldwide.
            </p>
            <div className="space-y-1 text-xs text-white/40">
              <p>{COMPANY_META.address.replace("\n", ", ")}</p>
              <p>{COMPANY_META.email}</p>
              <p>{COMPANY_META.phone}</p>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
              <span className="text-xs text-white/60 font-mono">
                {COMPANY_META.ticker}
              </span>
              <span className="text-xs text-white/30">·</span>
              <span className="text-xs text-white/40">{COMPANY_META.exchange}</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {COMPANY_META.name}, Inc. All rights reserved. For illustrative purposes only.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
