"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "left" | "right" | "up" | "down";

interface SlideInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

const getVariants = (direction: Direction, distance: number): Variants => {
  const offsets: Record<Direction, { x?: number; y?: number }> = {
    left:  { x: -distance },
    right: { x: distance },
    up:    { y: -distance },
    down:  { y: distance },
  };

  return {
    hidden: { opacity: 0, ...offsets[direction] },
    visible: (custom: { delay: number; duration: number }) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: custom.delay,
        duration: custom.duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };
};

export default function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.7,
  distance = 40,
  className,
  once = true,
}: SlideInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      custom={{ delay, duration }}
      variants={getVariants(direction, distance)}
    >
      {children}
    </motion.div>
  );
}
