import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeatureCards from "@/components/sections/FeatureCards";
import CTABlocks from "@/components/sections/CTABlocks";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kalama Pharmacy | Your Local Community Pharmacy",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <CTABlocks />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />

      {/* Contact CTA banner */}
      <section className="bg-kp-green py-14">
        <div className="container-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-white mb-3">
            Ready to make Kalama Pharmacy your partner in health?
          </h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">
            Our team is here to help. Give us a call, stop by, or send us a message today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link href="/refill" className="btn-secondary">
              Refill a Prescription
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
