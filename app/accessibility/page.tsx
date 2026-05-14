import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Ridge Biologics Accessibility Statement — our commitment to web accessibility.",
};

export default function AccessibilityPage() {
  return (
    <div className="pt-20">
      <section className="section-py bg-rb-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-xl relative">
          <p className="text-[11px] font-semibold tracking-[0.20em] uppercase text-rb-teal-light mb-4">Legal</p>
          <h1 className="text-display-xl font-bold text-white mb-6 max-w-3xl">Accessibility Statement</h1>
          <p className="text-white/70 text-lg max-w-2xl">Last Updated: May 14, 2026</p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="max-w-3xl prose prose-slate prose-headings:font-bold prose-headings:text-rb-navy prose-p:text-rb-text-body prose-p:leading-relaxed prose-a:text-rb-teal prose-a:no-underline hover:prose-a:underline">
            <p>Ridge Biologics, LLC is committed to ensuring digital accessibility for people with disabilities. We are continually working to improve the accessibility of our website in accordance with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.</p>

            <h2>Our Commitment</h2>
            <p>We aim to provide a website that is accessible to all users, including those with visual, auditory, motor, and cognitive disabilities. Our ongoing efforts include reviewing and improving our site's accessibility on a regular basis.</p>

            <h2>Known Limitations</h2>
            <p>While we strive for full accessibility, some areas of our website may not yet fully conform to WCAG 2.1 Level AA standards. We are actively working to identify and remediate these issues.</p>

            <h2>Feedback and Contact</h2>
            <p>If you experience any difficulty accessing content on our website or have suggestions for improvement, please contact us:</p>
            <ul>
              <li>Email: <a href="mailto:info@ridgebiologics.com">info@ridgebiologics.com</a></li>
            </ul>
            <p>We take all accessibility feedback seriously and will respond within 5 business days.</p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-rb-slate border-t border-rb-slate-mid">
        <div className="container-xl">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-rb-text-muted">
            <Link href="/privacy" className="hover:text-rb-navy transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-rb-navy transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-rb-navy transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
