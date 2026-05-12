import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";

const FOOTER_COL = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Biologics Distribution",    href: "/solutions#distribution" },
      { label: "Compliance Infrastructure", href: "/solutions#compliance" },
      { label: "Provider Onboarding",       href: "/provider-onboarding" },
      { label: "Field Representative Support", href: "/solutions#rep-support" },
    ],
  },
  {
    title: "Education",
    links: [
      { label: "Training Programs", href: "/training" },
      { label: "Compliance Overview", href: "/compliance" },
      { label: "Documentation Support", href: "/compliance#documentation" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-rb-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/logo.png"
                alt="Ridge Biologics"
                width={160}
                height={50}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6">
              Premium regenerative biologics distribution and provider support.
              Compliance-conscious infrastructure for modern clinical practices.
            </p>
            <a href={`mailto:${COMPANY.email}`}
              className="text-sm text-rb-teal-light hover:text-white transition-colors">
              {COMPANY.email}
            </a>
          </div>

          {/* Link cols */}
          {FOOTER_COL.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/35 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/20 max-w-md text-center sm:text-right leading-relaxed">
            Ridge Biologics does not make clinical efficacy claims. Information provided is for educational and operational support purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
