"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

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
            Ready to Bring Ridge Into
            <br />Your Practice?
          </h2>
          <p className="text-rb-text-body text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Schedule a provider consultation to learn how Ridge's compliance-first infrastructure
            can support your biologics integration goals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              {COMPANY.cta_primary}
            </Button>
            <Button variant="outline" size="lg" href="/solutions">
              {COMPANY.cta_secondary}
            </Button>
          </div>

          <p className="mt-10 text-xs text-rb-text-muted leading-relaxed max-w-lg mx-auto">
            Ridge Biologics does not make clinical efficacy claims. All information is provided
            for educational and operational support purposes. Clinical decisions remain the
            responsibility of licensed healthcare providers.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
