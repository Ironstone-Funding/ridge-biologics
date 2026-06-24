"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_SERVICES = [
  { label: "Pharmacy",                       href: "/services#pharmacy"  },
  { label: "Diabetes Specialized Care",      href: "/services#diabetes"  },
  { label: "Medication Synchronization",     href: "/services#med-sync"  },
  { label: "Medication Therapy Management",  href: "/services#mtm"       },
  { label: "Medicare Open Enrollment",       href: "/services#medicare"  },
  { label: "Over-the-Counter Products",      href: "/services#otc"       },
  { label: "Long Term Care",                 href: "/services#ltc"       },
  { label: "Prescription Savings",           href: "/services#savings"   },
];

const NAV_WELLNESS = [
  { label: "Diabetes",             href: "/wellness#diabetes"        },
  { label: "Quit Smoking",         href: "/wellness#quit-smoking"    },
  { label: "Weight Loss",          href: "/wellness#weight-loss"     },
  { label: "High Blood Pressure",  href: "/wellness#blood-pressure"  },
  { label: "High Cholesterol",     href: "/wellness#cholesterol"     },
  { label: "Asthma",               href: "/wellness#asthma"          },
];

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen,         setMobileOpen]         = useState(false);
  const [servicesOpen,       setServicesOpen]       = useState(false);
  const [wellnessOpen,       setWellnessOpen]       = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWellnessOpen, setMobileWellnessOpen] = useState(false);
  const [scrolled,           setScrolled]           = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">

      {/* ── Utility bar (desktop only) ── */}
      <div className="hidden md:block bg-kp-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-sm text-white/90">
          <div className="flex items-center gap-5">
            <a href="tel:#" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <PhoneIcon className="w-3.5 h-3.5 flex-shrink-0" />
              [INSERT PHONE]
            </a>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="w-3.5 h-3.5 flex-shrink-0" />
              Mon–Fri [INSERT HOURS] &nbsp;·&nbsp; Sat [INSERT HOURS] &nbsp;·&nbsp; Sun Closed
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <PinIcon className="w-3.5 h-3.5 flex-shrink-0" />
            [INSERT ADDRESS], Kalama, WA
          </span>
        </div>
      </div>

      {/* ── Main header ── */}
      <div
        className={`bg-white border-b border-kp-border-light transition-shadow duration-300 ${
          scrolled ? "shadow-nav" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0" aria-label="Kalama Pharmacy home">
              <Image
                src="/images/kalama-logo.jpeg"
                alt="Kalama Pharmacy"
                width={200}
                height={64}
                className="h-[50px] w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              <Link href="/"      className="nav-link">Home</Link>
              <Link href="/about" className="nav-link">About Us</Link>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="nav-link flex items-center gap-1"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1.5 w-64 bg-white rounded-xl shadow-card-hover border border-kp-border-light py-1.5 animate-slide-down">
                    {NAV_SERVICES.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center px-4 py-2.5 text-sm text-kp-text-muted hover:text-kp-green hover:bg-kp-green-pale transition-colors duration-150"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Wellness Classes dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setWellnessOpen(true)}
                onMouseLeave={() => setWellnessOpen(false)}
              >
                <button
                  className="nav-link flex items-center gap-1"
                  aria-haspopup="true"
                  aria-expanded={wellnessOpen}
                >
                  Wellness Classes
                  <ChevronIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${wellnessOpen ? "rotate-180" : ""}`} />
                </button>
                {wellnessOpen && (
                  <div className="absolute top-full left-0 mt-1.5 w-52 bg-white rounded-xl shadow-card-hover border border-kp-border-light py-1.5 animate-slide-down">
                    {NAV_WELLNESS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center px-4 py-2.5 text-sm text-kp-text-muted hover:text-kp-green hover:bg-kp-green-pale transition-colors duration-150"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/resources" className="nav-link">Resources</Link>
              <Link href="/reviews"   className="nav-link">Reviews</Link>
              <Link href="/contact"   className="nav-link">Contact</Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link href="/refill" className="btn-primary text-sm py-2.5 px-5">
                Refill Prescription
              </Link>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href="tel:#"
                className="p-2 rounded-lg text-kp-green hover:bg-kp-green-pale transition-colors"
                aria-label="Call pharmacy"
              >
                <PhoneIcon className="w-5 h-5" />
              </a>
              <button
                className="p-2 -mr-1 rounded-lg text-kp-text hover:bg-kp-green-pale transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                <span className="block w-5 h-0.5 bg-current transition-all duration-300 mb-1.5"
                  style={mobileOpen ? { transform: "rotate(45deg) translate(3px, 5px)" } : {}} />
                <span className="block w-5 h-0.5 bg-current transition-all duration-300 mb-1.5"
                  style={mobileOpen ? { opacity: 0 } : {}} />
                <span className="block w-5 h-0.5 bg-current transition-all duration-300"
                  style={mobileOpen ? { transform: "rotate(-45deg) translate(3px, -5px)" } : {}} />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-kp-border-light bg-white shadow-nav">
          <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            <Link href="/"      className="mobile-nav-link" onClick={closeMobile}>Home</Link>
            <Link href="/about" className="mobile-nav-link" onClick={closeMobile}>About Us</Link>

            <div>
              <button
                className="mobile-nav-link w-full flex items-center justify-between"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
              >
                Services
                <ChevronIcon className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 mt-1 flex flex-col gap-0.5">
                  {NAV_SERVICES.map((item) => (
                    <Link key={item.href} href={item.href} className="mobile-sub-link" onClick={closeMobile}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                className="mobile-nav-link w-full flex items-center justify-between"
                onClick={() => setMobileWellnessOpen(!mobileWellnessOpen)}
                aria-expanded={mobileWellnessOpen}
              >
                Wellness Classes
                <ChevronIcon className={`w-4 h-4 transition-transform ${mobileWellnessOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileWellnessOpen && (
                <div className="pl-4 mt-1 flex flex-col gap-0.5">
                  {NAV_WELLNESS.map((item) => (
                    <Link key={item.href} href={item.href} className="mobile-sub-link" onClick={closeMobile}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/resources" className="mobile-nav-link" onClick={closeMobile}>Resources</Link>
            <Link href="/reviews"   className="mobile-nav-link" onClick={closeMobile}>Reviews</Link>
            <Link href="/contact"   className="mobile-nav-link" onClick={closeMobile}>Contact</Link>

            <div className="mt-3 pt-3 border-t border-kp-border-light space-y-2">
              <Link href="/refill"   className="btn-primary w-full justify-center" onClick={closeMobile}>
                Refill Prescription
              </Link>
              <Link href="/transfer" className="btn-outline-green w-full justify-center" onClick={closeMobile}>
                Transfer Prescription
              </Link>
              <a href="tel:#" className="btn-blue w-full justify-center" onClick={closeMobile}>
                <PhoneIcon className="w-4 h-4" />
                Call Pharmacy
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
