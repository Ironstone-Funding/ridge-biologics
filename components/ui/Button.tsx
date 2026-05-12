"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white";
type Size    = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:   "bg-rb-teal text-white hover:bg-rb-teal-dark shadow-button font-semibold",
  secondary: "bg-rb-navy text-white hover:bg-rb-navy-dark font-semibold",
  outline:   "bg-transparent text-rb-navy border-2 border-rb-navy hover:bg-rb-navy hover:text-white font-semibold",
  ghost:     "bg-transparent text-rb-teal border border-rb-teal/40 hover:bg-rb-teal/5 font-medium",
  white:     "bg-white text-rb-navy hover:bg-rb-slate font-semibold shadow-card",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm rounded-xl",
  md: "px-7 py-3.5 text-[0.95rem] rounded-xl",
  lg: "px-9 py-4.5 text-base rounded-xl",
};

export default function Button({
  children, variant = "primary", size = "md",
  href, onClick, className, external = false,
  disabled = false, type = "button", fullWidth = false,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center gap-2 transition-all duration-200 whitespace-nowrap tracking-[-0.01em]",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  const motion_props = {
    whileHover: { scale: disabled ? 1 : 1.015 },
    whileTap:   { scale: disabled ? 1 : 0.985 },
    transition: { type: "spring", stiffness: 500, damping: 22 },
  };

  if (href) {
    return (
      <motion.div {...motion_props} className="inline-block">
        <Link href={href} className={base}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button {...motion_props} type={type} onClick={onClick}
      disabled={disabled} className={base}>
      {children}
    </motion.button>
  );
}
