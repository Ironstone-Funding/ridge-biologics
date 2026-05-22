import { COMPANY } from "@/lib/constants";

export const metadata = { title: "Insights | Ridge Biologics" };

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-rb-teal mb-4">Ridge Biologics</p>
        <h1 className="text-5xl font-bold text-rb-navy mb-6 leading-tight">Ridge Insights</h1>
        <p className="text-lg text-rb-text-body mb-4 leading-relaxed">Regulatory guidance, compliance frameworks, and industry analysis for regenerative medicine practices navigating a complex and evolving landscape.</p>
        <p className="text-lg text-rb-text-body mb-10 leading-relaxed">Content publishing soon. Subscribe to receive Ridge compliance briefs and regulatory updates directly.</p>
        <a href={`mailto:${COMPANY.email}?subject=Subscribe to Ridge Insights`} className="inline-block bg-rb-navy text-white px-6 py-3 font-semibold text-sm tracking-wide hover:bg-rb-teal transition-colors">Subscribe to Insights Brief</a>
      </div>
    </main>
  );
}
