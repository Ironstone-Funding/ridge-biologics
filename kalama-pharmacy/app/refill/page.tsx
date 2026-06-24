import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refill a Prescription",
  description: "Refill your prescription at Kalama Pharmacy quickly and conveniently.",
};

export default function RefillPage() {
  return (
    <>
      <section className="bg-hero-green py-20 md:py-28">
        <div className="container-xl text-center">
          <p className="section-label mb-3">Quick & Easy</p>
          <h1 className="text-display-lg font-bold font-serif text-white mb-5">
            Refill a Prescription
          </h1>
          <p className="text-lg text-white/75 max-w-xl mx-auto">
            Refilling your prescription at Kalama Pharmacy is simple. Choose your preferred method below.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "📞",
                title: "Call Us",
                desc: "Call our pharmacy directly and a team member will process your refill.",
                action: "[INSERT PHONE]",
                href: "tel:#",
              },
              {
                icon: "💻",
                title: "Online Portal",
                desc: "Log in to your patient portal to request a refill anytime, 24/7.",
                action: "Patient Portal →",
                href: "#",
              },
              {
                icon: "🚶",
                title: "In Person",
                desc: "Stop by the pharmacy and we'll take care of your refill right away.",
                action: "Get Directions",
                href: "/contact",
              },
            ].map((opt) => (
              <div key={opt.title} className="card-base p-7 text-center">
                <span className="text-4xl" role="img" aria-hidden="true">{opt.icon}</span>
                <h3 className="font-bold font-serif text-kp-text mt-4 mb-2">{opt.title}</h3>
                <p className="text-sm text-kp-text-muted mb-4">{opt.desc}</p>
                <a href={opt.href} className="btn-green text-sm py-2.5 px-4 w-full justify-center">
                  {opt.action}
                </a>
              </div>
            ))}
          </div>

          <div className="bg-kp-cream rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold font-serif text-kp-text mb-2">
              Questions about your refill?
            </h2>
            <p className="text-kp-text-muted mb-5">
              Our pharmacists are happy to help. Reach out and we&apos;ll take care of you.
            </p>
            <Link href="/contact" className="btn-outline-green">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
