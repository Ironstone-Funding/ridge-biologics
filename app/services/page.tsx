"use client";

import { PRODUCTS, RIDGE_DIFFERENCE, SERVICES } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const DIFF_ICONS: Record<string, string> = {
  shield: "✓",
  snowflake: "✓",
  badge: "✓",
  users: "✓",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-py bg-rb-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-xl relative">
          <SlideIn direction="left">
            <SectionLabel light>Our Products & Services</SectionLabel>
            <h1 className="text-display-xl font-bold text-white mb-6 max-w-3xl">
              Compliant Biologics Distributed
              <br />Directly to Licensed Providers
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Ridge Biologics is a Utah-licensed Class C Virtual Wholesale Distributor of
              regenerative medicine products — supplying licensed healthcare providers in Utah
              and Florida through an ethical, fully compliant drop-ship model.
            </p>
          </SlideIn>
        </div>
      </section>

      {/* Products */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <FadeIn className="mb-14">
            <SectionLabel>Our Product Lines</SectionLabel>
            <h2 className="text-display-md font-bold text-rb-navy">
              FDA-Regulated Regenerative Biologics
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {PRODUCTS.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.08}>
                <div className="grid md:grid-cols-3 gap-8 p-8 lg:p-10 rounded-3xl border border-rb-slate-mid hover:border-rb-teal/40 hover:shadow-card-hover transition-all duration-300 bg-white">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-rb-teal-pale flex items-center justify-center text-2xl flex-shrink-0">
                        {product.icon}
                      </div>
                      <h2 className="text-xl font-bold text-rb-navy">{product.title}</h2>
                    </div>
                    <p className="text-rb-text-body text-[0.95rem] leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>
                  <div className="bg-rb-slate rounded-2xl p-6 flex flex-col gap-4 justify-center">
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-rb-teal mb-1">Classification</p>
                      <p className="text-rb-navy font-semibold text-sm">{product.classification}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-rb-teal mb-1">Storage</p>
                      <p className="text-rb-navy font-semibold text-sm">{product.storageIcon} {product.storage}</p>
                    </div>
                    <p className="text-xs text-rb-text-muted leading-relaxed">
                      For licensed providers only.
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Ridge Difference */}
      <section className="section-py bg-rb-slate">
        <div className="container-xl">
          <FadeIn className="mb-14">
            <SectionLabel>The Ridge Difference</SectionLabel>
            <h2 className="text-display-md font-bold text-rb-navy">
              What sets Ridge apart isn't just what we sell — it's how we operate.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-5">
            {RIDGE_DIFFERENCE.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="flex gap-4 p-7 rounded-2xl border border-rb-slate-mid hover:border-rb-teal/40 hover:shadow-card transition-all duration-300 bg-white">
                  <div className="flex-shrink-0 text-rb-teal mt-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-rb-navy mb-2">{item.title}</h3>
                    <p className="text-rb-text-body text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <FadeIn className="mb-14">
            <SectionLabel>How We Support Your Practice</SectionLabel>
            <h2 className="text-display-md font-bold text-rb-navy">
              Full-Spectrum Practice Support
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((svc, i) => (
              <FadeIn key={svc.id} delay={i * 0.07}>
                <div className="group flex flex-col gap-4 p-7 rounded-2xl border border-rb-slate-mid hover:border-rb-teal/40 hover:shadow-card transition-all duration-300 bg-white h-full">
                  <div className="w-12 h-12 rounded-xl bg-rb-teal-pale flex items-center justify-center text-2xl flex-shrink-0">
                    {svc.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-rb-navy mb-2 group-hover:text-rb-teal transition-colors">{svc.title}</h3>
                    <p className="text-rb-text-body text-sm leading-relaxed">{svc.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Order Request Form */}
      <section className="section-py bg-rb-slate" id="request">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <SlideIn direction="left">
              <SectionLabel>Request an Order</SectionLabel>
              <h2 className="text-display-md font-bold text-rb-navy mb-4">
                Get Started with Ridge
              </h2>
              <p className="text-rb-text-body mb-8">
                Complete the form below and a Ridge Biologics representative will follow up within one business day.
                Ridge Biologics serves licensed healthcare providers in Utah and Florida only.
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
                  <label className="block text-xs font-semibold text-rb-text-body uppercase tracking-widest mb-2">Practice / Clinic Name</label>
                  <input type="text" placeholder="Practice name"
                    className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-navy placeholder-rb-text-muted focus:outline-none focus:border-rb-teal transition-colors text-sm" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-rb-text-body uppercase tracking-widest mb-2">Email</label>
                    <input type="email" placeholder="you@practice.com"
                      className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-navy placeholder-rb-text-muted focus:outline-none focus:border-rb-teal transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-rb-text-body uppercase tracking-widest mb-2">Phone</label>
                    <input type="tel" placeholder="(801) 555-0000"
                      className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-navy placeholder-rb-text-muted focus:outline-none focus:border-rb-teal transition-colors text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-rb-text-body uppercase tracking-widest mb-2">State</label>
                  <select className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-text-body focus:outline-none focus:border-rb-teal transition-colors text-sm">
                    <option value="">Select your state</option>
                    <option value="ut">Utah</option>
                    <option value="fl">Florida</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-rb-text-body uppercase tracking-widest mb-3">Products of Interest</label>
                  <div className="space-y-3">
                    {PRODUCTS.map((p) => (
                      <label key={p.id} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox"
                          className="w-4 h-4 rounded border-rb-slate-mid text-rb-teal focus:ring-rb-teal" />
                        <span className="text-sm text-rb-text-body group-hover:text-rb-navy transition-colors">
                          {p.title}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-rb-text-body uppercase tracking-widest mb-2">Additional Notes or Questions</label>
                  <textarea rows={4} placeholder="Tell us about your practice and what you're looking for..."
                    className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-navy placeholder-rb-text-muted focus:outline-none focus:border-rb-teal transition-colors text-sm resize-none" />
                </div>
                <Button variant="primary" size="lg" type="submit" fullWidth>
                  Submit Request
                </Button>
                <p className="text-xs text-rb-text-muted leading-relaxed">
                  By submitting this form you agree to be contacted by Ridge Biologics.
                  We do not share your information with third parties.
                  Ridge does not make clinical efficacy claims.
                </p>
              </form>
            </SlideIn>

            <FadeIn delay={0.2}>
              <div className="lg:pt-16 space-y-6">
                <div className="bg-white rounded-3xl border border-rb-slate-mid p-8">
                  <h3 className="font-semibold text-rb-navy mb-3">Before You Reach Out</h3>
                  <ul className="space-y-3">
                    {[
                      "Ridge works with licensed healthcare providers only.",
                      "We currently serve providers in Utah and Florida.",
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
                <div className="bg-rb-teal-pale rounded-3xl border border-rb-teal/20 p-8">
                  <h3 className="font-semibold text-rb-navy mb-3">Clinic Types We Serve</h3>
                  <ul className="space-y-2">
                    {["Wound Care", "Orthopedics", "Podiatry", "Pain Management", "Functional Medicine", "Mobile Healthcare Practices"].map((t) => (
                      <li key={t} className="flex items-center gap-2.5 text-rb-text-body text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-rb-teal flex-shrink-0" />
                        {t}
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
