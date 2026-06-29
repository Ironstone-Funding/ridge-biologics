"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const PILLARS = [
  {
    title: "510(k)-Cleared, Fully Traceable",
    body: "Every product is FDA-cleared under the 510(k) process and sourced from FDA-registered, cGMP-compliant manufacturers. Complete lot documentation and Certificate of Conformance included with every shipment.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Chain-of-Custody Discipline",
    body: "Built into our logistics model from manufacturer to point of care. Every handoff documented, every lot traceable, every shipment verified.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    title: "cGMP Sourcing & Regulatory Integrity",
    body: "We partner exclusively with FDA-registered manufacturers of cleared Class II devices. 21 CFR Part 820 compliance, open documentation, and audit readiness are non-negotiable.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Education Before Introduction",
    body: "No product enters a practice without the provider completing our foundational compliance orientation. Education is prerequisite, not optional.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function ProofCompliance() {
  return (
    <section className="relative overflow-hidden bg-[#07111a]">
      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.038] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />
      {/* Atmospheric glow */}
      <div
        className="absolute top-0 left-0 w-[50vw] h-[50vh] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(32,90,108,0.10) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[40vw] h-[40vh] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 100%, rgba(20,52,68,0.18) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-24 sm:py-32 lg:py-40">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, delay: 0.1, ease }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="block w-8 h-px bg-[#38747e]/60" />
            <span className="text-[12px] text-[#38747e]/80 tracking-[0.22em] uppercase font-medium">
              The Standard
            </span>
          </div>

          <h2
            className="font-serif font-light text-white leading-[0.96] mb-6"
            style={{
              fontSize: "clamp(2.8rem, 4.5vw, 4.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Compliance built into{" "}
            <em style={{ fontStyle: "italic", color: "#3d8a97", opacity: 0.9 }}>every layer.</em>
          </h2>

          <p
            className="text-white font-light text-[0.95rem] leading-[1.85]"
            style={{ opacity: 0.65, maxWidth: "36rem" }}
          >
            From manufacturer vetting to provider onboarding to field operations,
            every layer of Ridge is built around compliance-consciousness.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.2, delay: i * 0.12, ease }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 lg:p-10 hover:border-[#38747e]/30 transition-colors duration-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#38747e]/15 flex items-center justify-center text-[#4a8f9a]">
                  {pillar.icon}
                </div>
                <h3
                  className="font-serif font-light text-white leading-[1.2] pt-1.5 group-hover:text-[#4a8f9a] transition-colors duration-500"
                  style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.35rem)", letterSpacing: "-0.008em" }}
                >
                  {pillar.title}
                </h3>
              </div>
              <p
                className="text-white font-light text-[0.92rem] leading-[1.85] pl-14"
                style={{ opacity: 0.7 }}
              >
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Supporting images */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, delay: 0.1, ease }}
            className="rounded-xl overflow-hidden bg-white/5 p-3"
          >
            <Image
              src="/images/regulatory-certificates.png"
              alt="FDA 510(k) clearance records and Certificate of Conformance documentation"
              width={800}
              height={533}
              className="w-full h-auto rounded-lg"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, delay: 0.2, ease }}
            className="rounded-xl overflow-hidden bg-white/5 p-3"
          >
            <Image
              src="/images/services-documentation.png"
              alt="Ridge Biologics compliance documentation binders"
              width={800}
              height={533}
              className="w-full h-auto rounded-lg"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
