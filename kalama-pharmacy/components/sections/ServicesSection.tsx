import Link from "next/link";

const services = [
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Easy Prescription Filling",
    description:
      "Get your prescriptions filled quickly and accurately. New patients welcome — we make the process smooth.",
    href: "/services#pharmacy",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Medication Savings",
    description:
      "We identify cost-saving opportunities including savings cards, generics, and manufacturer discount programs.",
    href: "/services#savings",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Personalized Pharmacy Support",
    description:
      "Our pharmacists take the time to answer your questions and provide tailored guidance on your medications.",
    href: "/services#mtm",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Diabetes Care",
    description:
      "Specialized care for patients managing diabetes, including medications, supplies, and education programs.",
    href: "/services#diabetes",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Medication Synchronization",
    description:
      "Never miss a refill. We synchronize all your medications to one convenient monthly pickup — on your schedule.",
    href: "/services#med-sync",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Medicare Plan Support",
    description:
      "We simplify Medicare Open Enrollment so you can find the right coverage for your health and your budget.",
    href: "/services#medicare",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-pad bg-kp-cream">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Our Services</h2>
          <p className="text-kp-gold font-semibold mt-2 text-lg font-serif italic">
            Your One Stop Pharmacy
          </p>
          <div className="w-12 h-1 bg-kp-gold rounded-full mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-kp-green-pale flex items-center justify-center flex-shrink-0 group-hover:bg-kp-green transition-colors duration-300">
                <div className="w-6 h-6 text-kp-green group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <div>
                <h3 className="font-bold font-serif text-kp-text mb-1.5 group-hover:text-kp-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-kp-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-green">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
