import Link from "next/link";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

const promises = [
  "We know you by name",
  "Fast same-day prescription filling",
  "Free pharmacist consultations",
  "Medicare enrollment guidance",
  "Medication savings programs",
  "No automated phone trees",
];

export default function AboutSection() {
  return (
    <section className="section-pad bg-kp-cream border-t border-kp-border-light">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Image side ── */}
          <div className="relative order-2 lg:order-1">
            {/* Main photo placeholder */}
            <div className="bg-white rounded-2xl border border-kp-border-light overflow-hidden aspect-[4/3] flex flex-col items-center justify-center p-10 text-center">
              <svg className="w-20 h-20 text-kp-green/20 mb-3" fill="none" viewBox="0 0 80 80" stroke="currentColor" strokeWidth={1.2} aria-hidden="true">
                <circle cx="40" cy="24" r="12" />
                <path d="M16 68c0-13.255 10.745-24 24-24s24 10.745 24 24" />
                <rect x="52" y="44" width="20" height="16" rx="2" />
                <line x1="62" y1="44" x2="62" y2="36" />
                <line x1="57" y1="52" x2="67" y2="52" />
              </svg>
              <p className="text-kp-text-muted text-sm font-medium">Photo: Our pharmacy team</p>
              <p className="text-kp-text-light text-xs mt-1">Replace with real team photo</p>
            </div>

            {/* Our Promise card */}
            <div className="absolute -top-4 -right-4 bg-kp-green text-white rounded-xl shadow-card p-5 max-w-[210px]">
              <p className="font-bold text-sm mb-3">Our Promise to You</p>
              <ul className="space-y-1.5 text-xs text-white/90">
                {promises.slice(0, 4).map((p) => (
                  <li key={p} className="flex items-start gap-1.5">
                    <CheckIcon className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Text side ── */}
          <div className="order-1 lg:order-2">
            <p className="section-label">About Us</p>
            <h2 className="section-title">A Pharmacy That Knows Your Name</h2>
            <div className="green-divider" />

            <p className="text-kp-text-body leading-relaxed mb-5">
              Kalama Pharmacy is a locally owned, independent community pharmacy dedicated to
              giving every patient the kind of personal attention you just can&apos;t get at a
              chain. We take the time to understand your health, your budget, and your
              family — because that&apos;s what good pharmacy care looks like.
            </p>
            <p className="text-kp-text-body leading-relaxed mb-8">
              Whether you&apos;re picking up a daily prescription, managing a chronic condition,
              or navigating Medicare enrollment for the first time — our pharmacists are here
              to help, every step of the way. No rush. No runaround. Just real help from
              people who care.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {promises.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-kp-text-body">
                  <span className="w-6 h-6 bg-kp-green-pale rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-3.5 h-3.5 text-kp-green" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link href="/about"   className="btn-green">Meet Our Team</Link>
              <Link href="/contact" className="btn-outline-green">Get in Touch</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
