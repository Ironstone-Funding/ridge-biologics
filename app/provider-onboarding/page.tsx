"use client";

import { ONBOARDING_STEPS } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const ELIGIBILITY = [
  "Licensed healthcare providers with an established practice",
  "Practices with demonstrated interest in regenerative biologics education",
  "Clinical teams willing to complete Ridge's compliance orientation",
  "Providers who understand that Ridge does not make clinical efficacy claims",
  "Practices prepared to maintain documentation and chain-of-custody standards",
];

export default function ProviderOnboardingPage() {
  return (
    <div className="pt-20">
      <section className="section-py bg-rb-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-xl relative">
          <SlideIn direction="left">
            <SectionLabel light>Provider Onboarding</SectionLabel>
            <h1 className="text-display-xl font-bold text-white mb-6 max-w-3xl">
              A Structured Path<br />to Practice Integration
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Ridge's onboarding process prepares practices operationally, educationally,
              and documentationally before any product is introduced — because preparation
              is foundational to responsible integration.
            </p>
          </SlideIn>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl">
          <FadeIn className="mb-14">
            <SectionLabel>The Process</SectionLabel>
            <h2 className="text-display-md font-bold text-rb-navy">Six Steps to Partnership</h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-6">
            {ONBOARDING_STEPS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.08}>
                <div className="group h-full flex gap-5 p-7 rounded-2xl border border-rb-slate-mid hover:border-rb-teal/40 hover:shadow-card transition-all duration-300 bg-white">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rb-navy group-hover:bg-rb-teal transition-colors duration-300 flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-rb-navy mb-2 group-hover:text-rb-teal transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-rb-text-body text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-rb-slate">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <SlideIn direction="left">
              <SectionLabel>Who We Work With</SectionLabel>
              <h2 className="text-display-md font-bold text-rb-navy mb-6">
                Eligibility & Expectations
              </h2>
              <p className="text-rb-text-body text-lg leading-relaxed mb-8">
                Ridge works with licensed healthcare providers who are committed to
                documentation integrity and compliance-conscious practice. We are selective
                in our partnerships because the standards we maintain reflect on every
                provider in our network.
              </p>
              <Button variant="primary" href="/contact">
                Begin the Conversation
              </Button>
            </SlideIn>
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-3xl border border-rb-slate-mid p-8 lg:p-10">
                <p className="text-xs font-semibold tracking-widest uppercase text-rb-teal mb-6">
                  Provider eligibility
                </p>
                <ul className="space-y-4">
                  {ELIGIBILITY.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-rb-text-body text-[0.925rem] leading-relaxed">
                      <svg className="w-5 h-5 text-rb-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-py-sm bg-rb-navy">
        <div className="container-lg text-center">
          <FadeIn>
            <h2 className="text-display-md font-bold text-white mb-5">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Schedule an initial provider consultation to learn if Ridge is the right fit for your practice.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Schedule a Provider Consultation
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
