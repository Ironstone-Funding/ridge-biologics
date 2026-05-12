"use client";

import { FINANCIAL_HIGHLIGHTS, NEWS_ITEMS, COMPANY_META } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { staggerItemVariants } from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";


const IR_EVENTS = [
  { date: "2026-05-14", title: "Q1 2026 Earnings Call", type: "Earnings" },
  { date: "2026-06-10", title: "ASCO Annual Meeting Presentation", type: "Conference" },
  { date: "2026-08-13", title: "Q2 2026 Earnings Call", type: "Earnings" },
  { date: "2026-09-18", title: "Morgan Stanley Healthcare Conference", type: "Conference" },
];

export default function InvestorsPage() {
  return (
    <div className="pt-24 pb-32 bg-ridge-navy min-h-screen">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <FadeIn>
          <SectionLabel className="mb-4">Investor Relations</SectionLabel>
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Building Long-Term Value
          </h1>
          <p className="text-xl text-white/55 max-w-2xl leading-relaxed">
            {COMPANY_META.ticker} · {COMPANY_META.exchange} — Ridge Biologics is committed
            to transparent, consistent communication with our investment community.
          </p>
        </FadeIn>
      </div>

      {/* Financial Highlights */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20" id="stock">
        <FadeIn className="mb-8">
          <h2 className="text-2xl font-semibold text-white">Financial Highlights</h2>
          <p className="text-sm text-white/35 mt-1">As of Q4 2025</p>
        </FadeIn>

        <StaggerChildren staggerDelay={0.08} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FINANCIAL_HIGHLIGHTS.map((item) => (
            <motion.div key={item.label} variants={staggerItemVariants}>
              <div className="bg-ridge-navy-light border border-white/10 rounded-2xl p-6 hover:border-ridge-teal/25 transition-colors">
                <div className="text-3xl font-bold text-white mb-1">{item.value}</div>
                {item.change && (
                  <div className={`text-xs font-medium mb-2 ${item.positive ? "text-ridge-teal" : "text-red-400"}`}>
                    {item.change}
                  </div>
                )}
                <div className="text-sm text-white/45">{item.label}</div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>

      {/* Events */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20" id="events">
        <FadeIn className="mb-8">
          <h2 className="text-2xl font-semibold text-white">Upcoming Events</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            {IR_EVENTS.map((event, i) => (
              <div
                key={event.title}
                className={`flex items-center justify-between px-6 py-5 ${
                  i < IR_EVENTS.length - 1 ? "border-b border-white/8" : ""
                } hover:bg-white/3 transition-colors`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-ridge-navy-mid flex flex-col items-center justify-center border border-white/10 flex-shrink-0">
                    <span className="text-xs font-mono text-white/40">
                      {new Date(event.date).toLocaleDateString("en-US", { month: "short" }).toUpperCase()}
                    </span>
                    <span className="text-sm font-bold text-white">
                      {new Date(event.date).getDate()}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-white">{event.title}</div>
                    <div className="text-xs text-white/40 font-mono mt-0.5">{formatDate(event.date)}</div>
                  </div>
                </div>
                <Badge
                  label={event.type}
                  variant="news"
                  className={event.type === "Earnings" ? "bg-ridge-gold/10 text-ridge-gold border-ridge-gold/30" : undefined}
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Recent Press */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8" id="filings">
        <FadeIn className="mb-8">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold text-white">Recent Press Releases</h2>
            <Button variant="outline" size="sm" href="/news">View All</Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-3">
            {NEWS_ITEMS.filter((n) => n.category === "Press Release").map((item) => (
              <div key={item.id} className="flex items-start gap-4 p-5 bg-ridge-navy-light border border-white/10 rounded-xl hover:border-ridge-teal/25 transition-colors group cursor-pointer">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-white group-hover:text-ridge-teal transition-colors line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-xs text-white/35 font-mono mt-1">{formatDate(item.date)}</p>
                </div>
                <svg className="w-4 h-4 text-white/25 group-hover:text-ridge-teal flex-shrink-0 mt-1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="mt-12 text-xs text-white/25 leading-relaxed max-w-3xl">
            This investor relations page is for illustrative purposes only. Financial data, events, and company
            information are fictional and part of a mock enterprise website for Ridge Biologics.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}