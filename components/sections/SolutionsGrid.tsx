"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { VALUE_PROPS } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { itemVariants } from "@/components/animations/StaggerChildren";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function SolutionsGrid() {
  return (
    <section className="section-py bg-rb-slate">
      <div className="container-xl">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Product & Support Ecosystem</SectionLabel>
            <h2 className="text-display-lg font-bold text-rb-navy">
              Everything a Practice Needs
            </h2>
          </div>
          <Button variant="outline" href="/solutions">
            View All Solutions
          </Button>
        </FadeIn>

        <StaggerChildren staggerDelay={0.08} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUE_PROPS.map((vp) => (
            <motion.div key={vp.title} variants={itemVariants}>
              <Link href={vp.href} className="group block h-full bg-white rounded-2xl border border-rb-slate-mid p-7 hover:border-rb-teal/40 hover:shadow-card-hover transition-all duration-300">
                <div className="w-8 h-0.5 bg-rb-teal rounded-full mb-5 group-hover:w-12 transition-all duration-300" />
                <h3 className="font-semibold text-rb-navy text-[1.05rem] mb-3 group-hover:text-rb-teal transition-colors">
                  {vp.title}
                </h3>
                <p className="text-rb-text-body text-sm leading-relaxed">
                  {vp.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-rb-teal opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
