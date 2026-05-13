import Link from "next/link";
import Image from "next/image";
import { COMPANY, EXTERNAL_RESOURCES, COMPLIANCE_DISCLAIMER } from "@/lib/constants";

const COMPANY_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact",  href: "/contact" },
  { label: "FAQ",      href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="bg-rb-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

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
              className="text-sm text-rb-teal-light hover:text-white transition-colors">
              {COMPANY.email}
            </a>
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} {COMPANY.name}
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
