"use client";

import { SOLUTIONS } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function SolutionsPage() {
  return (
    <div className="pt-20">
      <section className="section-py bg-rb-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-xl relative">
          <SlideIn direction="left">
            <SectionLabel light>Solutions</SectionLabel>
            <h1 className="text-display-xl font-bold text-white mb-6 max-w-3xl">
              A Complete Ecosystem for<br />Biologics-Integrated Practices
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Ridge provides the operational infrastructure, compliance support, and educational
              resources that practices need to integrate regenerative biologics responsibly.
            </p>
          </SlideIn>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="space-y-6">
            {SOLUTIONS.map((sol, i) => (
              <div key={sol.id} id={sol.id}><FadeIn delay={i * 0.07}>
                <div className="grid md:grid-cols-3 gap-8 p-8 lg:p-10 rounded-3xl border border-rb-slate-mid hover:border-rb-teal/40 hover:shadow-card-hover transition-all duration-300 bg-white">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-rb-teal-pale flex items-center justify-center text-2xl flex-shrink-0">
                        {sol.icon}
                      </div>
                      <h2 className="text-xl font-bold text-rb-navy">{sol.title}</h2>
                    </div>
                    <p className="text-rb-text-body text-[0.95rem] leading-relaxed mb-6">
                      {sol.description}
                    </p>
                    <Button variant="outline" size="sm" href="/contact">
                      Learn More
                    </Button>
                  </div>
                  <div className="bg-rb-slate rounded-2xl p-6">
                    <p className="text-xs font-semibold tracking-widest uppercase text-rb-teal mb-4">
                      What this includes
                    </p>
                    <ul className="space-y-2.5">
                      {sol.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-rb-text-body text-sm">
                          <svg className="w-4 h-4 text-rb-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py-sm bg-rb-teal-pale">
        <div className="container-lg text-center">
          <FadeIn>
            <h2 className="text-display-md font-bold text-rb-navy mb-5">
              Ready to Explore a Partnership?
            </h2>
            <p className="text-rb-text-body text-lg mb-8">
              Schedule a provider consultation to learn which Ridge solutions fit your practice.
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
