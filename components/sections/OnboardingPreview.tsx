"use client";

import { ONBOARDING_STEPS } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function OnboardingPreview() {
  return (
    <section className="section-py bg-white">
      <div className="container-xl">
        <FadeIn className="max-w-2xl mb-14">
          <SectionLabel>How to Acquire Our Products</SectionLabel>
          <h2 className="text-display-lg font-bold text-rb-navy mb-5">
            Partnership Framework
          </h2>
          <p className="text-rb-text-body text-lg leading-relaxed">
            We've designed our onboarding to be straightforward for licensed providers.
            From registration to your first order, Ridge handles the complexity.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ONBOARDING_STEPS.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.1}>
              <div className="group flex flex-col gap-4 p-7 rounded-2xl border border-rb-slate-mid hover:border-rb-teal/40 hover:shadow-card transition-all duration-300 bg-white h-full">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rb-navy flex items-center justify-center text-white font-bold text-lg group-hover:bg-rb-teal transition-colors duration-300">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-rb-navy text-[1rem] mb-1.5 group-hover:text-rb-teal transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-rb-text-body text-[0.9rem] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-10 flex gap-4">
          <Button variant="primary" href="/services">
            Schedule Assessment
          </Button>
          <Button variant="outline" href="/contact">
            Contact Our Team
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
