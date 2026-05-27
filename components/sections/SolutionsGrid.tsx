"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { itemVariants } from "@/components/animations/StaggerChildren";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function SolutionsGrid() {
  return (
    <section className="section-py bg-rb-slate">
      <div className="container-xl">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Our Product Lines</SectionLabel>
            <h2 className="text-display-lg font-bold text-rb-navy">
              FDA-Regulated Biologics
              <br />for Licensed Providers
            </h2>
          </div>
          <Button variant="outline" href="/services">
            View All Products
          </Button>
        </FadeIn>

        {/* Product lineup hero image */}
        <FadeIn className="mb-10">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ maxWidth: "90%", margin: "0 auto" }}>
            <Image
              src="/images/product-lineup-hero.png"
              alt="Ridge Biologics product lineup — bovine collagen wound care devices and EmCyte PRP systems"
              width={1672}
              height={941}
              className="w-full h-auto"
              style={{ display: "block" }}
              sizes="(max-width: 768px) 100vw, 90vw"
              priority
            />
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <div className="group h-full bg-white rounded-2xl border border-rb-slate-mid p-7 hover:border-rb-teal/40 hover:shadow-card-hover transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-rb-teal-pale flex items-center justify-center text-rb-teal">
                    <Icon name={product.icon} className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-rb-navy text-[1.05rem] mb-2 group-hover:text-rb-teal transition-colors leading-snug">
                  {product.title}
                </h3>
                <p className="text-rb-text-body text-sm leading-relaxed mb-4 flex-1">
                  {product.description}
                </p>
                <div className="pt-4 border-t border-rb-slate">
                  <span className="text-xs font-semibold text-rb-teal bg-rb-teal-pale px-3 py-1 rounded-full">
                    {product.classification}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3} className="mt-8 text-center">
          <p className="text-rb-text-body text-sm">
            Ridge Biologics currently serves licensed healthcare providers in Utah and Florida, with expansion to additional states in progress. Contact us to inquire about your state.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
