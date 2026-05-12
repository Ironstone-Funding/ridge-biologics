import Hero from "@/components/sections/Hero";
import PipelineSnapshot from "@/components/sections/PipelineSnapshot";
import ScienceHighlight from "@/components/sections/ScienceHighlight";
import NewsSection from "@/components/sections/NewsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PipelineSnapshot />
      <ScienceHighlight />
      <NewsSection />
      <CTASection />
    </>
  );
}
