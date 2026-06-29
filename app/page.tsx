import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import ProofCompliance from "@/components/sections/ProofCompliance";
import OnboardingPreview from "@/components/sections/OnboardingPreview";
import CTASection from "@/components/sections/CTASection";


export default function HomePage() {
  return (
    <>
      <Hero />
      <SolutionsGrid />
      <ProofCompliance />
      <OnboardingPreview />

      {/* Eligibility Gate — Service Territory */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">

            {/* Left — qualifying question */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-4 mb-8">
                <span className="block w-8 h-px" style={{ backgroundColor: "rgba(56,116,126,0.6)" }} />
                <span className="text-[9.5px] tracking-[0.32em] uppercase font-medium" style={{ color: "rgba(56,116,126,0.7)" }}>
                  Service Territory
                </span>
              </div>
              <h2
                className="font-serif font-light text-[#284454] leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2.2rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
              >
                Are you licensed in Utah or Florida?
              </h2>
              <p className="text-[#3d5a68] text-base leading-relaxed mb-8 font-light" style={{ opacity: 0.8 }}>
                Ridge&apos;s concentrated geographic model enables unmatched regulatory fluency
                and territory-specific compliance expertise. Utah DOPL Class C licensure
                and Florida Department of Health compliance anchor our operations.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Utah DOPL Class C Virtual Wholesale Distributor License",
                  "Florida Department of Health tissue banking compliance",
                  "Additional state licensing in process",
                  "State-specific regulatory guidance and support",
                  "Dedicated territory account management",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[#284454] text-sm leading-relaxed">
                    <svg className="w-4 h-4 text-[#38747e] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#284454] text-white text-xs font-semibold tracking-[0.18em] uppercase rounded-lg hover:bg-[#38747e] transition-colors duration-300"
              >
                Check Eligibility
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right — map image */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/utah-florida-territory.png"
                  alt="Currently Serving Utah & Florida — Expanding Nationwide | Ridge Biologics service territory"
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
