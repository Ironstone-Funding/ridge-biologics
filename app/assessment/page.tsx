import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata = { title: "Schedule Strategic Assessment | Ridge Biologics" };

export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-rb-teal mb-4">Ridge Biologics</p>
        <h1 className="text-5xl font-bold text-rb-navy mb-6 leading-tight">Schedule Strategic Assessment</h1>
        <p className="text-lg text-rb-text-body mb-4 leading-relaxed">Ridge offers complimentary strategic assessments for practices evaluating or expanding biologics programs. Our territory representatives review your current infrastructure, compliance posture, and program goals — then provide a frank assessment of where Ridge can add value.</p>
        <p className="text-lg text-rb-text-body mb-10 leading-relaxed">Sessions are 30 minutes, confidential, and obligation-free.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={`mailto:${COMPANY.email}`} className="inline-block bg-rb-navy text-white px-6 py-3 font-semibold text-sm tracking-wide hover:bg-rb-teal transition-colors text-center">Email to Schedule</a>
          <a href={`tel:${COMPANY.phoneTel}`} className="inline-block border border-rb-navy text-rb-navy px-6 py-3 font-semibold text-sm tracking-wide hover:bg-rb-navy hover:text-white transition-colors text-center">{COMPANY.phone}</a>
        </div>
      </div>
    </main>
  );
}
