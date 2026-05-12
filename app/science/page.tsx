import type { Metadata } from "next";
import { TECH_PLATFORMS } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import StaggerChildren, { staggerItemVariants } from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Science",
  description:
    "Ridge Biologics' three proprietary technology platforms: RidgeMab™ antibody engineering, ClearCell™ CAR-T, and RidgeRNA™ mRNA delivery.",
};

const RESEARCH_AREAS = [
  {
    area: "Oncology",
    programs: 2,
    focus: "Bispecific T-cell engagers and CAR-T cell therapies targeting hematologic malignancies and solid tumors.",
    color: "from-rose-900/30 to-rose-800/10",
    accent: "border-rose-700/30",
  },
  {
    area: "Immunology",
    programs: 1,
    focus: "Cytokine pathway modulation targeting IL-33 and downstream inflammatory cascades in atopic conditions.",
    color: "from-orange-900/30 to-orange-800/10",
    accent: "border-orange-700/30",
  },
  {
    area: "Rare Disease",
    programs: 2,
    focus: "Enzyme replacement and CNS-targeted small molecules for ultra-rare genetic conditions.",
    color: "from-purple-900/30 to-purple-800/10",
    accent: "border-purple-700/30",
  },
  {
    area: "Neurology",
    programs: 1,
    focus: "Protein aggregation inhibition targeting pathological TDP-43 in ALS and FTD.",
    color: "from-cyan-900/30 to-cyan-800/10",
    accent: "border-cyan-700/30",
  },
  {
    area: "Cardiology",
    programs: 1,
    focus: "Hepatic mRNA delivery for transthyretin silencing in systemic amyloidosis.",
    color: "from-red-900/30 to-red-800/10",
    accent: "border-red-700/30",
  },
];

export default function SciencePage() {
  return (
    <div className="pt-24 pb-32 bg-ridge-navy min-h-screen">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <FadeIn>
          <SectionLabel className="mb-4">Our Science</SectionLabel>
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Built From First Principles
          </h1>
          <p className="text-xl text-white/55 max-w-2xl leading-relaxed">
            Three proprietary platforms engineered to unlock biology that conventional
            drug discovery can't access — creating a sustainable engine for medicine.
          </p>
        </FadeIn>
      </div>

      {/* Technology Platforms */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24" id="platforms">
        <FadeIn className="mb-12">
          <h2 className="text-3xl font-bold text-white">Technology Platforms</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {TECH_PLATFORMS.map((platform, i) => (
            <SlideIn key={platform.id} direction="up" delay={i * 0.1}>
              <div className="h-full bg-ridge-navy-light border border-white/10 rounded-2xl p-8 hover:border-ridge-teal/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-ridge-teal/10 border border-ridge-teal/20 flex items-center justify-center text-3xl mb-6">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-ridge-teal transition-colors">
                  {platform.name}
                </h3>
                <p className="text-sm text-ridge-teal/70 mb-4">{platform.tagline}</p>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{platform.description}</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-white/35 uppercase tracking-widest mb-2">Applications</p>
                  <ul className="space-y-1.5">
                    {platform.applications.map((app) => (
                      <li key={app} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="w-1 h-1 rounded-full bg-ridge-teal flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>

      {/* Research Areas */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8" id="research">
        <FadeIn className="mb-12">
          <h2 className="text-3xl font-bold text-white">Research Areas</h2>
        </FadeIn>

        <StaggerChildren staggerDelay={0.08} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {RESEARCH_AREAS.map((area) => (
            <motion.div key={area.area} variants={staggerItemVariants}>
              <div className={`h-full rounded-2xl bg-gradient-to-br ${area.color} border ${area.accent} p-6`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">{area.area}</h3>
                  <span className="text-xs font-mono text-white/40 bg-white/5 px-2 py-1 rounded-lg">
                    {area.programs} program{area.programs > 1 ? "s" : ""}
                  </span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{area.focus}</p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </div>
  );
}
