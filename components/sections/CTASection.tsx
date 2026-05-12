"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-ridge-navy-light relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-ridge-teal/15 blur-[120px]"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ridge-teal/10 border border-ridge-teal/25 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-ridge-teal" />
            <span className="text-xs font-mono text-ridge-teal tracking-widest">PARTNERSHIPS & LICENSING</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Build the Future of
            <br />
            <span className="bg-teal-gradient bg-clip-text text-transparent">
              Medicine Together
            </span>
          </h2>

          <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-2xl mx-auto">
            We partner with academic institutions, pharma companies, and patient advocacy
            organizations to accelerate the development of transformative therapies.
            Let's explore how we can collaborate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Start a Conversation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button variant="ghost" size="lg" href="/investors">
              Investor Relations
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
