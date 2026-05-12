"use client";

import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const CONTACT_OPTIONS = [
  { icon: "👨‍⚕️", title: "Provider Inquiry", body: "Interested in becoming a Ridge provider partner? Schedule an initial consultation.", href: "#form" },
  { icon: "🤝", title: "Representative Inquiry", body: "Exploring a field representative role or territory opportunity with Ridge.", href: "#form" },
  { icon: "🏭", title: "Manufacturer Inquiry", body: "A biologics manufacturer interested in Ridge's distribution network.", href: "#form" },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="section-py bg-rb-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <SectionLabel light>Contact</SectionLabel>
              <h1 className="text-display-xl font-bold text-white mb-6">
                Let's Start the<br />Conversation
              </h1>
              <p className="text-white/60 text-xl leading-relaxed">
                Whether you're a provider, a prospective representative, or a manufacturer —
                Ridge welcomes the inquiry.
              </p>
            </SlideIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                {CONTACT_OPTIONS.map((opt) => (
                  <div key={opt.title} className="flex gap-4 p-6 rounded-2xl bg-white/6 border border-white/10 hover:border-rb-teal/40 transition-colors">
                    <span className="text-2xl flex-shrink-0">{opt.icon}</span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{opt.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{opt.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-py bg-rb-slate" id="form">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <SlideIn direction="left">
              <SectionLabel>Send a Message</SectionLabel>
              <h2 className="text-display-md font-bold text-rb-navy mb-4">
                Reach Out to Ridge
              </h2>
              <p className="text-rb-text-body mb-8">
                A member of our team will respond within two business days.
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {["First Name", "Last Name"].map((label) => (
                    <div key={label}>
                      <label className="block text-xs font-semibold text-rb-text-body uppercase tracking-widest mb-2">{label}</label>
                      <input type="text" placeholder={label}
                        className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-navy placeholder-rb-text-muted focus:outline-none focus:border-rb-teal transition-colors text-sm" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-rb-text-body uppercase tracking-widest mb-2">Email</label>
                  <input type="email" placeholder="you@practice.com"
                    className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-navy placeholder-rb-text-muted focus:outline-none focus:border-rb-teal transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-rb-text-body uppercase tracking-widest mb-2">Practice / Organization</label>
                  <input type="text" placeholder="Practice name"
                    className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-navy placeholder-rb-text-muted focus:outline-none focus:border-rb-teal transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-rb-text-body uppercase tracking-widest mb-2">Inquiry Type</label>
                  <select className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-text-body focus:outline-none focus:border-rb-teal transition-colors text-sm">
                    <option value="">Select inquiry type</option>
                    <option>Provider Partnership</option>
                    <option>Representative Opportunity</option>
                    <option>Manufacturer Inquiry</option>
                    <option>Compliance Question</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-rb-text-body uppercase tracking-widest mb-2">Message</label>
                  <textarea rows={5} placeholder="Tell us about your practice and what you're looking for..."
                    className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-navy placeholder-rb-text-muted focus:outline-none focus:border-rb-teal transition-colors text-sm resize-none" />
                </div>
                <Button variant="primary" size="lg" type="submit" fullWidth>
                  Send Message
                </Button>
                <p className="text-xs text-rb-text-muted leading-relaxed">
                  By submitting this form you agree to be contacted by Ridge Biologics. We do not share
                  your information with third parties. Ridge does not make clinical efficacy claims.
                </p>
              </form>
            </SlideIn>

            <FadeIn delay={0.2}>
              <div className="lg:pt-16">
                <div className="bg-white rounded-3xl border border-rb-slate-mid p-8 lg:p-10 mb-6">
                  <div className="flex justify-start mb-6">
                    <Image src="/images/logo.png" alt="Ridge Biologics" width={160} height={50} className="h-9 w-auto" />
                  </div>
                  <p className="text-rb-text-body text-sm leading-relaxed mb-5">
                    Ridge Biologics is a compliance-first regenerative biologics distribution and
                    provider-support company. We do not make clinical efficacy claims and all
                    information provided is for educational and operational purposes only.
                  </p>
                  <a href={`mailto:${COMPANY.email}`} className="text-rb-teal hover:text-rb-teal-dark transition-colors text-sm font-medium">
                    {COMPANY.email}
                  </a>
                </div>

                <div className="bg-rb-teal-pale rounded-3xl border border-rb-teal/20 p-8">
                  <h3 className="font-semibold text-rb-navy mb-4">Before You Reach Out</h3>
                  <ul className="space-y-3">
                    {[
                      "Ridge works with licensed healthcare providers only.",
                      "All providers complete a compliance orientation before onboarding.",
                      "Ridge does not guarantee clinical outcomes or product efficacy.",
                      "Partnership decisions are made at Ridge's discretion.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-rb-text-body text-sm leading-relaxed">
                        <svg className="w-4 h-4 text-rb-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
