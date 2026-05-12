"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
  border?: boolean;
}

const paddings = { none: "", sm: "p-5", md: "p-7", lg: "p-9" };

export default function Card({ children, className, hover = true, padding = "md", border = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -3, boxShadow: "0 8px 40px rgba(40,68,84,0.12)" } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-white rounded-2xl shadow-card transition-all duration-200",
        border && "border border-rb-slate-mid",
        hover && "hover:border-rb-teal/30",
        paddings[padding],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
