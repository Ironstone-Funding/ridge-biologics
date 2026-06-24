import ServiceCard from "@/components/ui/ServiceCard";

const features = [
  {
    title: "Diabetes Specialized Care",
    description:
      "Expert guidance, education, and medication support tailored for patients managing diabetes.",
    href: "/services#diabetes",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Long Term Care",
    description:
      "Comprehensive medication management and pharmacy services for long-term care facilities and patients.",
    href: "/services#ltc",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Medication Savings",
    description:
      "We work to find the most affordable options for your prescriptions, including savings programs and generics.",
    href: "/services#savings",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accent: "gold" as const,
  },
  {
    title: "Medication Synchronization",
    description:
      "Sync all your medications to one convenient monthly pickup date — fewer trips, fewer missed doses.",
    href: "/services#med-sync",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Medication Therapy Management",
    description:
      "One-on-one medication reviews with our clinical pharmacists to optimize your therapy and improve outcomes.",
    href: "/services#mtm",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: "Medicare Open Enrollment",
    description:
      "Our team helps you compare and select the Medicare plan that best fits your needs and budget.",
    href: "/services#medicare",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    accent: "gold" as const,
  },
];

export default function FeatureCards() {
  return (
    <section className="section-pad bg-section-cream">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title mx-auto">
            Pharmacy Care That&rsquo;s Built Around You
          </h2>
          <div className="w-12 h-1 bg-kp-gold rounded-full mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <ServiceCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              href={feature.href}
              accent={feature.accent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
