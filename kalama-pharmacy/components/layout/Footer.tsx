import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home",             href: "/"          },
  { label: "About Us",         href: "/about"     },
  { label: "Services",         href: "/services"  },
  { label: "Wellness Classes", href: "/wellness"  },
  { label: "Resources",        href: "/resources" },
  { label: "Reviews",          href: "/reviews"   },
  { label: "Contact",          href: "/contact"   },
];

const serviceLinks = [
  { label: "Pharmacy",                      href: "/services#pharmacy" },
  { label: "Diabetes Specialized Care",     href: "/services#diabetes" },
  { label: "Medication Synchronization",    href: "/services#med-sync" },
  { label: "Medication Therapy Management", href: "/services#mtm"      },
  { label: "Medicare Open Enrollment",      href: "/services#medicare" },
  { label: "Over-the-Counter Products",     href: "/services#otc"      },
  { label: "Long Term Care",                href: "/services#ltc"      },
  { label: "Prescription Savings",          href: "/services#savings"  },
];

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 text-kp-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function FaxIcon() {
  return (
    <svg className="w-4 h-4 text-kp-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-4 h-4 text-kp-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-4 h-4 text-kp-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4 text-kp-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-kp-green-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/images/kalama-logo.jpeg"
                alt="Kalama Pharmacy"
                width={180}
                height={58}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/65 leading-relaxed mb-6">
              Your trusted community pharmacy serving Kalama and the surrounding
              region with personal care and professional expertise.
            </p>
            <div className="flex gap-2.5">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-xs tracking-widest uppercase">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-kp-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-xs tracking-widest uppercase">Our Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/65 hover:text-kp-gold transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-xs tracking-widest uppercase">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <PhoneIcon />
                <div>
                  <p className="text-xs text-white/50 mb-0.5">Phone</p>
                  <a href="tel:#" className="text-sm text-white hover:text-kp-gold transition-colors">
                    [INSERT PHONE]
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <FaxIcon />
                <div>
                  <p className="text-xs text-white/50 mb-0.5">Fax</p>
                  <p className="text-sm text-white">[INSERT FAX]</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MailIcon />
                <div>
                  <p className="text-xs text-white/50 mb-0.5">Email</p>
                  <a href="mailto:#" className="text-sm text-white hover:text-kp-gold transition-colors">
                    [INSERT EMAIL]
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPinIcon />
                <div>
                  <p className="text-xs text-white/50 mb-0.5">Address</p>
                  <p className="text-sm text-white">[INSERT ADDRESS]</p>
                </div>
              </li>
              <li className="flex gap-3">
                <ClockIcon />
                <div>
                  <p className="text-xs text-white/50 mb-0.5">Hours</p>
                  <p className="text-sm text-white">Mon–Fri: [INSERT HOURS]</p>
                  <p className="text-sm text-white">Sat: [INSERT HOURS]</p>
                  <p className="text-sm text-white">Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; 2025 Kalama Pharmacy. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
