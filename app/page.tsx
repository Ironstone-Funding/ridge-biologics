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
      {/* Utah / Florida territory image */}
      <div className="bg-white px-8 lg:px-16 pt-10 pb-0 max-w-7xl mx-auto">
        <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden">
          <Image
            src="/images/utah-florida-territory.png"
            alt="Ridge Biologics serves Utah and Florida — Two States. One Standard of Excellence."
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>
      <WhyRidge />
      <ComplianceStrip />
      <SolutionsGrid />
      <OnboardingPreview />
      <TrainingPreview />
      <ManufacturerBar />
      <RepRecruitment />
      <CTASection />
    </>
  );
}
