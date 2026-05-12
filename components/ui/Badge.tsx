import { cn } from "@/lib/utils";
import type { TrialPhase, TherapeuticArea, NewsCategory } from "@/types";

type BadgeVariant = "phase" | "therapeutic" | "news" | "status";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const phaseColors: Record<TrialPhase, string> = {
  Preclinical: "bg-slate-700/60 text-slate-300 border-slate-600",
  "Phase 1":   "bg-blue-900/60 text-blue-300 border-blue-700",
  "Phase 2":   "bg-violet-900/60 text-violet-300 border-violet-700",
  "Phase 3":   "bg-teal-900/60 text-teal-300 border-teal-700",
  Approved:    "bg-emerald-900/60 text-emerald-300 border-emerald-700",
};

const therapeuticColors: Record<TherapeuticArea, string> = {
  Oncology:     "bg-rose-900/40 text-rose-300 border-rose-800",
  Immunology:   "bg-orange-900/40 text-orange-300 border-orange-800",
  "Rare Disease": "bg-purple-900/40 text-purple-300 border-purple-800",
  Neurology:    "bg-cyan-900/40 text-cyan-300 border-cyan-800",
  Cardiology:   "bg-red-900/40 text-red-300 border-red-800",
};

const newsColors: Record<NewsCategory, string> = {
  "Press Release": "bg-ridge-teal/10 text-ridge-teal border-ridge-teal/30",
  Publication:     "bg-ridge-gold/10 text-ridge-gold border-ridge-gold/30",
  Conference:      "bg-blue-500/10 text-blue-400 border-blue-500/30",
  Award:           "bg-amber-500/10 text-amber-400 border-amber-500/30",
};

export default function Badge({ label, variant = "phase", className }: BadgeProps) {
  const colorMap =
    variant === "phase"
      ? phaseColors
      : variant === "therapeutic"
      ? therapeuticColors
      : newsColors;

  const color =
    (colorMap as Record<string, string>)[label] ??
    "bg-gray-700/40 text-gray-300 border-gray-600";

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        color,
        className
      )}
    >
      {label}
    </span>
  );
}
