import Link from "next/link";

const services = [
  {
    title:       "Prescription Pharmacy",
    description: "Fast, accurate prescription filling with a pharmacist always available to answer your questions.",
    href:        "/services#pharmacy",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title:       "Diabetes Specialized Care",
    description: "Expert guidance, education, and medication support for patients managing diabetes.",
    href:        "/services#diabetes",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title:       "Medication Synchronization",
    description: "Sync all your medications to one monthly pickup. Fewer trips, fewer missed doses.",
    href:        "/services#med-sync",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title:       "Medication Therapy Management",
    description: "One-on-one medication reviews with our pharmacists to optimize your treatment plan.",
    href:        "/services#mtm",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title:       "Medicare Open Enrollment",
    description: "We help you compare Medicare plans and find the coverage that fits your needs and budget.",
    href:        "/services#medicare",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title:       "Prescription Savings",
    description: "We find the most affordable options for your medications, including savings programs and generics.",
    href:        "/services#savings",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title:       "Long Term Care",
    description: "Comprehensive medication management and pharmacy services for long-term care patients and families.",
    href:        "/services#ltc",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title:       "Over-the-Counter Products",
    description: "A wide selection of vitamins, supplements, health products, and everyday wellness essentials.",
    href:        "/services#otc",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
];

export default function FeatureCards() {
  return (
    <section className="section-pad bg-white border-t border-kp-border-light">
      <div className="container-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p className="section-label">Our Services</p>
            <h2 className="section-title">What We Do For You</h2>
          </div>
          <Link href="/services" className="btn-outline-green text-sm self-start sm:self-auto flex-shrink-0">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="flex items-start gap-4 p-5 rounded-xl border border-kp-border-light hover:border-kp-green hover:bg-kp-green-ultra transition-all duration-200 group"
            >
              <div className="w-11 h-11 bg-kp-green-pale rounded-lg flex items-center justify-center flex-shrink-0 text-kp-green group-hover:bg-kp-green group-hover:text-white transition-colors">
                <span className="w-5 h-5">{service.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-kp-text group-hover:text-kp-green transition-colors mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-kp-text-muted leading-snug">{service.description}</p>
              </div>
              <svg className="w-4 h-4 text-kp-text-light group-hover:text-kp-green transition-colors mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
