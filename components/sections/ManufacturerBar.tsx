"use client";

import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const STANDARDS = [
  "FDA-registered, GMP-certified manufacturers only",
  "510(k) premarket clearance on all distributed devices",
  "Certificate of Conformance with every lot",
  "Complete lot traceability from manufacturer to provider",
  "21 CFR Part 820 Quality System Regulation compliance",
  "Utah DOPL Class C licensed distribution",
];

export default function ManufacturerBar() {
  return (
    <section className="section-py relative overflow-hidden">
      {/* Video background */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
      >
        <source src="/videos/cellular-science-bg.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)", zIndex: 0 }} />

      <div className="container-xl relative" style={{ zIndex: 1 }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
            <SectionLabel light>Product Quality &amp; Sourcing</SectionLabel>
            <h2 className="text-display-lg font-bold text-white mb-6">
              GMP-Manufactured,
              <br />Fully Traceable
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              We source exclusively from FDA-registered, GMP-certified manufacturers.
              Every lot comes with full traceability documentation — so your clinic receives
              products that are verified, documented, and audit-ready from day one.
            </p>
            <Button variant="primary" href="/services">
              View Our Product Lines
            </Button>
          </SlideIn>

          <FadeIn delay={0.15}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-8 lg:p-10">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-rb-teal-light mb-6">
                Our sourcing standards
              </p>
              <ul className="space-y-3">
                {STANDARDS.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-white/85 text-[0.95rem]">
                    <svg className="w-5 h-5 text-rb-teal-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {s}
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
