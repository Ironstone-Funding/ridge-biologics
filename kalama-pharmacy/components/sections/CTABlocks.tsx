import Link from "next/link";

const blocks = [
  {
    bg: "bg-cta-green",
    icon: (
      <svg className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Refill a Prescription",
    description:
      "Quickly refill your existing prescriptions. We make it fast, simple, and hassle-free.",
    href: "/refill",
    cta: "Refill Now",
    ctaClass: "btn-outline-white",
  },
  {
    bg: "bg-cta-gold",
    icon: (
      <svg className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Transfer a Prescription",
    description:
      "Switching to Kalama Pharmacy is simple. We handle the transfer quickly so you&rsquo;re never without your medication.",
    href: "/transfer",
    cta: "Start Transfer",
    ctaClass: "btn-secondary",
  },
  {
    bg: "bg-cta-dark",
    icon: (
      <svg className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Contact Us",
    description:
      "Questions about your medications or services? Our friendly team is ready to help you today.",
    href: "/contact",
    cta: "Get in Touch",
    ctaClass: "btn-outline-white",
  },
];

export default function CTABlocks() {
  return (
    <section aria-label="Quick actions">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {blocks.map((block) => (
          <div key={block.title} className={`${block.bg} px-8 py-12 md:py-16 flex flex-col items-start gap-5`}>
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
              {block.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif text-white mb-2">{block.title}</h3>
              <p
                className="text-sm text-white/75 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: block.description }}
              />
            </div>
            <Link href={block.href} className={`${block.ctaClass} mt-auto`}>
              {block.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
