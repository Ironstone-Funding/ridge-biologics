"use client";

import { motion } from "framer-motion";
import type { TrialPhase } from "@/types";

interface PhaseBarProps {
  phase: TrialPhase;
}

const PHASES: TrialPhase[] = ["Preclinical", "Phase 1", "Phase 2", "Phase 3", "Approved"];

const activeColor: Record<TrialPhase, string> = {
  Preclinical: "bg-slate-400",
  "Phase 1":   "bg-blue-400",
  "Phase 2":   "bg-violet-400",
  "Phase 3":   "bg-ridge-teal",
  Approved:    "bg-emerald-400",
};

export default function PhaseBar({ phase }: PhaseBarProps) {
  const activeIndex = PHASES.indexOf(phase);

  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Clinical phase: ${phase}`}>
      {PHASES.map((p, i) => (
        <motion.div
          key={p}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.35 }}
          className={`h-1.5 rounded-full origin-left ${
            i <= activeIndex ? activeColor[phase] : "bg-white/15"
          }`}
          style={{ width: 20 }}
          title={p}
        />
      ))}
    </div>
  );
}
