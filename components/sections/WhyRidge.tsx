"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { itemVariants } from "@/components/animations/StaggerChildren";
import SectionLabel from "@/components/ui/SectionLabel";

const PILLARS = [
  {
    icon: "🔬",
    title: "GMP-Manufactured, Fully Traceable Biologics",
    description:
      "Every product we distribute comes from FDA-registered, cGMP-compliant manufacturers — with full chain-of-custody documentation and donor eligibility records included with every shipment.",
  },
  {
    icon: "📚",
    title: "Training, Logistics & Implementation",
    description:
      "We guide your clinic through every step — product onboarding, staff training, cold-chain setup, and compliance-ready patient materials — so you can launch regenerative therapies confidently.",
  },
  {
    icon: "🛡️",
    title: "Ethical Sourcing & Regulatory Integrity",
    description:
      "We partner exclusively with manufacturers who meet AATB standards and FDA registration requirements. Open documentation, audit readiness, and honest regulatory engagement are non-negotiable at Ridge Biologics.",
  },
];

export default function WhyRidge() {
  return (
    <section className="section-py bg-white">
      <div className="container-xl">
        <FadeIn className="max-w-2xl mb-16">
          <SectionLabel>Supply you trust, Support you need</SectionLabel>
          <h2 className="text-display-lg font-bold text-rb-navy mb-5">
            Why Practices Choose Ridge
          </h2>
          <p className="text-rb-text-body text-lg leading-relaxed">
            Ridge Biologics is a Utah-licensed Class C Virtual Wholesale Distributor — supplying
            licensed healthcare providers with compliant biologics and the operational support
            to use them responsibly.
          </p>
        </FadeIn>

        <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-3 gap-8">
          {PILLARS.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <div className="group flex flex-col gap-5 p-7 rounded-2xl border border-rb-slate-mid hover:border-rb-teal/40 hover:shadow-card-hover transition-all duration-300 bg-white h-full">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-rb-teal-pale flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-rb-navy text-[1.05rem] mb-2 group-hover:text-rb-teal transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-rb-text-body text-[0.925rem] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
