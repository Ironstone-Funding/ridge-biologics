import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getProduct } from "@/lib/products";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);
  if (!product) notFound();

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-rb-slate">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-4">
          <nav className="flex items-center gap-2 text-xs text-rb-text-muted">
            <Link href="/products" className="hover:text-rb-teal transition-colors">Products</Link>
            <span>/</span>
            <span style={{ color: product.categoryColor }}>{product.category}</span>
            <span>/</span>
            <span className="text-rb-navy font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero — name left, overview right */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left — sticky product identity */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              {/* Category tag */}
              <div className="flex items-center gap-2 mb-8">
                <span className="w-px h-5" style={{ backgroundColor: product.categoryColor }} />
                <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: product.categoryColor }}>
                  {product.category}
                </span>
              </div>

              {/* Product name */}
              <h1
                className="font-serif font-light leading-[0.95] mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  letterSpacing: "-0.02em",
                  color: "#284454",
                }}
              >
                {product.name}
              </h1>

              {/* Tagline */}
              <p className="text-rb-text-body text-base leading-relaxed mb-8 font-light">
                {product.tagline}
              </p>

              <div className="h-px bg-rb-slate mb-8" />

              {/* Manufacturer */}
              <div className="mb-3">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-rb-text-muted mb-1">Manufacturer</p>
                <p className="text-rb-navy text-sm font-medium">{product.company}</p>
              </div>

              {/* Classification */}
              <div className="mb-3">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-rb-text-muted mb-1">Classification</p>
                <p className="text-rb-navy text-sm font-medium">{product.classification}</p>
              </div>

              {/* Storage */}
              <div className="mb-8">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-rb-text-muted mb-1">Storage</p>
                <p className="text-rb-navy text-sm font-medium">{product.storage}</p>
              </div>

              {/* Sizes if available */}
              {product.sizes && (
                <div className="mb-8">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-rb-text-muted mb-1">Available Sizes</p>
                  <p className="text-rb-navy text-sm font-medium">{product.sizes}</p>
                </div>
              )}

              {/* Coming soon or CTA */}
              {product.comingSoon ? (
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rb-slate border border-rb-slate-mid">
                  <span className="w-2 h-2 rounded-full bg-rb-navy" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-rb-navy">Coming Soon</span>
                </div>
              ) : (
                <Button variant="primary" href="/services#request">
                  Request This Product
                </Button>
              )}
            </div>

            {/* Right — full product details */}
            <div className="lg:col-span-8">

              {/* Product image if available */}
              {product.image && (
                <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden bg-rb-slate border border-rb-slate-mid mb-14 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-10"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                </div>
              )}

              {/* Overview */}
              <div className="mb-14">
                <p className="text-[10px] font-semibold tracking-widest uppercase text-rb-text-muted mb-5">Overview</p>
                <p className="text-rb-text-body text-[0.97rem] leading-[1.85] font-light">
                  {product.overview}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-14">
                <div className="h-px bg-rb-slate mb-8" />
                <p className="text-[10px] font-semibold tracking-widest uppercase text-rb-text-muted mb-5">
                  Key Features & Benefits
                </p>
                <ul className="space-y-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-rb-text-body text-sm leading-relaxed">
                      <svg className="w-4 h-4 text-rb-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Indications */}
              <div className="mb-14">
                <div className="h-px bg-rb-slate mb-8" />
                <p className="text-[10px] font-semibold tracking-widest uppercase text-rb-text-muted mb-5">
                  Indications for Use
                </p>
                <p className="text-rb-text-body text-sm leading-[1.85] font-light">
                  {product.indications}
                </p>
              </div>

              {/* Mechanism of Action */}
              <div className="mb-14">
                <div className="h-px bg-rb-slate mb-8" />
                <p className="text-[10px] font-semibold tracking-widest uppercase text-rb-text-muted mb-5">
                  Mechanism of Action
                </p>
                <p className="text-rb-text-body text-sm leading-[1.85] font-light">
                  {product.mechanismOfAction}
                </p>
              </div>

              {/* Regulatory */}
              <div className="mb-14">
                <div className="h-px bg-rb-slate mb-8" />
                <p className="text-[10px] font-semibold tracking-widest uppercase text-rb-text-muted mb-5">
                  Regulatory & Compliance
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { label: "Classification", value: product.classification },
                    { label: "Storage Requirements", value: product.storage },
                    { label: "Distributor", value: "Ridge Biologics — Utah DOPL Class C Licensed" },
                    { label: "Manufacturer", value: product.company },
                  ].map((item) => (
                    <div key={item.label} className="p-5 rounded-xl bg-rb-slate border border-rb-slate-mid">
                      <p className="text-[10px] font-semibold tracking-widest uppercase text-rb-teal mb-1.5">{item.label}</p>
                      <p className="text-rb-navy text-sm font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              {!product.comingSoon && (
                <div className="h-px bg-rb-slate mb-8" />
              )}
              {!product.comingSoon && (
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" href="/services#request">
                    Submit a Product Request
                  </Button>
                  <Button variant="outline" href="/contact">
                    Contact Our Team
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Back to catalog */}
      <div className="bg-rb-slate border-t border-rb-slate-mid py-8">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-rb-text-body hover:text-rb-teal transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to All Products
          </Link>
        </div>
      </div>

      {/* Disclaimer */}
      <section className="py-8 bg-white border-t border-rb-slate">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <p className="text-xs text-rb-text-muted leading-relaxed max-w-4xl">
            Ridge Biologics does not make claims for the treatment, cure, or prevention of any disease.
            All products are intended for use by qualified healthcare professionals in accordance with
            applicable regulations and labeling. Product information sourced from manufacturer documentation.
          </p>
        </div>
      </section>
    </div>
  );
}
