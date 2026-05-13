"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const CATALOG = [
  {
    id: "skintemp-ii",
    name: "SkinTemp® II",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Refrigerated 2–8°C",
    image: "/images/products/skintemp-ii.png",
    description:
      "A breathable collagen sheet dressing that supports all stages of wound healing with superior stability and fluid control. Manufactured from 100% non-hydrolyzed Type I bovine native collagen for partial and full-thickness wound management.",
    features: ["Breathable sheet format", "All wound healing stages", "Superior fluid control"],
    indications: "Partial & full-thickness wounds, ulcers, burns",
    comingSoon: false,
  },
  {
    id: "medifil-ii",
    name: "Medifil® II",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Refrigerated 2–8°C",
    image: "/images/products/medifil-ii.png",
    description:
      "100% non-hydrolyzed Type I bovine native collagen in particle form. High surface area particles penetrate wounds deeply, delivering maximum collagen concentration and healing support through all four phases of wound healing.",
    features: ["Particle form — deep wound penetration", "Native triple-helical structure", "All four healing phases"],
    indications: "Burns, ulcers, blisters, scrapes, sores",
    comingSoon: false,
  },
  {
    id: "collatek-gel",
    name: "Collatek® Gel",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Refrigerated 2–8°C",
    image: "/images/products/collatek-gel.png",
    description:
      "100% native, non-hydrolyzed Type I bovine collagen in viscous gel form. Maintains optimal moist wound environment and can be combined with Medifil II particles for hard-to-reach wound areas.",
    features: ["Viscous gel format", "Moist wound environment", "Combinable with Medifil II"],
    indications: "Arterial, venous & diabetic ulcers, pressure injuries, donor sites",
    comingSoon: false,
  },
  {
    id: "collecule-powder",
    name: "ColleCule LpH® Surgical Collagen Powder",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Ambient / Room Temp",
    image: "/images/products/collecule-powder.png",
    description:
      "Sterile, non-hydrolyzed Type I bovine collagen powder with a low pH formulation (5.0–5.5). Absorbs up to 30× its weight, reduces protease activity, and promotes fibroblast growth for advanced wound healing.",
    features: ["Absorbs 30× its weight", "Low pH 5.0–5.5 environment", "Reduces protease activity"],
    indications: "Pressure ulcers, venous/diabetic ulcers, burns, surgical wounds",
    sizes: "0.5G · 1G",
    comingSoon: false,
  },
  {
    id: "collecule-pad",
    name: "ColleCule LpH® Pad",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Ambient / Room Temp",
    image: "/images/products/collecule-pad.png",
    description:
      "Low pH collagen pad dressing designed to manage exudate, support autolytic debridement, and accelerate tissue regeneration. The same advanced low-pH technology as the powder in a conformable pad format.",
    features: ["Low-pH collagen matrix", "Manages wound exudate", "Supports autolytic debridement"],
    indications: "Partial & full-thickness wounds, exudating wounds",
    comingSoon: false,
  },
  {
    id: "emcyte-prp",
    name: "EmCyte PurePRP® & Sapphire Centrifuge",
    category: "PRP",
    categoryColor: "#1a6b8a",
    classification: "FDA-Cleared Device System",
    storage: "Ambient / Room Temp",
    image: "/images/products/emcyte-prp.webp",
    image2: "/images/products/emcyte-centrifuge.webp",
    description:
      "EmCyte's PurePRP® SupraPhysiologic closed-system combined with the Sapphire centrifuge. Delivers ≥80% platelet yield in under 10 minutes with >99% RBC removal. The Sapphire processes PRP, BMC, and adipose concentrate on one 31-lb portable platform.",
    features: ["≥80% platelet yield", "Under 10-min preparation", ">99% RBC removal", "Processes PRP, BMC & adipose"],
    indications: "In-office autologous PRP, BMC, and adipose concentrate preparation",
    comingSoon: false,
  },
  {
    id: "msc",
    name: "Mesenchymal Stem Cells (MSC)",
    category: "Stem Cells",
    categoryColor: "#5a4fcf",
    classification: "Section 351 Biologic",
    storage: "Cryogenic −196°C",
    image: null,
    description:
      "GMP-certified, FDA-registered mesenchymal stem cells shipped cryogenically with full chain-of-custody documentation. Donor eligibility screening, CoA, and traceability records included with every shipment. For licensed providers only.",
    features: ["GMP-certified manufacturer", "Full chain-of-custody", "Cryogenic −196°C shipping"],
    indications: "For licensed healthcare providers only",
    comingSoon: true,
  },
];

const CATEGORIES = ["All", "Collagen", "PRP", "Stem Cells"];

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
                <div className={`group relative flex flex-col bg-white rounded-2xl border overflow-hidden h-full transition-all duration-300 ${
                  product.comingSoon
                    ? "border-rb-slate-mid"
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

                  {/* Image area */}
                  <div className="relative h-52 bg-white border-b border-rb-slate flex items-center justify-center overflow-hidden">
                    {product.image ? (
                      <>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {/* PRP — show centrifuge as second image on hover */}
                        {"image2" in product && product.image2 && (
                          <Image
                            src={product.image2 as string}
                            alt={`${product.name} centrifuge`}
                            fill
                            className="object-contain p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center gap-3 text-rb-slate-mid">
                        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M12 3v4M9.5 7h5a1 1 0 011 1v1a5 5 0 01-5 5 5 5 0 01-5-5V8a1 1 0 011-1h.5" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 13.5A6.5 6.5 0 0012 20a6.5 6.5 0 004.5-6.5" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20h6M12 20v1" />
                        </svg>
                        <span className="text-xs tracking-widest uppercase font-medium">Image Coming Soon</span>
                      </div>
                    )}
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

                    {/* Name */}
                    <h3 className="font-semibold text-rb-navy text-[1.05rem] leading-snug mb-3 group-hover:text-rb-teal transition-colors duration-300">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-rb-text-body text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Key features */}
                    <ul className="space-y-1.5 mb-4">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-rb-text-body">
                          <svg className="w-3.5 h-3.5 text-rb-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Indications */}
                    <p className="text-[11px] text-rb-text-muted italic mb-4 leading-relaxed">
                      <span className="not-italic font-semibold text-rb-navy">Indications: </span>
                      {product.indications}
                    </p>

                    {/* Sizes if available */}
                    {"sizes" in product && product.sizes && (
                      <p className="text-[11px] font-semibold text-rb-navy mb-4">
                        Available sizes: <span className="font-normal text-rb-text-body">{product.sizes}</span>
                      </p>
                    )}

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Meta row */}
                    <div className="flex items-center gap-4 pt-4 border-t border-rb-slate mb-4">
                      <div className="flex items-center gap-1.5 text-xs text-rb-text-muted">
                        <svg className="w-3.5 h-3.5 flex-shrink-0 text-rb-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                        <span>{product.classification}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-rb-text-muted">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
                        </svg>
                        <span>{product.storage}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    {product.comingSoon ? (
                      <span className="text-sm text-rb-text-muted font-medium">
                        Available soon — <Link href="/contact" className="text-rb-teal hover:underline">contact us to learn more</Link>
                      </span>
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
            Product images courtesy of Human BioSciences and EmCyte Corporation. Ridge Biologics does not make claims
            for the treatment, cure, or prevention of any disease. All products are intended for use by
            qualified healthcare professionals in accordance with applicable regulations and labeling.
          </p>
        </div>
      </section>
    </div>
  );
}
