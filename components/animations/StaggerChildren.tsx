"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (c: { s: number; d: number }) => ({
    transition: { staggerChildren: c.s, delayChildren: c.d },
  }),
};

export const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function StaggerChildren({
  children, staggerDelay = 0.1, initialDelay = 0, className, once = true,
}: StaggerChildrenProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      custom={{ s: staggerDelay, d: initialDelay }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}
