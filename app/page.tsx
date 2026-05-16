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


export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyRidge />
      <ComplianceStrip />
      <SolutionsGrid />

      {/* Service Territory — full-width image */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-28">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/utah-florida-territory.png"
              alt="Currently Serving Utah & Florida — Expanding Nationwide | Ridge Biologics service territory"
              width={1400}
              height={788}
              className="w-full h-auto"
              sizes="100vw"
              priority
            />
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
