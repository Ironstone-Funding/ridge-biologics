"use client";

import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="section-py bg-rb-teal-pale">
      <div className="container-lg text-center">
        <FadeIn>
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.png"
              alt="Ridge Biologics"
              width={180}
              height={56}
              className="h-12 w-auto object-contain"
            />
          </div>

          <h2 className="text-display-lg font-bold text-rb-navy mb-5">
            Ready to Bring Compliant Biologics
            <br />to Your Practice?
          </h2>
          <p className="text-rb-text-body text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Reach out to discuss product options, verify your practice eligibility, and get
            started with a compliant onboarding plan tailored to your clinic.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Connect With Our Team
            </Button>
            <Button variant="outline" size="lg" href="/services">
              View Our Products
            </Button>
          </div>

          <p className="mt-10 text-xs text-rb-text-muted leading-relaxed max-w-lg mx-auto">
            Ridge Biologics serves licensed healthcare providers in Utah and Florida only.
            We do not make claims for the treatment, cure, or prevention of any disease.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
