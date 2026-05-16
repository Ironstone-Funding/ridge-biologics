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

export default function RepRecruitment() {
  return (
    <section className="section-py bg-rb-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-xl relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
            <SectionLabel light>Become a Distribution Partner</SectionLabel>
            <h2 className="text-display-lg font-bold text-white mb-6">
              Representing Ridge as a
              <br />
              <span className="text-rb-teal-light">1099 Sales Representative</span>
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-4">
              We work with qualified independent sales representatives across Utah and Florida, and are actively expanding our rep network nationwide.
              Ridge reps are more than commission earners — they're trusted liaisons who help
              clinics integrate biologics responsibly.
            </p>
            <p className="text-white/65 text-sm leading-relaxed mb-8">
              Contact us to learn about our commission program and certification requirements.
            </p>
            <Button variant="primary" href="/contact">
              Inquire About Rep Opportunities
            </Button>
          </SlideIn>

          <FadeIn delay={0.2}>
            <div className="bg-white/6 border border-white/10 rounded-3xl p-8 lg:p-10">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-rb-teal-light mb-6">
                What we look for
              </p>
              <ul className="space-y-4">
                {TRAITS.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/85 text-[0.925rem] leading-relaxed">
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
  );
}
