"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// ─── Minimal line SVG icons for trust bar ──────────────────────────────────
const TrustIcon = ({ type }: { type: string }) => {
  const cls = "w-[14px] h-[14px] flex-shrink-0";
  switch (type) {
    case "shield":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    case "users":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      );
    case "file":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      );
    case "chart":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    case "link":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      );
    default:
      return null;
  }
};

const PILLARS = [
  { label: "Compliance-Conscious",     icon: "shield" },
  { label: "Provider Support",         icon: "users"  },
  { label: "Documentation-Focused",    icon: "file"   },
  { label: "Operational Guidance",     icon: "chart"  },
  { label: "Chain-of-Custody Mindset", icon: "link"   },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <>
      {/* ──────────────────────────────────────────────────────────────── */}
      {/* CINEMATIC HERO                                                   */}
      {/* ──────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">

        {/* ─── Atmospheric layered background ─── */}
        <div className="absolute inset-0">
          {/* Base */}
          <div className="absolute inset-0 bg-[#0b1a23]" />
          {/* Depth gradient — upper right atmospheric source */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 110% 90% at 90% -10%, rgba(38,100,116,0.18) 0%, transparent 55%)"
          }} />
          {/* Depth gradient — lower left warmth */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 70% 60% at -10% 105%, rgba(28,52,68,0.45) 0%, transparent 55%)"
          }} />
          {/* Edge vignette */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 45%, rgba(6,12,17,0.55) 100%)"
          }} />
          {/* Film grain */}
          <div
            className="absolute inset-0 opacity-[0.032]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "256px 256px",
            }}
          />
        </div>

        {/* Slow-breathing atmospheric glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-[55vw] h-[70vh] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 100% 0%, rgba(56,116,126,0.07) 0%, transparent 60%)",
          }}
        />

        {/* ─── Main content — anchored to lower portion ─── */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-14 w-full pb-20 pt-36">
          <div className="grid lg:grid-cols-12 items-end gap-12">

            {/* Left — editorial headline block */}
            <div className="lg:col-span-8 xl:col-span-7">

              {/* Overline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.35, ease: "easeOut" }}
                className="flex items-center gap-4 mb-10 lg:mb-14"
              >
                <span className="block w-8 h-px bg-[#38747e]" />
                <span className="text-[10px] text-[#38747e]/65 tracking-[0.32em] uppercase font-medium">
                  Utah-Licensed · Class C Virtual Wholesale Distributor
                </span>
              </motion.div>

              {/* Headline — Cormorant Garamond editorial serif */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, delay: 0.6, ease }}
                className="font-serif font-light text-white leading-[1.0] mb-8 lg:mb-10"
                style={{ fontSize: "clamp(3rem, 5.2vw, 5rem)", letterSpacing: "-0.015em" }}
              >
                The Compliance
                <br />
                <em className="font-light not-italic" style={{ fontStyle: "italic" }}>Infrastructure</em>
                <br />
                Behind Modern
                <br />
                <span style={{ color: "#4a8f9a" }}>Regenerative Medicine.</span>
              </motion.h1>

              {/* Subheadline + CTAs row */}
              <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, delay: 0.95, ease }}
                  className="text-white/30 text-base lg:text-[1.05rem] leading-[1.75] font-light max-w-md"
                  style={{ letterSpacing: "0.005em" }}
                >
                  Premium biologics distribution, provider support,
                  and compliance-conscious operational guidance —
                  for practices that hold themselves to a higher standard.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.0, delay: 1.2 }}
                  className="flex items-center gap-7 flex-shrink-0"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center text-white border border-white/18 hover:border-[#38747e]/80 hover:text-[#4a8f9a] px-6 py-3 text-[11px] tracking-[0.22em] uppercase font-medium transition-all duration-500"
                  >
                    Schedule Consultation
                  </Link>
                  <Link
                    href="/services"
                    className="group flex items-center gap-2 text-white/30 hover:text-white text-[11px] tracking-[0.22em] uppercase font-medium transition-all duration-500"
                  >
                    Explore Solutions
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Right — minimal vertical credential */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.4 }}
              className="hidden lg:flex lg:col-span-4 xl:col-span-5 justify-end items-end pb-1"
            >
              <div className="text-right space-y-5">
                <div className="space-y-1.5">
                  {["Mesenchymal Stem Cells", "Collagen Products", "PRP Kits"].map((p) => (
                    <p key={p} className="text-[10px] text-white/15 tracking-[0.18em] uppercase">{p}</p>
                  ))}
                </div>
                <div className="w-px h-8 bg-white/10 ml-auto" />
                <p className="text-[10px] text-white/12 tracking-[0.25em] uppercase">Utah · Florida</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.0, delay: 1.6, ease }}
          className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.05] origin-left"
        />
      </section>

      {/* ──────────────────────────────────────────────────────────────── */}
      {/* TRUST / COMPLIANCE BAR                                          */}
      {/* ──────────────────────────────────────────────────────────────── */}
      <div className="bg-[#0c1d27] border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.8 }}
            className="flex flex-wrap items-center justify-center lg:justify-between gap-6 lg:gap-0"
          >
            {PILLARS.map((p, i) => (
              <React.Fragment key={p.label}>
                <div className="flex items-center gap-2.5 text-white/35 hover:text-white/60 transition-colors duration-300">
                  <span className="text-[#38747e]/70"><TrustIcon type={p.icon} /></span>
                  <span className="text-[10px] tracking-[0.18em] uppercase font-medium">{p.label}</span>
                </div>
                {i < PILLARS.length - 1 && (
                  <div className="hidden lg:block w-px h-3 bg-white/[0.08]" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
