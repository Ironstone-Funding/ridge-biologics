"use client";

import { motion } from "framer-motion";
import { WHY_RIDGE } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { itemVariants } from "@/components/animations/StaggerChildren";
import SectionLabel from "@/components/ui/SectionLabel";

export default function WhyRidge() {
  return (
    <section className="section-py bg-white">
      <div className="container-xl">
        <FadeIn className="max-w-2xl mb-16">
          <SectionLabel>Why Clinics Choose Ridge</SectionLabel>
          <h2 className="text-display-lg font-bold text-rb-navy mb-5">
            Infrastructure Built Around the Provider
          </h2>
          <p className="text-rb-text-body text-lg leading-relaxed">
            Ridge exists to handle the operational complexity of biologics distribution so that
            providers can remain focused on clinical care.
          </p>
        </FadeIn>

        <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-2 gap-8">
          {WHY_RIDGE.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <div className="group flex gap-6 p-7 rounded-2xl border border-rb-slate-mid hover:border-rb-teal/40 hover:shadow-card-hover transition-all duration-300 bg-white">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-rb-teal-pale flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-rb-navy text-lg mb-2 group-hover:text-rb-teal transition-colors">
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
