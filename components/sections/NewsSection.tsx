import Link from "next/link";
import { NEWS_ITEMS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { staggerItemVariants } from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import type { NewsItem } from "@/types";

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <motion.div variants={staggerItemVariants}>
      <Link href={item.href} className="block group h-full">
        <div className="h-full bg-ridge-navy-light border border-white/10 rounded-2xl p-6 hover:border-ridge-teal/30 transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-4">
            <Badge label={item.category} variant="news" />
            <span className="text-xs text-white/35 font-mono">{formatDate(item.date)}</span>
          </div>
          <h3 className="text-white font-semibold leading-snug mb-3 group-hover:text-ridge-teal transition-colors line-clamp-3">
            {item.title}
          </h3>
          <p className="text-sm text-white/50 leading-relaxed line-clamp-2">{item.excerpt}</p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-ridge-teal opacity-0 group-hover:opacity-100 transition-opacity">
            Read more
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function NewsSection() {
  const [featured, ...rest] = NEWS_ITEMS;

  return (
    <section className="py-24 lg:py-32 bg-ridge-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="mb-14">
          <SectionLabel className="mb-4">News & Updates</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Latest From Ridge
            </h2>
            <Button variant="outline" href="/news">
              All News
            </Button>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {NEWS_ITEMS.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
