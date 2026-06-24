import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <div>
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">Your Partners in Health</h2>
            <div className="gold-divider" />
            <p className="text-kp-text-muted leading-relaxed mb-5">
              Kalama Pharmacy is a locally focused community pharmacy dedicated to personal
              service, affordable care, and dependable support for patients and families.
              Our team is here to help with prescriptions, medication questions, wellness
              support, and everyday pharmacy needs.
            </p>
            <p className="text-kp-text-muted leading-relaxed mb-8">
              We believe that great pharmacy care starts with knowing your patients by name,
              understanding their health journeys, and going the extra mile to make sure
              everyone in our community gets the care they deserve. At Kalama Pharmacy,
              you are never just a number.
            </p>

            <div className="grid grid-cols-2 gap-5 mb-8">
              {[
                { stat: "Locally Owned", desc: "Independent community pharmacy" },
                { stat: "Full Service",  desc: "Prescriptions, wellness & more" },
                { stat: "Expert Team",   desc: "Licensed pharmacists on staff"  },
                { stat: "Same Day",      desc: "Prescription filling available" },
              ].map((item) => (
                <div key={item.stat} className="bg-kp-cream rounded-xl p-4">
                  <p className="font-bold font-serif text-kp-green text-lg">{item.stat}</p>
                  <p className="text-xs text-kp-text-muted mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="btn-green">
                Meet Our Team
              </Link>
              <Link href="/contact" className="btn-outline-green">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-kp-green-pale rounded-3xl p-10 flex items-center justify-center min-h-[420px]">
              {/* Decorative pharmacy illustration */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-kp-green/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-16 h-16 text-kp-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold font-serif text-kp-green mb-2">
                  Community Focused
                </h3>
                <p className="text-sm text-kp-text-muted max-w-xs mx-auto">
                  Serving Kalama and surrounding communities with the personal attention
                  that only a local pharmacy can provide.
                </p>

                {/* Values pills */}
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {["Trusted", "Affordable", "Caring", "Local", "Professional"].map((val) => (
                    <span
                      key={val}
                      className="px-3 py-1.5 bg-white rounded-full text-xs font-semibold text-kp-green shadow-sm"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>

              {/* Accent circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-kp-gold/10" aria-hidden="true" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-kp-green/10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
