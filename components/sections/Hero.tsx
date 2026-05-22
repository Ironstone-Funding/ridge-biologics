"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TRUST_PILLARS } from "@/lib/constants";

const PHRASES = [
  "Your Trusted Partner in Compliant Biologics Distribution.",
  "The Compliant Way to Offer Regenerative Therapies.",
  "GMP-Manufactured. FDA-Registered. Fully Documented.",
  "Ethical Distribution. Exceptional Support.",
];

const TrustIcon = ({ type }: { type: string }) => {
  const cls = "w-[16px] h-[16px] flex-shrink-0";
  switch (type) {
    case "shield":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    case "users":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      );
    case "file":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      );
    case "chart":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    case "link":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      );
    default: return null;
  }
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">

        {/* 1. Fallback color */}
        <div className="absolute inset-0 bg-[#070f16]" />

        {/* 2. Video — slow camera push + lateral drift */}
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1.0, 1.055, 1.03, 1.055, 1.0],
            x:     ["0%", "-0.5%", "0.3%", "-0.5%", "0%"],
          }}
          transition={{
            duration: 22,
            ease: "easeInOut",
            repeat: Infinity,
            times: [0, 0.3, 0.5, 0.7, 1],
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* 3. Primary dark overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(5,12,20,0.55)" }} />

        {/* 4. Vertical gradient — heavy at bottom where content lives */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(5,12,20,0.96) 0%, rgba(5,12,20,0.82) 28%, rgba(5,12,20,0.45) 55%, rgba(5,12,20,0.15) 100%)",
          }}
        />

        {/* 5. Top fade — protects nav readability */}
        <div
          className="absolute inset-x-0 top-0 h-36"
          style={{ background: "linear-gradient(to bottom, rgba(5,12,20,0.72) 0%, transparent 100%)" }}
        />

        {/* 6. Edge vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 110% 110% at 50% 50%, transparent 42%, rgba(3,7,12,0.62) 100%)",
          }}
        />

        {/* 7. Teal atmospheric tint */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 120% 90% at 95% 5%, rgba(28,85,100,0.20) 0%, transparent 52%)",
          }}
        />

        {/* 8. Valley fog drift A — foreground haze */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, transparent 8%, rgba(56,116,126,0.055) 32%, rgba(110,175,190,0.07) 50%, rgba(56,116,126,0.05) 70%, transparent 92%)",
            }}
            animate={{ x: [0, 55, 0] }}
            transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
          />
        </div>

        {/* 9. Mid-ridge haze — counter-direction */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 70% 35% at 38% 42%, rgba(56,116,126,0.06) 0%, transparent 60%)",
            }}
            animate={{ x: [0, -45, 0], y: [0, 12, 0] }}
            transition={{ duration: 17, ease: "easeInOut", repeat: Infinity }}
          />
        </div>

        {/* 10. Background haze — slowest, implied distance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 90% 45% at 60% 28%, rgba(30,70,85,0.07) 0%, transparent 68%)",
            }}
            animate={{ x: [0, 22, 0], y: [0, -8, 0] }}
            transition={{ duration: 24, ease: "easeInOut", repeat: Infinity }}
          />
        </div>

        {/* 11. Light shimmer — sun through mist */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 52% 38% at 58% 26%, rgba(165,215,225,0.10) 0%, rgba(100,175,190,0.04) 45%, transparent 65%)",
          }}
          animate={{
            opacity: [0.55, 1, 0.65, 0.95, 0.55],
            x:       [0, 18, -8, 14, 0],
          }}
          transition={{
            duration: 9,
            ease: "easeInOut",
            repeat: Infinity,
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />

        {/* 12. Film grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.028,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "256px 256px",
          }}
        />

        {/* ─── Content ─── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full pb-20 pt-40">

          {/* Overline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.5, ease: "easeOut" }}
            className="flex items-center gap-5 mb-12 lg:mb-16"
          >
            <span className="block w-10 h-px" style={{ backgroundColor: "rgba(100,185,200,0.85)" }} />
            <span
              className="text-[18px] font-semibold uppercase"
              style={{ color: "rgba(100,210,225,0.95)", letterSpacing: "0.10em", textShadow: "0 1px 20px rgba(0,0,0,0.65)" }}
            >
              Utah &amp; Florida Licensed · Class C Virtual Wholesale Distributor
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7, delay: 0.8, ease }}
            className="font-serif font-bold text-white"
            style={{
              fontSize: "clamp(3.8rem, 6.5vw, 6.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: "0.96",
              marginBottom: "clamp(2.5rem, 4vw, 3.5rem)",
              textShadow: "0 2px 40px rgba(0,0,0,0.5)",
            }}
          >
            Strategic Biologics Partnership
            <br />
            <span style={{ color: "#3d8a97" }}>for Leading Regenerative Practices.</span>
          </motion.h1>

          {/* Cycling slogan */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.1, ease }}
            className="overflow-hidden mb-10"
            style={{ height: "1.6em" }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={phraseIndex}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-110%", opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-white font-light"
                style={{
                  fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)",
                  letterSpacing: "0.06em",
                  opacity: 0.72,
                  textShadow: "0 1px 20px rgba(0,0,0,0.7)",
                }}
              >
                {PHRASES[phraseIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Subtext + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.3, ease }}
            className="flex flex-col sm:flex-row sm:items-end gap-10 sm:gap-16"
          >
            <p
              className="text-white font-light"
              style={{
                fontSize: "1rem",
                lineHeight: "1.85",
                opacity: 0.78,
                maxWidth: "24rem",
                letterSpacing: "0.01em",
                textShadow: "0 1px 20px rgba(0,0,0,0.8)",
              }}
            >
              Institutional-grade compliance infrastructure, manufacturer relationships,
              and clinical integration protocols — architected for practices committed
              to defensible, durable regenerative programs.
            </p>

            <div className="flex items-center gap-8 flex-shrink-0 pb-0.5">
              <Link
                href="/contact"
                className="group inline-flex items-center text-white hover:text-[#4a8f9a] transition-all duration-600"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  padding: "0.875rem 1.75rem",
                  fontSize: "10.5px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  backdropFilter: "blur(8px)",
                  backgroundColor: "rgba(5,12,20,0.25)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(56,116,126,0.55)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)")}
              >
                Request Consultation
              </Link>
              <Link
                href="/services"
                className="group flex items-center gap-2 text-white font-medium transition-all duration-600"
                style={{
                  fontSize: "10.5px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  opacity: 0.32,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.32")}
              >
                Explore Our Approach
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hairline bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.8, delay: 2.0, ease }}
          className="absolute bottom-0 left-0 right-0 h-px origin-left"
          style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
        />
      </section>

      {/* ─── TRUST BAR ───────────────────────────────────────────────── */}
      <div style={{ backgroundColor: "#070f16", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 2.2 }}
            className="flex flex-wrap items-center justify-center lg:justify-between gap-7 lg:gap-0"
          >
            {TRUST_PILLARS.map((p, i) => (
              <React.Fragment key={p.label}>
                <div
                  className="flex items-center gap-3 cursor-default transition-all duration-500 hover:opacity-70"
                  style={{ color: "rgba(255,255,255,0.60)" }}
                >
                  <span style={{ color: "rgba(56,116,126,0.85)" }}><TrustIcon type={p.icon} /></span>
                  <span style={{ fontSize: "11.5px", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500 }}>
                    {p.label}
                  </span>
                </div>
                {i < TRUST_PILLARS.length - 1 && (
                  <div className="hidden lg:block w-px h-3" style={{ backgroundColor: "rgba(255,255,255,0.10)" }} />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
