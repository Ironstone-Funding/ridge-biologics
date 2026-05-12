"use client";

import { COMPLIANCE_FAQS } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const PRINCIPLES = [
  { num: "01", title: "Documentation-First", body: "Every process begins with a documentation question: what records does this create, and are they accurate, complete, and accessible?" },
  { num: "02", title: "Chain-of-Custody Discipline", body: "We build chain-of-custody into logistics from origin. Every product movement is designed to be traceable, documented, and defensible." },
  { num: "03", title: "Regulatory Awareness", body: "Our team monitors the regulatory landscape around regenerative biologics and communicates relevant developments to our provider network." },
  { num: "04", title: "Education Before Introduction", body: "Providers complete compliance orientation before any product enters their practice — not as a formality, but as a foundational requirement." },
  { num: "05", title: "No Unsubstantiated Claims", body: "Ridge does not make clinical efficacy claims. We support education, not promotion. Clinical decisions remain the responsibility of licensed providers." },
  { num: "06", title: "Manufacturer Vetting", body: "Every manufacturer in our network undergoes a structured vetting process including documentation review and regulatory positioning assessment." },
];

export default function CompliancePage() {
  return (
    <div className="pt-20">
      <section className="section-py bg-rb-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-xl relative">
          <SlideIn direction="left">
            <SectionLabel light>Compliance</SectionLabel>
            <h1 className="text-display-xl font-bold text-white mb-6 max-w-3xl">
              Compliance Is the Core,<br />Not a Checkbox
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Ridge has built compliance-consciousness into every layer of its operational model —
              from manufacturer vetting to provider onboarding to ongoing field support.
            </p>
          </SlideIn>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl">
          <FadeIn className="mb-14">
            <SectionLabel>Our Principles</SectionLabel>
            <h2 className="text-display-md font-bold text-rb-navy">Six Compliance Principles</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRINCIPLES.map((p, i) => (
              <FadeIn key={p.num} delay={i * 0.07}>
                <div className="h-full bg-rb-slate rounded-2xl p-7 hover:bg-white hover:border hover:border-rb-teal/30 hover:shadow-card transition-all duration-300">
                  <div className="text-3xl font-black text-rb-teal/20 mb-4 font-mono">{p.num}</div>
                  <h3 className="font-semibold text-rb-navy text-[1rem] mb-3">{p.title}</h3>
                  <p className="text-rb-text-body text-sm leading-relaxed">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-rb-navy" id="documentation">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <SlideIn direction="left">
              <SectionLabel light>Documentation Support</SectionLabel>
              <h2 className="text-display-md font-bold text-white mb-6">
                Frameworks That Help Practices Stay Organized
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Ridge provides documentation support frameworks designed to help practices maintain
                consistent, organized records related to biologics receipt, storage, patient intake,
                and chain-of-custody tracking.
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                These frameworks are operational tools — not legal or regulatory advice. Practices
                should consult qualified legal and compliance counsel for their specific obligations.
              </p>
            </SlideIn>
            <div className="space-y-4" id="chain-of-custody">
              {[
                { title: "Intake & Receipt Records", body: "Documentation templates supporting accurate recording of biologics receipt, including lot tracking and temperature logs." },
                { title: "Storage & Handling Logs", body: "Ongoing logging frameworks for temperature monitoring, storage conditions, and product inventory." },
                { title: "Patient Intake Documentation", body: "Pre-procedure intake frameworks supporting informed decision-making and consent documentation." },
                { title: "Chain-of-Custody Records", body: "End-to-end documentation tracking product movement from manufacturer receipt to point of use." },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div className="bg-white/6 border border-white/10 rounded-2xl p-6 hover:border-rb-teal/40 transition-colors">
                    <h3 className="font-semibold text-white text-[0.95rem] mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-lg">
          <FadeIn className="mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-display-md font-bold text-rb-navy">Common Questions</h2>
          </FadeIn>
          <div className="space-y-4">
            {COMPLIANCE_FAQS.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="border border-rb-slate-mid rounded-2xl p-7 hover:border-rb-teal/40 transition-colors">
                  <h3 className="font-semibold text-rb-navy mb-3">{faq.question}</h3>
                  <p className="text-rb-text-body text-[0.925rem] leading-relaxed">{faq.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3} className="mt-10">
            <Button variant="primary" href="/contact">Speak With Our Team</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
