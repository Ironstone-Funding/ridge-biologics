import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  accent?: "green" | "gold";
}

export default function ServiceCard({
  icon,
  title,
  description,
  href = "#",
  accent = "green",
}: ServiceCardProps) {
  const iconBg  = accent === "gold" ? "bg-kp-gold-pale group-hover:bg-kp-gold" : "bg-kp-green-pale group-hover:bg-kp-green";
  const iconClr = accent === "gold" ? "text-kp-gold group-hover:text-white"    : "text-kp-green group-hover:text-white";
  const linkClr = accent === "gold" ? "text-kp-gold hover:text-kp-gold-dark"   : "text-kp-green hover:text-kp-green-dark";

  return (
    <div className="group card-base p-7 hover:-translate-y-1 flex flex-col">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${iconBg}`}>
        <div className={`w-7 h-7 transition-colors duration-300 ${iconClr}`}>{icon}</div>
      </div>

      <h3 className="text-lg font-bold font-serif text-kp-text mb-2">{title}</h3>
      <p className="text-sm text-kp-text-muted leading-relaxed flex-1 mb-5">{description}</p>

      <Link
        href={href}
        className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${linkClr}`}
      >
        Learn more
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
