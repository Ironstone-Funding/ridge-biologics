import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Helpful health resources, links, and tools from Kalama Pharmacy to support your wellbeing.",
};

const resourceCategories = [
  {
    title: "Medication Resources",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    resources: [
      { label: "How to Read a Prescription Label", href: "#" },
      { label: "Understanding Generic vs. Brand Medications", href: "#" },
      { label: "Safe Medication Disposal Guide", href: "#" },
      { label: "Drug Interaction Checker (Coming Soon)", href: "#" },
    ],
  },
  {
    title: "Health & Wellness",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    resources: [
      { label: "Managing Diabetes Day-to-Day", href: "#" },
      { label: "Heart Health Basics", href: "#" },
      { label: "Guide to Quitting Smoking", href: "#" },
      { label: "Understanding Your Blood Pressure Numbers", href: "#" },
    ],
  },
  {
    title: "Insurance & Savings",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    resources: [
      { label: "Medicare Open Enrollment Overview", href: "#" },
      { label: "Finding Prescription Assistance Programs", href: "#" },
      { label: "How Medicare Part D Works", href: "#" },
      { label: "Applying for Manufacturer Savings Cards", href: "#" },
    ],
  },
  {
    title: "Patient Forms",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    resources: [
      { label: "New Patient Registration Form", href: "#" },
      { label: "HIPAA Privacy Notice", href: "#" },
      { label: "Medication Authorization Form", href: "#" },
      { label: "Prior Authorization Support", href: "#" },
    ],
  },
];

const externalLinks = [
  { label: "Centers for Disease Control (CDC)", href: "https://www.cdc.gov", desc: "Public health information and guidelines" },
  { label: "Medicare.gov", href: "https://www.medicare.gov", desc: "Official Medicare information and plan comparison" },
  { label: "Medicaid.gov", href: "https://www.medicaid.gov", desc: "Medicaid eligibility and benefits" },
  { label: "American Diabetes Association", href: "https://www.diabetes.org", desc: "Diabetes education, research, and advocacy" },
  { label: "American Heart Association", href: "https://www.heart.org", desc: "Heart health resources and guidelines" },
  { label: "NeedyMeds.org", href: "https://www.needymeds.org", desc: "Prescription savings and patient assistance programs" },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-hero-green py-20 md:py-28">
        <div className="container-xl text-center">
          <p className="section-label mb-3">Helpful Information</p>
          <h1 className="text-display-lg font-bold font-serif text-white mb-5">Patient Resources</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Tools, guides, and trusted links to help you take control of your health and
            get the most out of your pharmacy care.
          </p>
        </div>
      </section>

      {/* Resource categories */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="section-label">Our Resources</p>
            <h2 className="section-title">Guides & Information</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resourceCategories.map((cat) => (
              <div key={cat.title} className="card-base p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-kp-green-pale flex items-center justify-center">
                    <div className="text-kp-green">{cat.icon}</div>
                  </div>
                  <h3 className="font-bold font-serif text-kp-text text-lg">{cat.title}</h3>
                </div>
                <ul className="space-y-3">
                  {cat.resources.map((r) => (
                    <li key={r.label}>
                      <a
                        href={r.href}
                        className="flex items-center gap-2 text-sm text-kp-text-muted hover:text-kp-green transition-colors group"
                      >
                        <svg className="w-4 h-4 text-kp-gold group-hover:text-kp-green transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External links */}
      <section className="section-pad bg-kp-cream">
        <div className="container-xl">
          <div className="text-center mb-10">
            <p className="section-label">Trusted Sources</p>
            <h2 className="section-title">External Health Resources</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-base p-5 flex items-start gap-4 group hover:-translate-y-0.5 transition-transform"
              >
                <div className="w-9 h-9 rounded-lg bg-kp-green-pale flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-kp-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-kp-text text-sm group-hover:text-kp-green transition-colors">{link.label}</p>
                  <p className="text-xs text-kp-text-muted mt-0.5">{link.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ask a pharmacist CTA */}
      <section className="bg-kp-green py-14">
        <div className="container-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-white mb-4">
            Can&apos;t find what you need?
          </h2>
          <p className="text-white/75 mb-8">
            Our pharmacists are always happy to help. Stop in, call us, or send a message.
          </p>
          <Link href="/contact" className="btn-primary">Ask a Pharmacist</Link>
        </div>
      </section>
    </>
  );
}
