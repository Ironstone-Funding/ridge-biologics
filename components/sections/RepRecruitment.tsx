"use client";

import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const TRAITS = [
  "Background in healthcare, life sciences, or medical distribution",
  "Commitment to compliance-conscious practice",
  "Ability to support documentation and operational processes",
  "Interest in ongoing education and professional development",
  "Relationship-oriented approach to provider engagement",
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
            <SectionLabel light>Join the Ridge Network</SectionLabel>
            <h2 className="text-display-lg font-bold text-white mb-6">
              We're Building a Field
              <br />Team That Leads With
              <br />
              <span className="text-rb-teal-light">Compliance</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Ridge representatives are more than sales professionals — they're operational
              and compliance liaisons who genuinely support the practices they serve.
            </p>
            <div className="flex gap-4">
              <Button variant="primary" href="/careers">
                View Open Roles
              </Button>
              <Button variant="ghost" href="/contact">
                Inquire About Opportunities
              </Button>
            </div>
          </SlideIn>

          <FadeIn delay={0.2}>
            <div className="bg-white/6 border border-white/10 rounded-3xl p-8 lg:p-10">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-rb-teal-light mb-6">
                What we look for
              </p>
              <ul className="space-y-4">
                {TRAITS.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/70 text-[0.925rem] leading-relaxed">
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
