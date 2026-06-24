import Link from "next/link";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function RxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function CrossIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 8h-3V5a1 1 0 00-1-1h-6a1 1 0 00-1 1v3H5a1 1 0 00-1 1v6a1 1 0 001 1h3v3a1 1 0 001 1h6a1 1 0 001-1v-3h3a1 1 0 001-1V9a1 1 0 00-1-1z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="bg-white border-b border-kp-border-light py-10 md:py-20">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 bg-kp-green-pale text-kp-green text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              <CrossIcon className="w-4 h-4" />
              Kalama, WA Community Pharmacy
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold font-serif text-kp-text leading-[1.1] mb-4">
              Your Local<br />Pharmacy in<br />Kalama
            </h1>

            <p className="text-lg text-kp-text-body leading-relaxed mb-7 max-w-lg">
              Friendly prescription care, medication support, and personalized
              service from a pharmacy team that knows your name.
            </p>

            {/* Buttons — full-width stacked on mobile, inline on sm+ */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-7">
              <Link href="/refill" className="btn-primary px-7 py-3.5 text-base w-full sm:w-auto justify-center">
                <RxIcon className="w-5 h-5" />
                Refill Prescription
              </Link>
              <Link href="/transfer" className="btn-outline-green px-7 py-3.5 text-base w-full sm:w-auto justify-center">
                Transfer Prescription
              </Link>
              <a href="tel:#" className="btn-blue px-7 py-3.5 text-base w-full sm:w-auto justify-center">
                <PhoneIcon className="w-5 h-5" />
                Call Pharmacy
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-kp-text-muted">
              {["Independent & Local", "Same-Day Service", "Free Consultations"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckIcon className="w-4 h-4 text-kp-green flex-shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Image placeholder — desktop only ── */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="relative">
              <div className="bg-kp-green-pale rounded-2xl border border-kp-border-light overflow-hidden aspect-[3/4] flex flex-col items-center justify-center p-8 text-center">
                <svg className="w-24 h-24 text-kp-green/20 mb-4" fill="none" viewBox="0 0 80 80" stroke="currentColor" strokeWidth={1.2} aria-hidden="true">
                  <rect x="8"  y="20" width="64" height="50" rx="4" />
                  <rect x="28" y="8"  width="24" height="16" rx="2" />
                  <line x1="40" y1="32" x2="40" y2="56" />
                  <line x1="28" y1="44" x2="52" y2="44" />
                </svg>
                <p className="text-kp-text-muted text-sm font-medium">Photo: Pharmacist at counter</p>
                <p className="text-kp-text-light text-xs mt-1">Replace with real pharmacy photo</p>
              </div>

              {/* Floating badge — only safe on desktop where it has room */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card border border-kp-border-light p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-kp-green-pale rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-5 h-5 text-kp-green" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-kp-text">Locally Owned</p>
                    <p className="text-xs text-kp-text-muted">Serving our community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
