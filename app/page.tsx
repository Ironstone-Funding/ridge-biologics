import Image from "next/image";
import Hero from "@/components/sections/Hero";
import WhyRidge from "@/components/sections/WhyRidge";
import ComplianceStrip from "@/components/sections/ComplianceStrip";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import OnboardingPreview from "@/components/sections/OnboardingPreview";
import TrainingPreview from "@/components/sections/TrainingPreview";
import ManufacturerBar from "@/components/sections/ManufacturerBar";
import RepRecruitment from "@/components/sections/RepRecruitment";
import CTASection from "@/components/sections/CTASection";

const TERRITORY_BULLETS = [
  "Utah DOPL Class C Virtual Wholesale Distributor License",
  "Florida Department of Health tissue banking compliance",
  "State-specific regulatory guidance and support",
  "Territory-focused account management",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyRidge />
      <ComplianceStrip />
      <SolutionsGrid />

      {/* Licensed to Serve Utah & Florida — territory section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">

            {/* Left — text */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-4 mb-8">
                <span className="block w-8 h-px" style={{ backgroundColor: "rgba(56,116,126,0.6)" }} />
                <span className="text-[9.5px] tracking-[0.32em] uppercase font-medium" style={{ color: "rgba(56,116,126,0.7)" }}>
                  Service Territory
                </span>
              </div>
              <h2
                className="font-serif font-light text-[#284454] leading-[0.96] mb-6"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
              >
                Licensed to Serve<br />Utah &amp; Florida
              </h2>
              <p className="text-[#3d5a68] text-base leading-relaxed mb-8 font-light" style={{ opacity: 0.8 }}>
                Ridge Biologics operates as a Utah DOPL Class C licensed distributor serving
                healthcare providers exclusively in Utah and Florida. Our focused regional
                approach enables deep relationships with local providers and ensures we maintain
                full compliance with state-specific regulations in both territories.
              </p>
              <ul className="space-y-3">
                {TERRITORY_BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[#284454] text-sm leading-relaxed">
                    <svg className="w-4 h-4 text-[#38747e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — full image */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/utah-florida-territory.png"
                  alt="Utah and Florida — Ridge Biologics service territory"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <OnboardingPreview />
      <TrainingPreview />
      <ManufacturerBar />
      <RepRecruitment />
      <CTASection />
    </>
  );
}
