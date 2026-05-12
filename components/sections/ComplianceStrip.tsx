"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

const PILLARS = [
  {
    title: "Documentation Integrity",
    body: "Every interaction in our model is supported by documentation frameworks designed to create clear, organized records.",
  },
  {
    title: "Chain-of-Custody Discipline",
    body: "We treat chain-of-custody not as a checkbox but as a core operational discipline built into our logistics from day one.",
  },
  {
    title: "Regulatory Awareness",
    body: "Our team stays current with the evolving regulatory landscape and communicates relevant developments to our provider network.",
  },
  {
    title: "Education Before Introduction",
    body: "No product enters a practice through Ridge without the provider completing our foundational compliance orientation.",
  },
];

export default function ComplianceStrip() {
  return (
    <section className="section-py bg-rb-navy relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-xl relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <SlideIn direction="left">
            <SectionLabel light>Compliance Infrastructure</SectionLabel>
            <h2 className="text-display-lg font-bold text-white mb-6">
              Compliance Is the
              <br />Foundation, Not a Feature
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
              Ridge has built compliance-consciousness into every layer of its model — from how
              we vet manufacturers to how we onboard providers to how our reps operate in the field.
            </p>
            <Button variant="white" href="/compliance">
              View Our Compliance Approach
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </SlideIn>

          <div className="grid sm:grid-cols-2 gap-4">
            {PILLARS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-white/6 border border-white/10 hover:border-rb-teal/40 hover:bg-white/8 transition-all duration-300">
                  <div className="w-1.5 h-6 bg-rb-teal rounded-full mb-4" />
                  <h3 className="text-white font-semibold text-[0.95rem] mb-2">{p.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
