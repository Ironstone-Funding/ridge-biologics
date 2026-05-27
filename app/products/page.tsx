"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/products";

const CATEGORIES = ["All", "Collagen", "PRP"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const counts: Record<string, number> = { All: PRODUCTS.length };
  CATEGORIES.slice(1).forEach((cat) => {
    counts[cat] = PRODUCTS.filter((p) => p.category === cat).length;
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-py bg-rb-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-xl relative">
          <SlideIn direction="left">
            <SectionLabel light>Our Product Catalog</SectionLabel>
            <h1 className="text-display-xl font-bold text-white mb-6 max-w-3xl">
              FDA-Cleared Devices for Licensed Practices
            </h1>
            <p className="text-white/75 text-xl leading-relaxed max-w-2xl">
              Every product Ridge distributes is sourced from FDA-registered manufacturers of
              510(k)-cleared Class II devices — shipped direct to your practice with full compliance documentation.
            </p>
          </SlideIn>
        </div>
      </section>

      {/* Catalog */}
      <section className="section-py bg-rb-slate">
        <div className="container-xl">

          {/* Filter tabs */}
          <FadeIn className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-rb-navy text-white shadow-sm"
                      : "bg-white border border-rb-slate-mid text-rb-text-body hover:border-rb-teal/50 hover:text-rb-navy"
                  }`}
                >
                  {cat}
                  <span className={`ml-2 text-xs ${activeCategory === cat ? "opacity-60" : "opacity-40"}`}>
                    {counts[cat]}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-rb-text-muted text-sm">
              Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </p>
          </FadeIn>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.06}>
                <Link
                  href={`/products/${product.id}`}
                  className={`group relative flex flex-col bg-white rounded-2xl border overflow-hidden h-full transition-all duration-300 ${
                    product.comingSoon
                      ? "border-rb-slate-mid cursor-default pointer-events-none opacity-75"
                      : "border-rb-slate-mid hover:border-rb-teal/50 hover:shadow-card-hover"
                  }`}
                >
                  {/* Coming Soon badge */}
                  {product.comingSoon && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-rb-navy text-white">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Name banner — styled product name instead of photo */}
                  <div
                    className="relative flex items-center justify-center h-44 border-b border-rb-slate transition-colors duration-300"
                    style={{ backgroundColor: `${product.categoryColor}08` }}
                  >
                    <div className="px-8 text-center">
                      <p
                        className="font-serif font-light leading-tight transition-colors duration-300"
                        style={{
                          fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)",
                          letterSpacing: "-0.01em",
                          color: product.categoryColor,
                        }}
                      >
                        {product.name}
                      </p>
                      <div
                        className="mt-3 mx-auto h-px w-12 transition-all duration-300 group-hover:w-20"
                        style={{ backgroundColor: `${product.categoryColor}50` }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Category tag */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: product.categoryColor }} />
                      <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: product.categoryColor }}>
                        {product.category}
                      </span>
                    </div>

                    {/* Tagline */}
                    <p className="font-semibold text-rb-navy text-[0.95rem] leading-snug mb-3">
                      {product.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-rb-text-body text-sm leading-relaxed flex-1 mb-5">
                      {product.description}
                    </p>

                    {/* Company */}
                    <p className="text-[11px] text-rb-text-muted mb-4">
                      <span className="font-semibold text-rb-navy">Manufacturer: </span>
                      {product.company}
                    </p>

                    {/* View Product CTA */}
                    {product.comingSoon ? (
                      <span className="text-sm text-rb-text-muted font-medium">Available soon</span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-rb-teal group-hover:text-rb-teal-dark transition-colors">
                        View Product
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    )}
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-py-sm bg-rb-teal-pale">
        <div className="container-lg text-center">
          <FadeIn>
            <h2 className="text-display-md font-bold text-rb-navy mb-5">
              Ready to Add These to Your Practice?
            </h2>
            <p className="text-rb-text-body text-lg mb-8 max-w-xl mx-auto">
              Ridge currently serves licensed healthcare providers in Utah and Florida, with expansion to additional states in progress.
              Submit a product request and we'll follow up within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/services#request">
                Submit a Product Request
              </Button>
              <Button variant="outline" href="/contact">
                Contact Our Team
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white border-t border-rb-slate">
        <div className="container-xl">
          <p className="text-xs text-rb-text-muted leading-relaxed max-w-4xl">
            Ridge Biologics distributes FDA-cleared Class II medical devices, including bovine collagen wound dressings and point-of-care platelet concentration systems.
            Ridge does not make claims for the treatment, cure, or prevention of any disease. All products are intended for use by
            qualified healthcare professionals in accordance with applicable device labeling and cleared indications only.
          </p>
        </div>
      </section>
    </div>
  );
}
