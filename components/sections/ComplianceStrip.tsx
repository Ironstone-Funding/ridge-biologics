"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

const LAYERS = [
  {
    num: "01",
    title: "Documentation Integrity",
    body: "Consistent, organized records across biologics receipt, storage, and patient intake — designed to be clear, defensible, and audit-ready from day one.",
  },
  {
    num: "02",
    title: "Chain-of-Custody Discipline",
    body: "Built into our logistics model from manufacturer to point of care — not added after the fact. Every handoff documented, every lot traceable.",
  },
  {
    num: "03",
    title: "Regulatory Awareness",
    body: "Structured around 21 CFR Part 1271, Utah DOPL Class C licensing, and state-specific guidance for Utah and Florida, with ongoing attention as regulations evolve.",
  },
  {
    num: "04",
    title: "Education Before Introduction",
    body: "No product enters a practice without the provider completing our foundational compliance orientation. Education is prerequisite, not optional.",
  },
];

export default function ComplianceStrip() {
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
      {/* Atmospheric glow — top left */}
      <div
        className="absolute top-0 left-0 w-[50vw] h-[50vh] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(32,90,108,0.10) 0%, transparent 65%)" }}
      />
      {/* Atmospheric glow — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[40vw] h-[40vh] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 100%, rgba(20,52,68,0.18) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-24 sm:py-40 lg:py-56">
        <div className="grid lg:grid-cols-12 gap-20 lg:gap-24">

          {/* Left — dominant headline, sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, delay: 0.1, ease }}
            >
              <div className="flex items-center gap-4 mb-12">
                <span className="block w-8 h-px bg-[#38747e]/60" />
                <span className="text-[12px] text-[#38747e]/80 tracking-[0.22em] uppercase font-medium">
                  Compliance Infrastructure
                </span>
              </div>

              <h2
                className="font-serif font-light text-white leading-[0.96] mb-10"
                style={{
                  fontSize: "clamp(3rem, 5vw, 5rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Compliance
                <br />
                Built Into
                <br />
                <em style={{ fontStyle: "italic", color: "#3d8a97", opacity: 0.9 }}>Every Layer.</em>
              </h2>

              <p
                className="text-white font-light text-[0.95rem] leading-[1.85] mb-10"
                style={{ opacity: 0.72, maxWidth: "18rem" }}
              >
                From manufacturer vetting to provider onboarding to field operations —
                every layer of Ridge is built around compliance-consciousness.
              </p>

              <Link
                href="/faq"
                className="group inline-flex items-center gap-2 text-[#38747e]/70 hover:text-[#4a8f9a] text-[10px] tracking-[0.28em] uppercase font-medium transition-colors duration-500"
              >
                Learn More
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right — animated compliance architecture */}
          <div className="lg:col-span-8">
            {LAYERS.map((layer, i) => (
              <div key={layer.num} className="relative">

                {/* Animated rule — draws left to right */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.4, delay: i * 0.18, ease }}
                  className="w-full h-px origin-left"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                />

                {/* Teal left accent — grows downward */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.0, delay: i * 0.18 + 0.4, ease }}
                  className="absolute left-0 top-0 w-px origin-top"
                  style={{
                    height: "100%",
                    backgroundColor: "rgba(56,116,126,0.28)",
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.4, delay: i * 0.18 + 0.25, ease }}
                  className="group py-12 lg:py-14 pl-9 flex flex-col sm:flex-row gap-8 sm:gap-12"
                >
                  {/* Number */}
                  <div className="flex-shrink-0 mt-1" style={{ minWidth: 48 }}>
                    <span
                      className="font-serif font-bold text-[#3d8a97]"
                      style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", opacity: 0.70, letterSpacing: "-0.03em", lineHeight: 1 }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3
                      className="font-serif font-light text-white mb-4 leading-[1.2] group-hover:text-[#4a8f9a] transition-colors duration-700"
                      style={{
                        fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
                        letterSpacing: "-0.008em",
                        opacity: 0.90,
                      }}
                    >
                      {layer.title}
                    </h3>
                    <p
                      className="text-white font-light text-[0.96rem] leading-[1.85] group-hover:opacity-50 transition-opacity duration-700"
                      style={{ opacity: 0.82, maxWidth: "36rem" }}
                    >
                      {layer.body}
                    </p>
                    {/* Documentation image — layer 01 only */}
                    {i === 0 && (
                      <div className="mt-8 w-full max-w-lg rounded-xl overflow-hidden bg-white/5 p-3">
                        <Image
                          src="/images/services-documentation.png"
                          alt="Ridge Biologics compliance documentation binders"
                          width={800}
                          height={533}
                          className="w-full h-auto rounded-lg"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}

            {/* Final closing rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.4, delay: LAYERS.length * 0.18, ease }}
              className="w-full h-px origin-left"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
