import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-hero-green overflow-hidden min-h-[92vh] flex items-center">
      {/* Decorative leaf pattern — pure CSS circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-white/[0.03]" />
        <div className="absolute top-1/3 -right-12 w-[300px] h-[300px] rounded-full bg-white/[0.04]" />
        <div className="absolute -bottom-16 -left-16 w-[400px] h-[400px] rounded-full bg-white/[0.03]" />
        <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] rounded-full bg-white/[0.02]" />

        {/* Subtle botanical lines */}
        <svg
          className="absolute right-0 top-0 h-full w-1/2 opacity-[0.04]"
          viewBox="0 0 400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid slice"
        >
          <circle cx="200" cy="400" r="350" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="400" r="270" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="400" r="190" stroke="white" strokeWidth="1" />
          <line x1="200" y1="50" x2="200" y2="750" stroke="white" strokeWidth="1" />
          <line x1="50" y1="400" x2="350" y2="400" stroke="white" strokeWidth="1" />
          <line x1="95" y1="148" x2="305" y2="652" stroke="white" strokeWidth="1" />
          <line x1="305" y1="148" x2="95" y2="652" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative container-xl py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-kp-gold" />
            <span className="text-kp-gold text-xs font-bold tracking-[0.2em] uppercase">
              Serving Our Community
            </span>
            <span className="w-8 h-px bg-kp-gold" />
          </div>

          {/* Headline */}
          <h1 className="text-display-xl font-bold font-serif text-white leading-tight mb-6">
            Welcome to<br />
            <span className="text-kp-gold">Kalama Pharmacy</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
            Your local pharmacy partner serving Kalama and the surrounding
            community. Personal care, trusted expertise, and affordable support
            for every patient and family.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/refill" className="btn-primary text-base px-8 py-4">
              <RxIcon className="w-5 h-5" />
              Refill a Prescription
            </Link>
            <Link href="/transfer" className="btn-secondary text-base px-8 py-4">
              Transfer a Prescription
              <ArrowIcon className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-12">
            {[
              "Independent & Locally Owned",
              "Personalized Care",
              "Medication Experts",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-kp-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-white/70">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative mortar & pestle illustration — bottom right */}
      <div className="absolute right-8 bottom-8 opacity-10 hidden lg:block" aria-hidden="true">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <ellipse cx="90" cy="140" rx="70" ry="25" stroke="white" strokeWidth="3" />
          <path d="M30 120 Q30 80 90 80 Q150 80 150 120" stroke="white" strokeWidth="3" fill="none" />
          <line x1="90" y1="40" x2="90" y2="80" stroke="white" strokeWidth="3" />
          <ellipse cx="90" cy="38" rx="20" ry="12" stroke="white" strokeWidth="3" />
        </svg>
      </div>
    </section>
  );
}

function RxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
