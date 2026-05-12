"use client";

import React from "react";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { RIDGE_DIFFERENCE } from "@/lib/constants";

const iconMap: Record<string, React.ReactElement> = {
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  snowflake: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364" />
    </svg>
  ),
  badge: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.497 3.51 3.745 3.745 0 01-3.51.497A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.51-.497 3.746 3.746 0 01-.497-3.51A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.497-3.51 3.745 3.745 0 013.51-.497A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.51.497 3.746 3.746 0 01.497 3.51A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  users: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
};

export default function ComplianceStrip() {
  return (
    <section className="section-py bg-rb-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-xl relative">
        <SlideIn direction="left" className="mb-14">
          <SectionLabel light>The Ridge Difference</SectionLabel>
          <h2 className="text-display-lg font-bold text-white mb-5">
            What sets Ridge apart isn't
            <br />just what we sell — it's how we operate.
          </h2>
        </SlideIn>

        <div className="grid md:grid-cols-2 gap-5">
          {RIDGE_DIFFERENCE.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="flex gap-5 p-7 rounded-2xl bg-white/6 border border-white/10 hover:border-rb-teal/40 hover:bg-white/8 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-rb-teal/20 flex items-center justify-center text-rb-teal-light">
                  {iconMap[item.icon]}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-rb-teal-light">✓</span>
                    <h3 className="text-white font-semibold text-[0.95rem]">{item.title}</h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
