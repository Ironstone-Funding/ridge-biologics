import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: string;
  className?: string;
  dark?: boolean;
}

export default function SectionLabel({ children, className, dark = true }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase",
        dark ? "text-ridge-teal" : "text-ridge-teal-dark",
        className
      )}
    >
      <span className={cn("inline-block w-6 h-px", dark ? "bg-ridge-teal" : "bg-ridge-teal-dark")} />
      {children}
    </span>
  );
}
