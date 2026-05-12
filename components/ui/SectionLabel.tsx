import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: string;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", className)}>
      <span className={cn("block w-6 h-[2px] rounded-full", light ? "bg-white/50" : "bg-rb-teal")} />
      <span className={cn(
        "text-xs font-semibold tracking-[0.18em] uppercase",
        light ? "text-white/70" : "text-rb-teal"
      )}>
        {children}
      </span>
    </div>
  );
}
