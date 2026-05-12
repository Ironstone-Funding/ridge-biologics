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
      <OnboardingPreview />
      <TrainingPreview />
      <ManufacturerBar />
      <RepRecruitment />
      <CTASection />
    </>
  );
}
