"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const CATALOG = [
  {
    id: "skin-temp-ii",
    name: "Skin Temp II",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Refrigerated 2–8°C",
    description:
      "A split-thickness skin allograft designed for complex wound management. Provides a natural scaffold for wound closure with full documentation and chain-of-custody included.",
    comingSoon: false,
  },
  {
    id: "medifil-ii",
    name: "Medifil II",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Refrigerated 2–8°C",
    description:
      "Collagen-based wound filler available in particle and gel forms. Promotes a moist wound environment to support the body's natural healing cascade across a range of wound types.",
    comingSoon: false,
  },
  {
    id: "collatek-gel",
    name: "Collatek Gel",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Refrigerated 2–8°C",
    description:
      "Injectable collagen gel formulation for soft tissue support and wound bed preparation. Delivered ready-to-use with GMP-certified sourcing and full traceability documentation.",
    comingSoon: false,
  },
  {
    id: "collecule-powder",
    name: "ColleCule LpH Surgical Collagen Powder",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Ambient / Room Temp",
    description:
      "Lyophilized collagen powder engineered for surgical applications requiring precise hemostasis and tissue support. Sterile, resorbable, and compliant with 21 CFR Part 1271.",
    comingSoon: false,
  },
  {
    id: "collecule-pad",
    name: "ColleCule LpH Pad",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Ambient / Room Temp",
    description:
      "Collagen pad format for broad wound coverage and surgical wound management. Flexible, conformable, and designed to integrate seamlessly into existing wound care protocols.",
    comingSoon: false,
  },
  {
    id: "emcyte-prp",
    name: "EmCyte PRP Kits",
    category: "PRP",
    categoryColor: "#c0392b",
    classification: "FDA-Cleared Device Kit",
    storage: "Ambient / Room Temp",
    description:
      "Professional-grade PRP preparation system by EmCyte Corporation. Enables in-office production of high-concentration autologous PRP with a consistent, reproducible protocol.",
    comingSoon: false,
  },
  {
    id: "centerfuge-mscs",
    name: "Centerfuge MSCs",
    category: "Stem Cells",
    categoryColor: "#5a4fcf",
    classification: "Section 351 Biologic",
    storage: "Cryogenic −196°C",
    description:
      "Cryogenically stored mesenchymal stem cells from GMP-certified, FDA-registered manufacturers. Shipped with full chain-of-custody documentation. For licensed providers only.",
    comingSoon: true,
  },
];

const CATEGORIES = ["All", "Collagen", "PRP", "Stem Cells"];

const StorageIcon = ({ storage }: { storage: string }) => {
  if (storage.includes("Cryogenic")) {
    return (
      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <line x1="12" y1="2" x2="12" y2="22" strokeLinecap="round" />
        <line x1="2" y1="12" x2="22" y2="12" strokeLinecap="round" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" strokeLinecap="round" />
        <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  }
  if (storage.includes("Refrigerated")) {
    return (
      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
      </svg>
    );
  }
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16V8z" />
    </svg>
  );
};

const ProductIcon = ({ category }: { category: string }) => {
  if (category === "Collagen") {
    return (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.1} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6M10 3v7l-4 8a1 1 0 00.9 1.5h10.2a1 1 0 00.9-1.5L14 10V3" />
        <path d="M10 15h4" />
      </svg>
    );
  }
  if (category === "PRP") {
    return (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.1} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 5 10.5 5 15a7 7 0 0014 0c0-4.5-7-13-7-13z" />
        <path d="M9 17a3 3 0 006 0" />
      </svg>
    );
  }
  return (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.1} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M12 3v4M9.5 7h5a1 1 0 011 1v1a5 5 0 01-5 5 5 5 0 01-5-5V8a1 1 0 011-1h.5" />
      <path d="M7.5 13.5A6.5 6.5 0 0012 20a6.5 6.5 0 004.5-6.5" />
      <path d="M9 20h6M12 20v1" />
    </svg>
  );
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? CATALOG
    : CATALOG.filter((p) => p.category === activeCategory);

  const counts: Record<string, number> = { All: CATALOG.length };
  CATEGORIES.slice(1).forEach((cat) => {
    counts[cat] = CATALOG.filter((p) => p.category === cat).length;
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
              FDA-Regulated Biologics for Licensed Providers
            </h1>
            <p className="text-white/75 text-xl leading-relaxed max-w-2xl">
              Every product Ridge distributes is sourced from GMP-compliant, FDA-registered
              manufacturers — shipped direct to your practice with full compliance documentation.
            </p>
          </SlideIn>
        </div>
      </section>

      {/* Catalog */}
      <section className="section-py bg-rb-slate">
        <div className="container-xl">

          {/* Filter tabs */}
          <FadeIn className="mb-10">
            <div className="flex flex-wrap gap-2">
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
            <p className="text-rb-text-muted text-sm mt-4">
              Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </p>
          </FadeIn>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.06}>
                <div className={`group relative flex flex-col bg-white rounded-2xl border transition-all duration-300 overflow-hidden h-full ${
                  product.comingSoon
                    ? "border-rb-slate-mid opacity-80"
                    : "border-rb-slate-mid hover:border-rb-teal/40 hover:shadow-card-hover"
                }`}>

                  {/* Coming Soon badge */}
                  {product.comingSoon && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-rb-navy text-white">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Icon area */}
                  <div className="flex items-center justify-center h-40 bg-rb-slate border-b border-rb-slate-mid">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundColor: `${product.categoryColor}15`, color: product.categoryColor }}
                    >
                      <ProductIcon category={product.category} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Category tag */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: product.categoryColor }}
                      />
                      <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: product.categoryColor }}>
                        {product.category}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="font-semibold text-rb-navy text-[1.05rem] leading-snug mb-3 group-hover:text-rb-teal transition-colors duration-300">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-rb-text-body text-sm leading-relaxed flex-1 mb-5">
                      {product.description}
                    </p>

                    {/* Meta */}
                    <div className="space-y-1.5 mb-5 pt-4 border-t border-rb-slate">
                      <div className="flex items-center gap-2 text-xs text-rb-text-muted">
                        <svg className="w-3.5 h-3.5 flex-shrink-0 text-rb-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                        <span>{product.classification}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-rb-text-muted">
                        <StorageIcon storage={product.storage} />
                        <span>{product.storage}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    {product.comingSoon ? (
                      <span className="text-sm text-rb-text-muted font-medium">Available soon — contact us to learn more</span>
                    ) : (
                      <Link
                        href="/services#request"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-rb-teal hover:text-rb-teal-dark transition-colors group/link"
                      >
                        Request This Product
                        <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
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
              Ridge serves licensed healthcare providers in Utah and Florida.
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
            Ridge Biologics provides FDA-registered human cellular and tissue-based products (HCT/Ps),
            including Section 361 minimally manipulated, homologous-use allografts regulated under
            21 CFR Part 1271, as well as Section 351 advanced biologic products and FDA-cleared device kits.
            We do not make claims for the treatment, cure, or prevention of any disease. All products
            are intended for use by qualified healthcare professionals in accordance with applicable
            regulations and labeling.
          </p>
        </div>
      </section>
    </div>
  );
}
