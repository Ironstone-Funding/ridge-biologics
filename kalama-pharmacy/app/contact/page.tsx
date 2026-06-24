import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Kalama Pharmacy for prescription questions, wellness class information, or general inquiries. We're here to help.",
};

const contactInfo = [
  {
    label: "Phone",
    value: "[INSERT PHONE]",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    href: "tel:#",
  },
  {
    label: "Fax",
    value: "[INSERT FAX]",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "[INSERT EMAIL]",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: "mailto:#",
  },
  {
    label: "Address",
    value: "[INSERT ADDRESS]",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const hours = [
  { day: "Monday – Friday", time: "[INSERT HOURS]" },
  { day: "Saturday",        time: "[INSERT HOURS]"  },
  { day: "Sunday",          time: "Closed"          },
];

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-hero-green py-20 md:py-28">
        <div className="container-xl text-center">
          <p className="section-label mb-3">Get in Touch</p>
          <h1 className="text-display-lg font-bold font-serif text-white mb-5">Contact Us</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            We&apos;re here to answer your questions, assist with prescriptions, and support
            your health. Don&apos;t hesitate to reach out.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left — Contact info + hours */}
            <div>
              <p className="section-label mb-2">Find Us</p>
              <h2 className="section-title">Pharmacy Information</h2>
              <div className="gold-divider" />

              <ul className="space-y-5 mb-10">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-kp-green-pale flex items-center justify-center flex-shrink-0">
                      <div className="text-kp-green">{item.icon}</div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-kp-text-muted mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-kp-text hover:text-kp-green transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-kp-text font-medium">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Hours */}
              <div className="bg-kp-cream rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-kp-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-bold font-serif text-kp-text">Pharmacy Hours</h3>
                </div>
                <ul className="space-y-2">
                  {hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between text-sm">
                      <span className="text-kp-text-muted">{h.day}</span>
                      <span className={`font-medium ${h.time === "Closed" ? "text-red-500" : "text-kp-text"}`}>
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 rounded-2xl bg-kp-green-pale border border-kp-border-light overflow-hidden h-48 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-10 h-10 text-kp-green mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-sm text-kp-text-muted">Map — [INSERT ADDRESS]</p>
                  <a href="#" className="text-xs text-kp-green underline mt-1 inline-block">Get Directions</a>
                </div>
              </div>
            </div>

            {/* Right — Contact form */}
            <div>
              <p className="section-label mb-2">Send a Message</p>
              <h2 className="section-title">We&rsquo;d Love to Hear From You</h2>
              <div className="gold-divider" />
              <p className="text-kp-text-muted mb-6">
                Have a question about a prescription, service, or wellness class? Fill out
                the form below and we&apos;ll get back to you promptly.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick action strip */}
      <section className="bg-kp-cream border-t border-kp-border-light py-12">
        <div className="container-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Refill a Prescription", href: "/refill", icon: "📋" },
              { label: "Transfer a Prescription", href: "/transfer", icon: "🔄" },
              { label: "View Our Services", href: "/services", icon: "💊" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="card-base p-5 flex items-center gap-4 group hover:-translate-y-0.5 transition-transform"
              >
                <span className="text-2xl" role="img" aria-hidden="true">{item.icon}</span>
                <span className="font-semibold text-kp-text group-hover:text-kp-green transition-colors text-sm">
                  {item.label}
                </span>
                <svg className="w-4 h-4 text-kp-text-light group-hover:text-kp-green transition-colors ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
