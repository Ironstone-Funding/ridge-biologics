"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { itemVariants } from "@/components/animations/StaggerChildren";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function TrainingPreview() {
  const preview = SERVICES.slice(0, 3);
  return (
    <section className="section-py bg-rb-slate">
      <div className="container-xl">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>How We Support Your Practice</SectionLabel>
            <h2 className="text-display-lg font-bold text-rb-navy">
              More Than a Supplier
            </h2>
          </div>
          <Button variant="outline" href="/services">
            View All Services
          </Button>
        </FadeIn>

        <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-3 gap-6">
          {preview.map((svc) => (
            <motion.div key={svc.id} variants={itemVariants}>
              <div className="group h-full bg-white rounded-2xl border border-rb-slate-mid p-7 hover:border-rb-teal/40 hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-rb-teal-pale flex items-center justify-center text-2xl mb-5">
                  {svc.icon}
                </div>
                <h3 className="font-semibold text-rb-navy text-[1rem] mb-3 leading-snug group-hover:text-rb-teal transition-colors">
                  {svc.title}
                </h3>
                <p className="text-rb-text-body text-sm leading-relaxed">
                  {svc.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
