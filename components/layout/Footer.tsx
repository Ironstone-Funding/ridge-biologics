import Link from "next/link";
import Image from "next/image";
import { COMPANY, EXTERNAL_RESOURCES, COMPLIANCE_DISCLAIMER } from "@/lib/constants";

const COMPANY_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact",  href: "/contact" },
  { label: "FAQ",      href: "/faq" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy",      href: "/privacy" },
  { label: "Terms of Service",    href: "/terms" },
  { label: "Cookie Policy",       href: "/cookies" },
  { label: "Accessibility",       href: "/accessibility" },
];

export default function Footer() {
  return (
    <footer className="bg-rb-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-16">

          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <div className="inline-block bg-white rounded-lg px-3 py-1.5">
                <Image
                  src="/images/logo.png"
                  alt="Ridge Biologics"
                  width={160}
                  height={50}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-6">
              Supply you trust, Support you need.
            </p>
            <a href={`mailto:${COMPANY.email}`}
              className="text-sm text-rb-teal-light hover:text-white transition-colors block mb-2">
              {COMPANY.email}
            </a>
            <a href={`tel:+${COMPANY.phoneTel}`}
              className="text-sm text-rb-teal-light hover:text-white transition-colors block mb-3">
              {COMPANY.phone}
            </a>
            <address className="not-italic text-sm text-white/50 leading-relaxed">
              {COMPANY.address}<br />
              {COMPANY.city}
            </address>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/55 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/55 mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External resources */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/55 mb-4">
              External Resources
            </h3>
            <ul className="space-y-2.5">
              {EXTERNAL_RESOURCES.map((r) => (
                <li key={r.href}>
                  <a href={r.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-white/75 hover:text-white transition-colors">
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 space-y-4">
          <p className="text-xs text-white/55 leading-relaxed">
            {COMPLIANCE_DISCLAIMER}
          </p>
          <p className="text-xs text-white/50 leading-relaxed">
            Healthcare providers should report adverse events or product quality concerns to Ridge Biologics at{" "}
            <a href={`mailto:${COMPANY.email}`} className="underline underline-offset-2 hover:text-white/80 transition-colors">{COMPANY.email}</a>{" "}
            and to FDA MedWatch at{" "}
            <a href="tel:+18003321088" className="underline underline-offset-2 hover:text-white/80 transition-colors">1-800-FDA-1088</a>{" "}
            or{" "}
            <a href="https://www.fda.gov/medwatch" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white/80 transition-colors">fda.gov/medwatch</a>.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} {COMPANY.name} · By using this site, you agree to our{" "}
              <Link href="/terms" className="underline underline-offset-2 hover:text-white/80 transition-colors">Terms of Service</Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-white/80 transition-colors">Privacy Policy</Link>.
            </p>
            <p className="text-xs text-white/45">
              Licensed in Utah and Florida
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
