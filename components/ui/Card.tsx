"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  dark?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className,
  hover = true,
  glass = false,
  dark = true,
  padding = "md",
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "rounded-2xl border transition-all duration-300",
        dark
          ? "bg-ridge-navy-light border-white/10 shadow-card-dark"
          : "bg-white border-gray-200 shadow-card-light",
        glass && "backdrop-blur-sm bg-white/5 border-white/10",
        hover && (dark ? "hover:border-ridge-teal/30" : "hover:border-ridge-teal/50"),
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
