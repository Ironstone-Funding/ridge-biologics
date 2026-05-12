"use client";

import { TRAINING_MODULES } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function TrainingPage() {
  return (
    <div className="pt-20">
      <section className="section-py bg-rb-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-xl relative">
          <SlideIn direction="left">
            <SectionLabel light>Training & Education</SectionLabel>
            <h1 className="text-display-xl font-bold text-white mb-6 max-w-3xl">
              Education That Empowers<br />Responsible Practice
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Ridge's training programs are designed to prepare provider teams to integrate
              regenerative biologics with documented competence, compliance awareness, and
              operational confidence.
            </p>
          </SlideIn>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl">
          <FadeIn className="mb-14">
            <SectionLabel>Training Programs</SectionLabel>
            <h2 className="text-display-md font-bold text-rb-navy">Available Training Modules</h2>
          </FadeIn>
          <div className="space-y-5">
            {TRAINING_MODULES.map((mod, i) => (
              <FadeIn key={mod.id} delay={i * 0.07}>
                <div className="grid md:grid-cols-4 gap-6 p-7 lg:p-8 rounded-2xl border border-rb-slate-mid hover:border-rb-teal/40 hover:shadow-card transition-all duration-300 bg-white group">
                  <div className="md:col-span-3">
                    <h3 className="font-semibold text-rb-navy text-lg mb-2 group-hover:text-rb-teal transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-rb-text-body text-[0.925rem] leading-relaxed">{mod.description}</p>
                  </div>
                  <div className="flex flex-row md:flex-col gap-3 md:items-end justify-start md:justify-center">
                    <div className="text-center bg-rb-teal-pale rounded-xl px-4 py-2.5">
                      <div className="text-xs text-rb-text-muted mb-0.5">Duration</div>
                      <div className="text-sm font-semibold text-rb-navy">{mod.duration}</div>
                    </div>
                    <div className="text-center bg-rb-slate rounded-xl px-4 py-2.5">
                      <div className="text-xs text-rb-text-muted mb-0.5">Audience</div>
                      <div className="text-sm font-semibold text-rb-navy">{mod.audience}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-rb-slate">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <SectionLabel>How Training Works</SectionLabel>
              <h2 className="text-display-md font-bold text-rb-navy mb-6">
                Delivered by Ridge Representatives, Supported by Materials
              </h2>
              <p className="text-rb-text-body text-lg leading-relaxed mb-6">
                Ridge training programs are delivered through a combination of field representative
                sessions, written materials, and structured review exercises. Training is completed
                as part of the provider onboarding process and continues through ongoing education
                support.
              </p>
              <p className="text-rb-text-body text-base leading-relaxed">
                All training content is designed to be compliance-conscious, practically applicable,
                and regularly updated to reflect developments in the regulatory landscape.
              </p>
            </SlideIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl border border-rb-slate-mid p-8 lg:p-10">
                <p className="text-xs font-semibold tracking-widest uppercase text-rb-teal mb-6">
                  Training principles
                </p>
                <ul className="space-y-4">
                  {[
                    "Education precedes product introduction — always",
                    "Content is designed to be legally defensible and accurate",
                    "Ridge does not make clinical efficacy claims in training materials",
                    "Training is updated regularly as the landscape evolves",
                    "Completion is documented as part of the practice record",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-rb-text-body text-sm leading-relaxed">
                      <svg className="w-4 h-4 text-rb-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
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
            <h2 className="text-display-md font-bold text-white mb-5">Access Ridge Training</h2>
            <p className="text-white/60 text-lg mb-8">
              Training access is provided to providers enrolled in the Ridge network. Contact us to begin.
            </p>
            <Button variant="primary" size="lg" href="/contact">Schedule a Consultation</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
