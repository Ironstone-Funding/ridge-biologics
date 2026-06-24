"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_SERVICES = [
  { label: "Pharmacy",                        href: "/services#pharmacy"  },
  { label: "Diabetes Specialized Care",       href: "/services#diabetes"  },
  { label: "Medication Synchronization",      href: "/services#med-sync"  },
  { label: "Medication Therapy Management",   href: "/services#mtm"       },
  { label: "Medicare Open Enrollment",        href: "/services#medicare"  },
  { label: "Over-the-Counter Products",       href: "/services#otc"       },
  { label: "Long Term Care",                  href: "/services#ltc"       },
  { label: "Prescription Savings",            href: "/services#savings"   },
];

const NAV_WELLNESS = [
  { label: "Diabetes",          href: "/wellness#diabetes"       },
  { label: "Quit Smoking",      href: "/wellness#quit-smoking"   },
  { label: "Weight Loss",       href: "/wellness#weight-loss"    },
  { label: "High Blood Pressure", href: "/wellness#blood-pressure" },
  { label: "High Cholesterol",  href: "/wellness#cholesterol"    },
  { label: "Asthma",            href: "/wellness#asthma"         },
];

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-nav" : "border-b border-kp-border-light"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Kalama Pharmacy home">
            <Image
              src="/images/kalama-logo.jpeg"
              alt="Kalama Pharmacy"
              width={220}
              height={70}
              className="h-[54px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            <Link href="/" className="nav-link">Home</Link>
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
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-kp-border-light py-1.5 animate-slide-down">
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
                <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-kp-border-light py-1.5 animate-slide-down">
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

          {/* Hamburger button */}
          <button
            className="lg:hidden p-2 -mr-1 rounded-lg text-kp-text hover:bg-kp-green-pale transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className="block w-5 h-0.5 bg-current transition-all duration-300 mb-1.5"
              style={mobileOpen ? { transform: "rotate(45deg) translate(3px, 5px)" } : {}}
            />
            <span
              className="block w-5 h-0.5 bg-current transition-all duration-300 mb-1.5"
              style={mobileOpen ? { opacity: 0 } : {}}
            />
            <span
              className="block w-5 h-0.5 bg-current transition-all duration-300"
              style={mobileOpen ? { transform: "rotate(-45deg) translate(3px, -5px)" } : {}}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-kp-border-light bg-white">
          <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            <Link href="/"         className="mobile-nav-link" onClick={closeMobile}>Home</Link>
            <Link href="/about"    className="mobile-nav-link" onClick={closeMobile}>About Us</Link>

            {/* Mobile Services accordion */}
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

            {/* Mobile Wellness accordion */}
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
              <Link href="/refill"   className="btn-primary w-full justify-center text-sm" onClick={closeMobile}>Refill Prescription</Link>
              <Link href="/transfer" className="btn-outline-green w-full justify-center text-sm" onClick={closeMobile}>Transfer Prescription</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
