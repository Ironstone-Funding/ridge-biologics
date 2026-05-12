"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

const ease = [0.22, 1, 0.36, 1] as const;

const PILLARS = [
  {
    num: "01",
    title: "GMP-Manufactured, Fully Traceable Biologics",
    body: "Every product we distribute comes from FDA-registered, cGMP-compliant manufacturers — with full chain-of-custody documentation and donor eligibility records included with every shipment.",
  },
  {
    num: "02",
    title: "Training, Logistics & Implementation",
    body: "We guide your clinic through every step — product onboarding, staff training, cold-chain setup, and compliance-ready patient materials — so you can launch regenerative therapies confidently.",
  },
  {
    num: "03",
    title: "Ethical Sourcing & Regulatory Integrity",
    body: "We partner exclusively with manufacturers who meet AATB standards and FDA registration requirements. Open documentation, audit readiness, and honest regulatory engagement are non-negotiable.",
  },
];

export default function WhyRidge() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-14 py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">

          {/* Left — editorial statement */}
          <div className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <FadeIn>
              <div className="flex items-center gap-3 mb-10">
                <span className="block w-6 h-px bg-[#38747e]" />
                <span className="text-[10px] text-[#38747e] tracking-[0.28em] uppercase font-medium">
                  Why Clinics Choose Ridge
                </span>
              </div>

              <h2
                className="font-serif font-light text-[#284454] leading-[1.05] mb-8"
                style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.4rem)", letterSpacing: "-0.01em" }}
              >
                The Standard
                <br />
                That Practices
                <br />
                <em style={{ fontStyle: "italic" }}>Expect.</em>
              </h2>

              <p className="text-[#3d5a68]/60 text-sm leading-[1.8] font-light max-w-xs">
                Ridge exists to handle the operational complexity of biologics distribution
                so providers can remain focused on what matters — delivering exceptional patient care.
              </p>
            </FadeIn>
          </div>

          {/* Right — vertical editorial list */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="divide-y divide-[#dde7eb]">
              {PILLARS.map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.1, delay: i * 0.12, ease }}
                  className="group py-10 lg:py-12 flex flex-col sm:flex-row gap-6 sm:gap-10"
                >
                  {/* Number */}
                  <span
                    className="font-serif font-light text-[#284454]/18 flex-shrink-0 leading-none group-hover:text-[#38747e]/30 transition-colors duration-500"
                    style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
                  >
                    {item.num}
                  </span>

                  {/* Content */}
                  <div className="pt-1">
                    <h3
                      className="font-serif font-light text-[#284454] mb-4 leading-[1.25] group-hover:text-[#38747e] transition-colors duration-500"
                      style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.55rem)", letterSpacing: "-0.01em" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#3d5a68]/55 text-sm lg:text-[0.9rem] leading-[1.85] font-light max-w-xl">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
