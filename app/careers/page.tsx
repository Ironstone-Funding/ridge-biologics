"use client";

import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const TRAITS = [
  "Licensed healthcare or medical distribution background preferred",
  "Commitment to compliant, ethical biologics representation",
  "Ability to support provider onboarding and documentation processes",
  "Territory focus in Utah and Florida, with expansion into additional states",
  "Interest in ongoing education and professional development",
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-rb-navy pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container-xl relative">
          <SlideIn direction="up">
            <SectionLabel light>Careers</SectionLabel>
            <h1 className="text-display-lg font-bold text-white mb-6">
              Representing Ridge as a
              <br />
              <span className="text-rb-teal-light">1099 Sales Representative</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed max-w-2xl mb-4">
              We work with qualified independent sales representatives across Utah and Florida,
              and are actively expanding our rep network nationwide. Ridge reps are more than
              commission earners — they&apos;re trusted liaisons who help clinics integrate
              biologics responsibly.
            </p>
            <p className="text-white/55 text-sm leading-relaxed max-w-2xl">
              Contact us to learn about our commission program and certification requirements.
            </p>
          </SlideIn>
        </div>
      </section>

      {/* What We Look For */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <SectionLabel>What We Look For</SectionLabel>
              <h2 className="text-display-md font-bold text-rb-navy mb-6">
                Qualities of a Ridge Representative
              </h2>
              <p className="text-rb-text-body text-lg leading-relaxed mb-8">
                We seek professionals who understand the responsibility of distributing
                FDA-cleared medical devices. Our representatives are the front line of
                compliance — and the face of Ridge in every practice they serve.
              </p>
              <Button variant="primary" href="/contact">
                Inquire About Rep Opportunities
              </Button>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-rb-slate border border-rb-slate-mid rounded-3xl p-8 lg:p-10">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-rb-teal mb-6">
                  Ideal candidate traits
                </p>
                <ul className="space-y-4">
                  {TRAITS.map((t) => (
                    <li key={t} className="flex items-start gap-3 text-rb-navy text-[0.925rem] leading-relaxed">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full border border-rb-teal/50 flex items-center justify-center mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rb-teal" />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-rb-teal-pale">
        <div className="container-lg text-center">
          <FadeIn>
            <h2 className="text-display-md font-bold text-rb-navy mb-5">
              Ready to Join the Ridge Network?
            </h2>
            <p className="text-rb-text-body text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Reach out to discuss territory availability, commission structure,
              and our onboarding process for new representatives.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Contact Us About Opportunities
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
