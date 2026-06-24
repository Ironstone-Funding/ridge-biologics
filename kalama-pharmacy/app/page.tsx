import type { Metadata } from "next";
import Hero          from "@/components/sections/Hero";
import QuickActions  from "@/components/sections/QuickActions";
import FeatureCards  from "@/components/sections/FeatureCards";
import AboutSection  from "@/components/sections/AboutSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kalama Pharmacy | Your Local Community Pharmacy",
};

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickActions />
      <FeatureCards />
      <AboutSection />
      <ReviewsSection />

      {/* ── Contact CTA ── */}
      <section className="bg-kp-green-dark py-14">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-kp-green-pale text-sm font-bold tracking-widest uppercase mb-3">
                We&rsquo;re Here to Help
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white leading-tight mb-4">
                Questions? Give Us a Call or Stop By.
              </h2>
              <p className="text-white/75 leading-relaxed">
                Our pharmacists are available during store hours to answer questions,
                fill prescriptions, help with Medicare, and more.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row lg:justify-end">
              <a
                href="tel:#"
                className="btn-secondary text-base px-8 py-3.5 justify-center"
              >
                <PhoneIcon className="w-5 h-5" />
                [INSERT PHONE]
              </a>
              <Link href="/contact" className="btn-outline-white text-base px-8 py-3.5 justify-center">
                Send a Message
              </Link>
              <Link href="/refill" className="btn-primary text-base px-8 py-3.5 justify-center">
                Refill Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
