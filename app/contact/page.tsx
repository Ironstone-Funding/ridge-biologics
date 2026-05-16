"use client";

import Image from "next/image";
import { COMPANY, EXTERNAL_RESOURCES } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const CONTACT_OPTIONS = [
  { icon: "stethoscope", title: "Provider Inquiry", body: "Licensed healthcare provider interested in our biologics products in Utah or Florida." },
  { icon: "handshake",   title: "Representative Opportunity", body: "Qualified 1099 sales rep interested in representing Ridge Biologics in Utah or Florida." },
  { icon: "building",    title: "General Inquiry", body: "Any other question about Ridge Biologics, our products, or compliance." },
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
              <p className="text-white/75 text-xl leading-relaxed">
                Whether you're a provider, a prospective representative, or have a general question
                — Ridge welcomes the inquiry.
              </p>
            </SlideIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                {CONTACT_OPTIONS.map((opt) => (
                  <div key={opt.title} className="flex gap-4 p-6 rounded-2xl bg-white/6 border border-white/10 hover:border-rb-teal/40 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-rb-teal/20 flex items-center justify-center text-rb-teal-light flex-shrink-0">
                      <Icon name={opt.icon} className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{opt.title}</h3>
                      <p className="text-white/65 text-sm leading-relaxed">{opt.body}</p>
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
                A member of our team will respond within one business day.
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {["First Name", "Last Name"].map((label) => (
                    <div key={label}>
                      <label className="block text-xs font-semibold text-rb-navy uppercase tracking-widest mb-2">{label}</label>
                      <input type="text" placeholder={label}
                        className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-navy placeholder-rb-text-muted focus:outline-none focus:border-rb-teal transition-colors text-sm" />
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-rb-navy uppercase tracking-widest mb-2">Email</label>
                    <input type="email" placeholder="you@practice.com"
                      className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-navy placeholder-rb-text-muted focus:outline-none focus:border-rb-teal transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-rb-navy uppercase tracking-widest mb-2">Phone</label>
                    <input type="tel" placeholder="(801) 555-0000"
                      className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-navy placeholder-rb-text-muted focus:outline-none focus:border-rb-teal transition-colors text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-rb-navy uppercase tracking-widest mb-2">Name / Organization</label>
                  <input type="text" placeholder="Your name or practice name"
                    className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-navy placeholder-rb-text-muted focus:outline-none focus:border-rb-teal transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-rb-navy uppercase tracking-widest mb-2">Message</label>
                  <textarea rows={5} placeholder="Tell us how we can help..."
                    className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-navy placeholder-rb-text-muted focus:outline-none focus:border-rb-teal transition-colors text-sm resize-none" />
                </div>
                <Button variant="primary" size="lg" type="submit" fullWidth>
                  Send Message
                </Button>
                <p className="text-xs text-rb-text-body leading-relaxed">
                  By submitting this form, you agree to be contacted by Ridge Biologics regarding your inquiry and consent to our{" "}
                  <a href="/terms" className="text-rb-teal hover:underline">Terms of Service</a> and{" "}
                  <a href="/privacy" className="text-rb-teal hover:underline">Privacy Policy</a>. Your information will be stored securely and used only for responding to your request. We do not sell or share your information with unaffiliated third parties.{" "}
                  <strong>Do not include patient information or protected health information (PHI) in this form.</strong>{" "}
                  You may opt out of future communications at any time by contacting us at{" "}
                  <a href="mailto:info@ridgebiologics.com" className="text-rb-teal hover:underline">info@ridgebiologics.com</a>.
                </p>
              </form>
            </SlideIn>

            <FadeIn delay={0.2}>
              <div className="lg:pt-16 space-y-6">
                <div className="bg-white rounded-3xl border border-rb-slate-mid p-8 lg:p-10">
                  <div className="flex justify-start mb-6">
                    <Image src="/images/logo.png" alt="Ridge Biologics" width={160} height={50} className="h-9 w-auto" />
                  </div>
                  <p className="text-rb-text-body text-sm leading-relaxed mb-5">
                    Ridge Biologics is a Utah-licensed Class C Virtual Wholesale Distributor of
                    regenerative medicine products. We supply licensed healthcare providers in Utah
                    and Florida with compliant biologics through an ethical, fully documented drop-ship model.
                  </p>
                  <div className="space-y-2">
                    <a href={`mailto:${COMPANY.email}`} className="text-rb-teal hover:text-rb-teal-dark transition-colors text-sm font-medium block">
                      {COMPANY.email}
                    </a>
                    <a href={`tel:+${COMPANY.phoneTel}`} className="text-rb-teal hover:text-rb-teal-dark transition-colors text-sm font-medium block">
                      {COMPANY.phone}
                    </a>
                    <address className="not-italic text-rb-text-body text-sm leading-relaxed pt-1">
                      {COMPANY.address}<br />
                      {COMPANY.city}
                    </address>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-rb-slate-mid p-8">
                  <h3 className="font-semibold text-rb-navy mb-4">External Resources</h3>
                  <ul className="space-y-3">
                    {EXTERNAL_RESOURCES.map((r) => (
                      <li key={r.href}>
                        <a href={r.href} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 text-rb-teal hover:text-rb-teal-dark transition-colors text-sm">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {r.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-rb-teal-pale rounded-3xl border border-rb-teal/20 p-8">
                  <h3 className="font-semibold text-rb-navy mb-4">Before You Reach Out</h3>
                  <ul className="space-y-3">
                    {[
                      "Ridge works with licensed healthcare providers only.",
                      "We currently serve providers in Utah and Florida, with nationwide expansion in progress.",
                      "All providers complete a compliance orientation before onboarding.",
                      "Ridge does not guarantee clinical outcomes or product efficacy.",
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
