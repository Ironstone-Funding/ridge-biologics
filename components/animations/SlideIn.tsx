"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

export default function SlideIn({
  children, direction = "left", delay = 0, duration = 0.6,
  distance = 36, className, once = true,
}: SlideInProps) {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const sign = direction === "right" || direction === "down" ? 1 : -1;

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, [axis]: sign * distance }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
