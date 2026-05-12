"use client";

import Link from "next/link";
import { PIPELINE_CANDIDATES } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { staggerItemVariants } from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import PhaseBar from "@/components/ui/PhaseBar";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

// Show only the most advanced programs on the homepage
const FEATURED = PIPELINE_CANDIDATES.filter((c) => c.phase !== "Preclinical").slice(0, 5);

export default function PipelineSnapshot() {
  return (
    <section className="py-24 lg:py-32 bg-ridge-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="mb-14">
          <SectionLabel className="mb-4">Clinical Pipeline</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Programs Built to Win
              </h2>
              <p className="mt-4 text-white/55 text-lg max-w-xl">
                Seven clinical-stage programs spanning oncology, immunology, rare disease,
                and neurology — each targeting high-unmet-need indications.
              </p>
            </div>
            <Button variant="outline" size="md" href="/pipeline">
              View Full Pipeline
            </Button>
          </div>
        </FadeIn>

        {/* Pipeline table */}
        <FadeIn delay={0.15}>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="border-b border-white/10 bg-ridge-navy-mid">
                  {["Program", "Indication", "Area", "Phase", "Mechanism"].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3.5 text-left text-xs font-semibold tracking-widest text-white/40 uppercase"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURED.map((candidate, i) => (
                  <tr
                    key={candidate.id}
                    className="border-b border-white/5 hover:bg-white/3 transition-colors group"
                  >
                    <td className="px-5 py-4">
                      <div className="font-semibold text-white group-hover:text-ridge-teal transition-colors">
                        {candidate.name}
                      </div>
                      <div className="text-xs text-white/40 mt-0.5 font-mono">
                        {candidate.genericName}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-white/70 max-w-[200px]">
                      {candidate.indication}
                    </td>
                    <td className="px-5 py-4">
                      <Badge label={candidate.therapeuticArea} variant="therapeutic" />
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex flex-col gap-1.5">
                        <Badge label={candidate.phase} variant="phase" />
                        <PhaseBar phase={candidate.phase} />
                      </div>
                    </td>
                    <td className="px-5 py-4 text-xs text-white/50 font-mono">
                      {candidate.mechanism}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}