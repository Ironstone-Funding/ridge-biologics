import { COMPANY } from "@/lib/constants";

export const metadata = { title: "Client Portal | Ridge Biologics" };

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-rb-teal mb-4">Ridge Biologics</p>
        <h1 className="text-5xl font-bold text-rb-navy mb-6 leading-tight">Client Portal</h1>
        <p className="text-lg text-rb-text-body mb-4 leading-relaxed">Secure portal access for active Ridge Biologics partners. Portal credentials are provided during onboarding.</p>
        <p className="text-lg text-rb-text-body mb-10 leading-relaxed">For access assistance, contact your Ridge territory representative or reach us directly at <a href={`mailto:${COMPANY.email}`} className="text-rb-teal hover:underline">{COMPANY.email}</a>.</p>
        <a href={`mailto:${COMPANY.email}`} className="inline-block bg-rb-navy text-white px-6 py-3 font-semibold text-sm tracking-wide hover:bg-rb-teal transition-colors">Contact Your Rep</a>
      </div>
    </main>
  );
}
