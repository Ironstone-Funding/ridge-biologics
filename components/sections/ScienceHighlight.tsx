"use client";

import { motion } from "framer-motion";
import { TECH_PLATFORMS } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import StaggerChildren, { staggerItemVariants } from "@/components/animations/StaggerChildren";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function ScienceHighlight() {
  return (
    <section className="py-24 lg:py-32 bg-ridge-navy-light relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ridge-teal/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <SlideIn direction="left">
            <SectionLabel className="mb-4">Technology Platforms</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Proprietary Platforms.
              <br />
              <span className="bg-teal-gradient bg-clip-text text-transparent">
                Superior Medicines.
              </span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Three proprietary technology engines — antibody engineering,
              cell therapy, and mRNA delivery — built from first principles
              to unlock biology that conventional approaches can't access.
            </p>
            <Button variant="primary" href="/science">
              Explore Our Science
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </SlideIn>

          {/* Right — Platform cards */}
          <StaggerChildren staggerDelay={0.12} initialDelay={0.2} className="space-y-4">
            {TECH_PLATFORMS.map((platform) => (
              <motion.div key={platform.id} variants={staggerItemVariants}>
                <Card className="group cursor-pointer" padding="lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-ridge-teal/10 border border-ridge-teal/20 flex items-center justify-center text-2xl flex-shrink-0">
                      {platform.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-white group-hover:text-ridge-teal transition-colors">
                          {platform.name}
                        </h3>
                        <span className="text-xs text-ridge-teal/70">{platform.tagline}</span>
                      </div>
                      <p className="text-sm text-white/55 leading-relaxed mb-3">
                        {platform.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {platform.applications.map((app) => (
                          <span
                            key={app}
                            className="text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/50"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
