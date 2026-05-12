import type { Metadata } from "next";
import { PIPELINE_CANDIDATES } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { staggerItemVariants } from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import PhaseBar from "@/components/ui/PhaseBar";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Pipeline",
  description:
    "Ridge Biologics' clinical pipeline: seven programs across oncology, immunology, rare disease, neurology, and cardiology.",
};

export default function PipelinePage() {
  const clinical = PIPELINE_CANDIDATES.filter((c) => c.phase !== "Preclinical");
  const preclinical = PIPELINE_CANDIDATES.filter((c) => c.phase === "Preclinical");

  return (
    <div className="pt-24 pb-32 bg-ridge-navy min-h-screen">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <FadeIn>
          <SectionLabel className="mb-4">Our Programs</SectionLabel>
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Clinical Pipeline
          </h1>
          <p className="text-xl text-white/55 max-w-2xl leading-relaxed">
            Seven programs designed to address diseases with significant unmet medical need,
            anchored by three proprietary technology platforms.
          </p>
        </FadeIn>
      </div>

      {/* Phase legend */}
      <FadeIn delay={0.2}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-xs text-white/40 uppercase tracking-widest mr-2">Phase Legend:</span>
            {(["Preclinical", "Phase 1", "Phase 2", "Phase 3", "Approved"] as const).map((p) => (
              <Badge key={p} label={p} variant="phase" />
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Clinical programs */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8" id="clinical">
        <FadeIn>
          <h2 className="text-2xl font-semibold text-white mb-6">Clinical Programs</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-x-auto rounded-2xl border border-white/10 mb-16">
            <table className="w-full min-w-[760px]">
              <thead>
                <tr className="bg-ridge-navy-mid border-b border-white/10">
                  {["Program", "Indication", "Area", "Phase", "Mechanism", "Status", "Updated"].map((h) => (
                    <th key={h} className="px-5 py-4 text-left text-xs font-semibold tracking-widest text-white/40 uppercase">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {clinical.map((c) => (
                  <tr key={c.id} className="border-b border-white/5 hover:bg-white/3 transition-colors group">
                    <td className="px-5 py-4">
                      <div className="font-semibold text-white group-hover:text-ridge-teal transition-colors">{c.name}</div>
                      <div className="text-xs text-white/40 font-mono mt-0.5">{c.genericName}</div>
                    </td>
                    <td className="px-5 py-4 text-sm text-white/70 max-w-[200px]">{c.indication}</td>
                    <td className="px-5 py-4"><Badge label={c.therapeuticArea} variant="therapeutic" /></td>
                    <td className="px-5 py-4">
                      <div className="flex flex-col gap-1.5">
                        <Badge label={c.phase} variant="phase" />
                        <PhaseBar phase={c.phase} />
                      </div>
                    </td>
                    <td className="px-5 py-4 text-xs text-white/50 font-mono">{c.mechanism}</td>
                    <td className="px-5 py-4">
                      <span className={`text-xs font-medium ${c.status === "Active" ? "text-ridge-teal" : "text-white/40"}`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-xs text-white/35 font-mono whitespace-nowrap">{c.lastUpdated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* Preclinical */}
        <div id="preclinical">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-white mb-6">Preclinical Programs</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full min-w-[760px]">
                <thead>
                  <tr className="bg-ridge-navy-mid border-b border-white/10">
                    {["Program", "Indication", "Area", "Phase", "Mechanism"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left text-xs font-semibold tracking-widest text-white/40 uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {preclinical.map((c) => (
                    <tr key={c.id} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                      <td className="px-5 py-4">
                        <div className="font-semibold text-white/80">{c.name}</div>
                        <div className="text-xs text-white/40 font-mono mt-0.5">{c.genericName}</div>
                      </td>
                      <td className="px-5 py-4 text-sm text-white/60">{c.indication}</td>
                      <td className="px-5 py-4"><Badge label={c.therapeuticArea} variant="therapeutic" /></td>
                      <td className="px-5 py-4"><Badge label={c.phase} variant="phase" /></td>
                      <td className="px-5 py-4 text-xs text-white/40 font-mono">{c.mechanism}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>

        {/* Disclaimer */}
        <FadeIn delay={0.3}>
          <p className="mt-12 text-xs text-white/25 leading-relaxed max-w-3xl">
            The information presented on this page is for illustrative purposes only and represents a mock enterprise
            website. All program names, clinical data, and company details are fictional and do not represent real
            clinical trials or actual products.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
