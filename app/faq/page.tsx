"use client";

import { useState } from "react";
import { FAQS, ONBOARDING_STEPS } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

function AccordionItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={index * 0.06}>
      <div className={`rounded-2xl border transition-all duration-200 ${open ? "border-rb-teal/40 shadow-card" : "border-rb-slate-mid"} bg-white`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 p-6 text-left"
        >
          <span className="font-semibold text-rb-navy text-[0.95rem] leading-snug">{question}</span>
          <span className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${open ? "bg-rb-teal border-rb-teal text-white rotate-180" : "border-rb-slate-mid text-rb-text-muted"}`}>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
        {open && (
          <div className="px-6 pb-6 text-rb-text-body text-sm leading-relaxed border-t border-rb-slate pt-4">
            {answer}
          </div>
        )}
      </div>
    </FadeIn>
  );
}

export default function FAQPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-py bg-rb-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-xl relative">
          <SlideIn direction="left">
            <SectionLabel light>FAQ</SectionLabel>
            <h1 className="text-display-xl font-bold text-white mb-6 max-w-3xl">
              Frequently Asked Questions
            </h1>
            <p className="text-white/75 text-xl leading-relaxed max-w-2xl">
              We've compiled answers to the most common questions from providers exploring
              regenerative medicine for their practices.
            </p>
          </SlideIn>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-py bg-rb-slate">
        <div className="container-xl">
          <FadeIn className="mb-12">
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="text-display-md font-bold text-rb-navy">
              Everything You Need to Know
            </h2>
          </FadeIn>
          <div className="max-w-3xl space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How to get started */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <FadeIn className="mb-14">
            <SectionLabel>Getting Started</SectionLabel>
            <h2 className="text-display-md font-bold text-rb-navy">
              How to Acquire Our Products
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
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
          <FadeIn delay={0.3} className="flex gap-4">
            <Button variant="primary" href="/services#request">
              Submit a Product Request
            </Button>
            <Button variant="outline" href="/contact">
              Contact Our Team
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Still have questions */}
      <section className="section-py-sm bg-rb-teal-pale">
        <div className="container-lg text-center">
          <FadeIn>
            <h2 className="text-display-md font-bold text-rb-navy mb-5">
              Can't Find an Answer?
            </h2>
            <p className="text-rb-text-body text-lg mb-8">
              Reach out directly and a member of our team will respond promptly.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Contact Us
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white border-t border-rb-slate">
        <div className="container-xl">
          <p className="text-xs text-rb-text-muted leading-relaxed max-w-4xl">
            Ridge Biologics provides FDA-registered human cellular and tissue-based products (HCT/Ps),
            including Section 361 minimally manipulated, homologous-use allografts regulated under
            21 CFR Part 1271, as well as Section 351 advanced biologic products manufactured in
            FDA-licensed facilities under current Good Manufacturing Practice (cGMP) standards.
            We do not make claims for the treatment, cure, or prevention of any disease. All products
            are intended for use by qualified healthcare professionals in accordance with applicable
            regulations and labeling.
          </p>
        </div>
      </section>
    </div>
  );
}
