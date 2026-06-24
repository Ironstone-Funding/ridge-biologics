import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "green" | "outline-green" | "outline-white";
  children: React.ReactNode;
  className?: string;
}

export default function Button({ href, variant = "primary", children, className = "" }: ButtonProps) {
  const variantClass = {
    primary:        "btn-primary",
    secondary:      "btn-secondary",
    green:          "btn-green",
    "outline-green":"btn-outline-green",
    "outline-white":"btn-outline-white",
  }[variant];

  return (
    <Link href={href} className={`${variantClass} ${className}`}>
      {children}
    </Link>
  );
}
