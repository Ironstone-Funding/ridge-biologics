"use client";

import Image from "next/image";
import Link from "next/link";
import { RIDGE_DIFFERENCE, SERVICES } from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function ServicesPage() {
  const collagen  = PRODUCTS.filter((p) => p.category === "Collagen");
  const prp       = PRODUCTS.filter((p) => p.category === "PRP");
  const stemCells = PRODUCTS.filter((p) => p.category === "Stem Cells");

  return (
    <div className="pt-20">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="section-py bg-rb-navy relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-[700px] h-[700px] bg-rb-teal/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rb-teal/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-xl relative">
          <SlideIn direction="left">
            <SectionLabel light>Products &amp; Services</SectionLabel>
            <h1
              className="font-serif font-light text-white mb-6 max-w-3xl leading-[1.05]"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)", letterSpacing: "-0.02em" }}
            >
              Compliant Biologics,<br />Delivered to Your Practice
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mb-10">
              Ridge Biologics is a Utah-licensed Class C Virtual Wholesale Distributor —
              supplying licensed healthcare providers in Utah and Florida with FDA-regulated
              regenerative products through a fully compliant drop-ship model.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="#request">Submit a Product Request</Button>
              <Button variant="white" size="lg" href="/products">Browse Full Catalog</Button>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ── Product Showcase ─────────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <FadeIn className="mb-16">
            <SectionLabel>What We Distribute</SectionLabel>
            <h2 className="text-display-md font-bold text-rb-navy max-w-2xl">
              FDA-Regulated Products for Every Stage of Care
            </h2>
          </FadeIn>

          {/* Product lineup hero image */}
          <FadeIn className="mb-14">
            <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/images/services-product-lineup.png"
                alt="Ridge Biologics product lineup"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </FadeIn>

          {/* — Collagen — */}
          <div className="mb-20">
            <FadeIn>
              <div className="flex items-center gap-4 mb-10">
                <span className="h-5 w-px" style={{ backgroundColor: "#38747e" }} />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#38747e" }}>
                  Collagen
                </span>
                <div className="flex-1 h-px bg-rb-slate" />
                <Link
                  href="/products"
                  className="text-xs font-medium text-rb-text-muted hover:text-rb-teal transition-colors"
                >
                  View all →
                </Link>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collagen.map((product, i) => (
                <FadeIn key={product.id} delay={i * 0.07}>
                  <Link
                    href={`/products/${product.id}`}
                    className="group flex flex-col rounded-2xl border border-rb-slate-mid hover:border-[#38747e]/50 hover:shadow-card-hover transition-all duration-300 overflow-hidden bg-white h-full"
                  >
                    <div className="h-0.5" style={{ backgroundColor: "#38747e" }} />
                    {product.image && (
                      <div className="relative h-44 bg-rb-slate flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-8"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="flex flex-col flex-1 p-6">
                      <p className="font-semibold text-rb-navy text-[0.95rem] leading-snug mb-2 group-hover:text-[#38747e] transition-colors">
                        {product.name}
                      </p>
                      <p className="text-rb-text-body text-sm leading-relaxed flex-1 mb-5">
                        {product.tagline}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-rb-teal group-hover:gap-3 transition-all duration-200">
                        View Details
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* — PRP — */}
          <div className="mb-20">
            <FadeIn>
              <div className="flex items-center gap-4 mb-10">
                <span className="h-5 w-px" style={{ backgroundColor: "#1a6b8a" }} />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#1a6b8a" }}>
                  PRP Systems
                </span>
                <div className="flex-1 h-px bg-rb-slate" />
              </div>
            </FadeIn>
            {prp.map((product) => (
              <FadeIn key={product.id}>
                <Link
                  href={`/products/${product.id}`}
                  className="group flex flex-col sm:flex-row rounded-2xl border border-rb-slate-mid hover:border-[#1a6b8a]/50 hover:shadow-card-hover transition-all duration-300 overflow-hidden bg-white"
                >
                  <div className="h-0.5 sm:h-auto sm:w-1 flex-shrink-0" style={{ backgroundColor: "#1a6b8a" }} />
                  {product.image && (
                    <div className="relative h-56 sm:h-auto sm:w-64 bg-rb-slate flex-shrink-0 border-b sm:border-b-0 sm:border-r border-rb-slate">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-10"
                        sizes="256px"
                      />
                    </div>
                  )}
                  <div className="flex flex-col justify-center p-8 lg:p-10">
                    <p className="text-[11px] font-semibold tracking-widest uppercase mb-2" style={{ color: "#1a6b8a" }}>
                      {product.category}
                    </p>
                    <h3 className="font-bold text-rb-navy text-xl mb-3 group-hover:text-[#1a6b8a] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-rb-text-body text-sm leading-relaxed mb-6 max-w-xl">
                      {product.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.slice(0, 3).map((f) => (
                        <span key={f} className="inline-flex items-center gap-1.5 text-xs text-rb-text-body bg-rb-slate px-3 py-1.5 rounded-lg">
                          <svg className="w-3 h-3 text-rb-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-rb-teal group-hover:gap-3 transition-all duration-200">
                      View Full Details
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* — Stem Cells — */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-10">
                <span className="h-5 w-px" style={{ backgroundColor: "#5a4fcf" }} />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#5a4fcf" }}>
                  Stem Cells
                </span>
                <div className="flex-1 h-px bg-rb-slate" />
              </div>
            </FadeIn>
            {stemCells.map((product) => (
              <FadeIn key={product.id}>
                <div
                  className="relative flex flex-col sm:flex-row items-start gap-8 p-8 lg:p-10 rounded-2xl border border-[#5a4fcf]/20 overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #ffffff 60%, rgba(90,79,207,0.04) 100%)" }}
                >
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-rb-navy text-white">
                      Coming Soon
                    </span>
                  </div>
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(90,79,207,0.08)" }}
                  >
                    <svg className="w-10 h-10" style={{ color: "rgba(90,79,207,0.4)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <div className="pr-24">
                    <p className="text-[11px] font-semibold tracking-widest uppercase mb-2" style={{ color: "#5a4fcf" }}>
                      {product.category}
                    </p>
                    <h3 className="font-bold text-rb-navy text-xl mb-3">{product.name}</h3>
                    <p className="text-rb-text-body text-sm leading-relaxed max-w-2xl mb-6">
                      {product.description}
                    </p>
                    <Button variant="ghost" href="/contact" size="sm">Contact Us for Availability</Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Ridge Difference ─────────────────────────────────────── */}
      <section className="section-py bg-rb-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-xl relative">
          <FadeIn className="mb-14">
            <SectionLabel light>The Ridge Difference</SectionLabel>
            <h2
              className="font-serif font-light text-white max-w-2xl leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              What sets Ridge apart isn&rsquo;t just what we sell — it&rsquo;s how we operate.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-5">
            {RIDGE_DIFFERENCE.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="flex gap-5 p-7 rounded-2xl border border-white/10 hover:border-rb-teal/30 hover:bg-white/5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-rb-teal/15 flex items-center justify-center text-rb-teal-light flex-shrink-0 mt-0.5">
                    <Icon name={item.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practice Support Services ────────────────────────────────── */}
      <section className="section-py bg-rb-slate">
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
                  <div className="w-11 h-11 rounded-xl bg-rb-teal-pale flex items-center justify-center text-rb-teal flex-shrink-0">
                    <Icon name={svc.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-rb-navy mb-2 group-hover:text-rb-teal transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-rb-text-body text-sm leading-relaxed">{svc.description}</p>
                  </div>
                  {/* Partnership meeting image */}
                  {svc.id === "partnership" && (
                    <div className="mt-2 rounded-xl overflow-hidden bg-rb-slate p-2">
                      <Image
                        src="/images/services-partnership.png"
                        alt="Ridge Biologics clinic partnership meeting"
                        width={800}
                        height={533}
                        className="w-full h-auto rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  {/* Training classroom image */}
                  {svc.id === "education" && (
                    <div className="mt-2 rounded-xl overflow-hidden bg-rb-slate p-2">
                      <Image
                        src="/images/services-training-classroom.png"
                        alt="Ridge Biologics compliance orientation training"
                        width={800}
                        height={533}
                        className="w-full h-auto rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Request Form ─────────────────────────────────────────────── */}
      <section className="section-py bg-white" id="request">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <SlideIn direction="left">
              <SectionLabel>Request an Order</SectionLabel>
              <h2 className="text-display-md font-bold text-rb-navy mb-4">
                Get Started with Ridge
              </h2>
              <p className="text-rb-text-body mb-8">
                Complete the form and a Ridge representative will follow up within one business day.
                Ridge Biologics serves licensed healthcare providers in Utah and Florida only.
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
                <div>
                  <label className="block text-xs font-semibold text-rb-navy uppercase tracking-widest mb-2">Practice / Clinic Name</label>
                  <input type="text" placeholder="Practice name"
                    className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-navy placeholder-rb-text-muted focus:outline-none focus:border-rb-teal transition-colors text-sm" />
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
                  <label className="block text-xs font-semibold text-rb-navy uppercase tracking-widest mb-2">State</label>
                  <select className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-navy focus:outline-none focus:border-rb-teal transition-colors text-sm">
                    <option value="">Select your state</option>
                    <option value="ut">Utah</option>
                    <option value="fl">Florida</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-rb-navy uppercase tracking-widest mb-3">Products of Interest</label>
                  <div className="space-y-2.5 p-5 rounded-xl bg-rb-slate border border-rb-slate-mid">
                    {PRODUCTS.filter((p) => !p.comingSoon).map((p) => (
                      <label key={p.id} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox"
                          className="w-4 h-4 rounded border-rb-slate-mid text-rb-teal focus:ring-rb-teal" />
                        <span className="text-sm text-rb-text-body group-hover:text-rb-navy transition-colors">
                          {p.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-rb-navy uppercase tracking-widest mb-2">Additional Notes or Questions</label>
                  <textarea rows={4} placeholder="Tell us about your practice and what you're looking for..."
                    className="w-full bg-white border border-rb-slate-mid rounded-xl px-4 py-3 text-rb-navy placeholder-rb-text-muted focus:outline-none focus:border-rb-teal transition-colors text-sm resize-none" />
                </div>
                <Button variant="primary" size="lg" type="submit" fullWidth>
                  Submit Request
                </Button>
                <p className="text-xs text-rb-text-body leading-relaxed">
                  By submitting this form you agree to be contacted by Ridge Biologics.
                  We do not share your information with third parties.
                  Ridge does not make clinical efficacy claims.
                </p>
              </form>
            </SlideIn>

            <FadeIn delay={0.2}>
              <div className="lg:pt-16 space-y-6">
                <div className="bg-rb-slate rounded-3xl border border-rb-slate-mid p-8">
                  <h3 className="font-semibold text-rb-navy mb-4">Before You Reach Out</h3>
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
                <div className="rounded-3xl border border-rb-teal/20 p-8" style={{ backgroundColor: "#e8f2f4" }}>
                  <h3 className="font-semibold text-rb-navy mb-4">Clinic Types We Serve</h3>
                  <ul className="space-y-2">
                    {[
                      "Wound Care",
                      "Orthopedics",
                      "Podiatry",
                      "Pain Management",
                      "Functional Medicine",
                      "Mobile Healthcare Practices",
                    ].map((t) => (
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
