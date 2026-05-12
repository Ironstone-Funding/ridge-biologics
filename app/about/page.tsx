import type { Metadata } from "next";
import { LEADERSHIP_TEAM, COMPANY_META } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import StaggerChildren, { staggerItemVariants } from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ridge Biologics was founded in 2014 with the mission to engineer next-generation biologics and bring them to patients who need them most.",
};

const COMPANY_VALUES = [
  {
    title: "Patient-First",
    description: "Every program, every decision, every dollar is directed toward improving lives.",
    icon: "❤️",
  },
  {
    title: "Scientific Rigor",
    description: "We pursue mechanistic truth — even when it challenges our assumptions.",
    icon: "🔬",
  },
  {
    title: "Collaborative Spirit",
    description: "The best science happens at the intersection of diverse minds working in concert.",
    icon: "🤝",
  },
  {
    title: "Relentless Execution",
    description: "From bench to bedside, we move with urgency because patients are waiting.",
    icon: "⚡",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-32 bg-ridge-navy min-h-screen">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <SectionLabel className="mb-4">About Ridge Biologics</SectionLabel>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              A Mission Forged
              <br />
              in Science.
            </h1>
            <p className="text-xl text-white/55 leading-relaxed mb-4">
              Founded in {COMPANY_META.founded} in {COMPANY_META.hq}, Ridge Biologics
              was built on the belief that the most transformative medicines come from
              the deepest biological understanding.
            </p>
            <p className="text-lg text-white/45 leading-relaxed">
              We recruit extraordinary scientists, build proprietary platforms that
              create sustained competitive advantage, and focus relentlessly on
              diseases where patients have no good options.
            </p>
          </FadeIn>

          <SlideIn direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Founded", value: COMPANY_META.founded },
                { label: "Headquarters", value: COMPANY_META.hq },
                { label: "Employees", value: COMPANY_META.employees },
                { label: "Exchange", value: `${COMPANY_META.ticker} · ${COMPANY_META.exchange}` },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-ridge-navy-light border border-white/10 rounded-2xl p-6"
                >
                  <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-sm text-white/45">{item.label}</div>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <FadeIn className="mb-12">
          <h2 className="text-3xl font-bold text-white">Our Values</h2>
        </FadeIn>
        <StaggerChildren staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COMPANY_VALUES.map((value) => (
            <motion.div key={value.title} variants={staggerItemVariants}>
              <div className="h-full bg-ridge-navy-light border border-white/10 rounded-2xl p-6 hover:border-ridge-teal/25 transition-colors">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>

      {/* Leadership */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8" id="leadership">
        <FadeIn className="mb-12">
          <h2 className="text-3xl font-bold text-white">Leadership Team</h2>
        </FadeIn>
        <StaggerChildren staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_TEAM.map((member) => (
            <motion.div key={member.id} variants={staggerItemVariants}>
              <div className="group">
                <div className="w-full aspect-square rounded-2xl bg-ridge-navy-mid border border-white/10 mb-4 overflow-hidden flex items-center justify-center group-hover:border-ridge-teal/30 transition-colors">
                  <span className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity">👤</span>
                </div>
                <h3 className="font-semibold text-white mb-0.5">{member.name}</h3>
                <p className="text-xs text-ridge-teal mb-3">{member.title}</p>
                <p className="text-sm text-white/50 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </div>
  );
}
