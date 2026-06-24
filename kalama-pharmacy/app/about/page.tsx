import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kalama Pharmacy — a locally owned community pharmacy dedicated to personal service and dependable care.",
};

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Patient-First Care",
    description: "Every decision we make is centered on what's best for our patients and their families.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Community Connection",
    description: "We are your neighbors, and we take pride in being a trusted part of the Kalama community.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Clinical Excellence",
    description: "Our licensed pharmacists bring deep expertise and ongoing education to every patient interaction.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Affordable Access",
    description: "We actively help patients find savings programs, generics, and assistance to lower their costs.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-hero-green py-20 md:py-28">
        <div className="container-xl text-center">
          <p className="section-label mb-3">About Kalama Pharmacy</p>
          <h1 className="text-display-lg font-bold font-serif text-white mb-5">
            Your Partners in Health
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            A locally owned pharmacy committed to serving our community with integrity,
            expertise, and genuine personal care.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Built on Community Trust</h2>
            <div className="gold-divider mx-auto" />
            <p className="text-kp-text-muted leading-relaxed mt-4">
              Kalama Pharmacy was founded with a simple but powerful idea: every patient
              deserves to be known by name and cared for as an individual. We believe the
              best pharmacy experience goes beyond filling prescriptions — it's about
              building relationships, understanding your health goals, and being a reliable
              partner every step of the way.
            </p>
            <p className="text-kp-text-muted leading-relaxed mt-4">
              As an independent, locally owned pharmacy, we have the freedom to put our
              patients first — always. We are not constrained by corporate mandates or
              quotas. Our only priority is providing the highest quality care to every
              person who walks through our doors or calls us with a question.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-base p-7 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-kp-green-pale flex items-center justify-center flex-shrink-0">
                  <div className="text-kp-green">{value.icon}</div>
                </div>
                <div>
                  <h3 className="font-bold font-serif text-kp-text text-lg mb-1">{value.title}</h3>
                  <p className="text-sm text-kp-text-muted leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="section-pad bg-kp-cream">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="section-label">Our People</p>
            <h2 className="section-title">Meet Our Team</h2>
            <div className="gold-divider mx-auto" />
            <p className="section-subtitle mx-auto">
              Our pharmacists and staff are experienced, passionate, and genuinely dedicated
              to the health and wellbeing of every patient we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Lead Pharmacist", "Clinical Pharmacist", "Pharmacy Technician"].map((role) => (
              <div key={role} className="card-base p-7 text-center">
                <div className="w-20 h-20 rounded-full bg-kp-green-pale flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-kp-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="font-semibold text-kp-text font-serif">[Team Member Name]</p>
                <p className="text-sm text-kp-text-muted mt-0.5">{role}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-kp-text-light mt-8">
            Team details coming soon. <Link href="/contact" className="text-kp-green underline">Contact us</Link> to get to know our team.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-kp-green py-14">
        <div className="container-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-white mb-4">
            Come in and meet us today
          </h2>
          <p className="text-white/75 mb-8">
            We&apos;re always happy to answer questions, welcome new patients, and help your family thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get Directions</Link>
            <Link href="/services" className="btn-secondary">Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
