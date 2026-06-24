import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Kalama Pharmacy offers a full range of pharmacy services including diabetes care, medication synchronization, MTM, Medicare enrollment, and more.",
};

const services = [
  {
    id: "pharmacy",
    title: "Pharmacy",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    summary: "Full-service prescription dispensing with accuracy, speed, and personal attention.",
    details: [
      "New prescription filling for all major insurance plans",
      "Generic drug counseling and substitution",
      "Over-the-counter product recommendations",
      "Prescription transfer assistance",
      "Compounding services referrals",
    ],
  },
  {
    id: "diabetes",
    title: "Diabetes Specialized Care",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    summary: "Expert support and education for patients managing Type 1 and Type 2 diabetes.",
    details: [
      "Diabetes medication management and counseling",
      "Blood glucose monitoring supplies",
      "Insulin and injectable medication training",
      "Diabetes education classes (see Wellness)",
      "Coordination with your diabetes care team",
    ],
  },
  {
    id: "med-sync",
    title: "Medication Synchronization",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    summary: "Sync all your monthly medications to one pickup day for maximum convenience.",
    details: [
      "All medications aligned to a single fill date",
      "Monthly reminder calls and notifications",
      "Reduces missed doses and multiple pharmacy trips",
      "Easy enrollment — we handle the coordination",
      "Available for most chronic medications",
    ],
  },
  {
    id: "mtm",
    title: "Medication Therapy Management",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    summary: "One-on-one medication reviews with our clinical pharmacists to optimize your health outcomes.",
    details: [
      "Comprehensive medication review sessions",
      "Identification of drug interactions and duplications",
      "Personalized medication action plan",
      "Coordination with your prescribers",
      "Covered by most Medicare Part D plans",
    ],
  },
  {
    id: "medicare",
    title: "Medicare Open Enrollment",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    summary: "Expert guidance to help you choose the Medicare Part D plan that fits your needs and budget.",
    details: [
      "Plan comparison assistance during open enrollment",
      "Review of your current medications for plan fit",
      "Help understanding premiums, deductibles, and formularies",
      "New to Medicare guidance",
      "Annual plan review and update support",
    ],
  },
  {
    id: "otc",
    title: "Over-the-Counter Products",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    summary: "A curated selection of health, wellness, and personal care products chosen by our pharmacists.",
    details: [
      "Vitamins and dietary supplements",
      "Cold, allergy, and pain relief products",
      "Diabetic and wound care supplies",
      "Blood pressure and glucose monitors",
      "Pharmacist-recommended wellness products",
    ],
  },
  {
    id: "ltc",
    title: "Long Term Care",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    summary: "Comprehensive pharmacy services for long-term care facilities and homebound patients.",
    details: [
      "Medication packaging and delivery for facilities",
      "Regular pharmacist reviews and consultation",
      "Coordination with nursing and medical staff",
      "Emergency medication access protocols",
      "Documentation and compliance support",
    ],
  },
  {
    id: "savings",
    title: "Prescription Savings",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    summary: "We actively find ways to lower the cost of your prescriptions through programs and savings options.",
    details: [
      "Manufacturer patient assistance programs",
      "Savings card enrollment and management",
      "Generic equivalents counseling",
      "Insurance coverage review and optimization",
      "340B program access where applicable",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-hero-green py-20 md:py-28">
        <div className="container-xl text-center">
          <p className="section-label mb-3">What We Offer</p>
          <h1 className="text-display-lg font-bold font-serif text-white mb-5">Our Services</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Your one stop pharmacy for prescriptions, wellness support, savings assistance,
            and specialized clinical care — all under one roof.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="flex flex-col gap-10">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Info */}
                <div className="card-base p-8">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-kp-green-pale flex items-center justify-center flex-shrink-0">
                      <div className="text-kp-green">{service.icon}</div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold font-serif text-kp-text">{service.title}</h2>
                      <p className="text-kp-text-muted mt-1">{service.summary}</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <svg className="w-5 h-5 text-kp-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-kp-text-muted">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA side */}
                <div className="bg-kp-green-pale rounded-2xl p-8 flex flex-col gap-4 justify-center">
                  <h3 className="font-bold font-serif text-kp-text text-xl">
                    Questions about {service.title}?
                  </h3>
                  <p className="text-sm text-kp-text-muted">
                    Our pharmacists are happy to answer any questions and walk you
                    through how this service can benefit you.
                  </p>
                  <Link href="/contact" className="btn-green self-start">
                    Ask a Pharmacist
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
