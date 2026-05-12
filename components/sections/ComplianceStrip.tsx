"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const LAYERS = [
  {
    num: "01",
    title: "Documentation Integrity",
    body: "Every interaction in our model is supported by documentation frameworks designed to create clear, organized, and defensible records across biologics receipt, storage, and patient intake.",
  },
  {
    num: "02",
    title: "Chain-of-Custody Discipline",
    body: "We treat chain-of-custody not as a checkbox but as a core operational discipline — built into our logistics model from manufacturer to point of care.",
  },
  {
    num: "03",
    title: "Regulatory Awareness",
    body: "Our model is structured around 21 CFR Part 1271, Utah DOPL Class C licensing, and state-specific guidance for Utah and Florida — with ongoing attention as the regulatory landscape evolves.",
  },
  {
    num: "04",
    title: "Education Before Introduction",
    body: "No product enters a practice through Ridge without the provider completing our foundational compliance orientation. Education is prerequisite, not optional.",
  },
];

export default function ComplianceStrip() {
  return (
    <section className="relative overflow-hidden bg-[#0b1a23]">

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* Atmospheric glow */}
      <div
        className="absolute top-0 left-0 w-[40vw] h-[60vh] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(38,100,116,0.08) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-14 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

          {/* Left — headline + context */}
          <div className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, delay: 0.1, ease }}
            >
              <div className="flex items-center gap-3 mb-10">
                <span className="block w-6 h-px bg-[#38747e]" />
                <span className="text-[10px] text-[#38747e]/65 tracking-[0.28em] uppercase font-medium">
                  Compliance Infrastructure
                </span>
              </div>

              <h2
                className="font-serif font-light text-white leading-[1.05] mb-8"
                style={{ fontSize: "clamp(2.2rem, 3.2vw, 3.1rem)", letterSpacing: "-0.01em" }}
              >
                Compliance
                <br />
                Built Into
                <br />
                <em style={{ fontStyle: "italic", color: "#4a8f9a" }}>Every Layer.</em>
              </h2>

              <p className="text-white/30 text-sm leading-[1.85] font-light max-w-xs mb-10">
                Ridge has built compliance-consciousness into every layer of its model —
                from how we vet manufacturers to how we onboard providers to how our
                representatives operate in the field.
              </p>

              <Link
                href="/faq"
                className="group inline-flex items-center gap-2 text-[#38747e] hover:text-[#4a8f9a] text-[11px] tracking-[0.22em] uppercase font-medium transition-colors duration-400"
              >
                Learn More
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right — animated compliance stack */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div>
              {LAYERS.map((layer, i) => (
                <div key={layer.num} className="relative">

                  {/* Animated top rule */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 1.0, delay: i * 0.15, ease }}
                    className="w-full h-px bg-white/[0.08] origin-left mb-0"
                  />

                  {/* Teal accent — left edge */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.8, delay: i * 0.15 + 0.3, ease }}
                    className="absolute left-0 top-0 w-px bg-[#38747e]/40 origin-top"
                    style={{ height: "100%" }}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 1.0, delay: i * 0.15 + 0.2, ease }}
                    className="group py-9 lg:py-11 pl-8 flex flex-col sm:flex-row gap-6 sm:gap-10 hover:pl-10 transition-all duration-500"
                  >
                    {/* Number */}
                    <span
                      className="font-serif font-light text-white/12 flex-shrink-0 leading-none group-hover:text-[#38747e]/40 transition-colors duration-500"
                      style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)", letterSpacing: "-0.02em" }}
                    >
                      {layer.num}
                    </span>

                    {/* Content */}
                    <div className="pt-1">
                      <h3
                        className="font-serif font-light text-white/80 mb-3 leading-[1.25] group-hover:text-white transition-colors duration-400"
                        style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.3rem)", letterSpacing: "-0.005em" }}
                      >
                        {layer.title}
                      </h3>
                      <p className="text-white/28 text-sm leading-[1.85] font-light max-w-lg group-hover:text-white/40 transition-colors duration-400">
                        {layer.body}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}

              {/* Final bottom rule */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.0, delay: LAYERS.length * 0.15, ease }}
                className="w-full h-px bg-white/[0.08] origin-left"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
