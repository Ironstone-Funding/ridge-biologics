"use client";

import { motion } from "framer-motion";
import { ONBOARDING_STEPS } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function OnboardingPreview() {
  return (
    <section className="section-py bg-white">
      <div className="container-xl">
        <FadeIn className="max-w-2xl mb-14">
          <SectionLabel>Provider Onboarding Flow</SectionLabel>
          <h2 className="text-display-lg font-bold text-rb-navy mb-5">
            A Structured Path to Practice Integration
          </h2>
          <p className="text-rb-text-body text-lg leading-relaxed">
            Ridge's onboarding process is designed to prepare practices operationally,
            educationally, and documentationally before any product is introduced.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-[28px] top-8 bottom-8 w-px bg-rb-slate-mid" />

          <div className="space-y-5">
            {ONBOARDING_STEPS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.08}>
                <div className="group flex gap-6 p-6 lg:p-7 rounded-2xl border border-rb-slate-mid hover:border-rb-teal/40 hover:shadow-card transition-all duration-300 bg-white relative">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-rb-navy flex items-center justify-center text-white font-bold text-lg z-10 group-hover:bg-rb-teal transition-colors duration-300">
                    {step.step}
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <h3 className="font-semibold text-rb-navy text-[1.05rem] mb-1.5 group-hover:text-rb-teal transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-rb-text-body text-[0.925rem] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.3} className="mt-10 flex gap-4">
          <Button variant="primary" href="/provider-onboarding">
            Learn About Onboarding
          </Button>
          <Button variant="outline" href="/contact">
            Schedule a Consultation
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
