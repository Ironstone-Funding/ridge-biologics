"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const PILLARS = [
  {
    num: "01",
    title: "510(k)-Cleared, Fully Traceable Devices",
    body: "Every product we distribute is FDA-cleared under the 510(k) premarket notification process and sourced from FDA-registered, cGMP-compliant manufacturers — with complete lot documentation and certificates of conformance included with every shipment.",
  },
  {
    num: "02",
    title: "Training, Logistics & Implementation",
    body: "We guide your clinic through every step — product onboarding, staff training, storage guidance, and compliance-ready patient materials — so you can expand your device-based offerings confidently.",
  },
  {
    num: "03",
    title: "Ethical Sourcing & Regulatory Integrity",
    body: "We partner exclusively with FDA-registered manufacturers of cleared Class II devices. Open documentation, audit readiness, and honest regulatory engagement are non-negotiable.",
  },
];

export default function WhyRidge() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-24 sm:py-40 lg:py-56">
        <div className="grid lg:grid-cols-12 gap-20 lg:gap-24">

          {/* Left — oversized editorial statement, sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, delay: 0.1, ease }}
            >
              <div className="flex items-center gap-4 mb-12">
                <span className="block w-8 h-px bg-[#38747e]/60" />
                <span className="text-[12px] text-[#38747e]/80 tracking-[0.22em] uppercase font-medium">
                  Why Clinics Choose Ridge
                </span>
              </div>

              <h2
                className="font-serif font-light text-[#284454] leading-[0.96]"
                style={{
                  fontSize: "clamp(3.2rem, 5.5vw, 5.5rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                The Standard
                <br />
                Elite Practices
                <br />
                <em style={{ fontStyle: "italic", color: "#38747e", opacity: 0.85 }}>Demand.</em>
              </h2>
            </motion.div>
          </div>

          {/* Right — vertical editorial list */}
          <div className="lg:col-span-8">
            <div>
              {PILLARS.map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.5, delay: i * 0.15, ease }}
                  className="group border-t border-[#dde7eb] py-14 lg:py-16 flex flex-col sm:flex-row gap-8 sm:gap-12"
                >
                  {/* Number */}
                  <div className="flex-shrink-0 mt-1" style={{ minWidth: 48 }}>
                    <span
                      className="font-serif font-bold text-[#38747e]"
                      style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", opacity: 0.75, letterSpacing: "-0.03em", lineHeight: 1 }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-2 lg:pt-3">
                    <h3
                      className="font-serif font-light text-[#284454] mb-5 leading-[1.2] group-hover:text-[#38747e] transition-colors duration-700"
                      style={{
                        fontSize: "clamp(1.25rem, 2vw, 1.7rem)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#3d5a68] text-[0.95rem] leading-[1.85] font-light"
                      style={{ opacity: 0.80, maxWidth: "38rem" }}
                    >
                      {item.body}
                    </p>
                    {/* Regulatory certificates image — pillar 01 only */}
                    {i === 0 && (
                      <div className="mt-8 w-full rounded-xl overflow-hidden bg-[#f0f4f6] p-3">
                        <Image
                          src="/images/regulatory-certificates.png"
                          alt="FDA 510(k) clearance records and Certificate of Conformance documentation"
                          width={800}
                          height={533}
                          className="w-full h-auto rounded-lg"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {/* Final bottom rule */}
              <div className="border-t border-[#dde7eb]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
