"use client";

import { motion } from "framer-motion";
import { TRAINING_MODULES } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { itemVariants } from "@/components/animations/StaggerChildren";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function TrainingPreview() {
  const preview = TRAINING_MODULES.slice(0, 3);
  return (
    <section className="section-py bg-rb-slate">
      <div className="container-xl">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Training & Education</SectionLabel>
            <h2 className="text-display-lg font-bold text-rb-navy">
              Education-Driven Partnerships
            </h2>
          </div>
          <Button variant="outline" href="/training">
            View All Modules
          </Button>
        </FadeIn>

        <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-3 gap-6">
          {preview.map((mod) => (
            <motion.div key={mod.id} variants={itemVariants}>
              <div className="group h-full bg-white rounded-2xl border border-rb-slate-mid p-7 hover:border-rb-teal/40 hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold tracking-widest uppercase text-rb-teal bg-rb-teal-pale px-3 py-1 rounded-full">
                    {mod.duration}
                  </span>
                  <span className="text-xs text-rb-text-muted">{mod.audience}</span>
                </div>
                <h3 className="font-semibold text-rb-navy text-[1rem] mb-3 leading-snug group-hover:text-rb-teal transition-colors">
                  {mod.title}
                </h3>
                <p className="text-rb-text-body text-sm leading-relaxed">
                  {mod.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
