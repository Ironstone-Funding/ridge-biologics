"use client";

import { CAREER_ROLES } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function CareersPage() {
  return (
    <div className="pt-20">
      <section className="section-py bg-rb-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-xl relative">
          <SlideIn direction="left">
            <SectionLabel light>Careers</SectionLabel>
            <h1 className="text-display-xl font-bold text-white mb-6 max-w-3xl">
              Join a Team That Leads<br />With Compliance
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Ridge is building a national network of professionals who believe that how
              you operate in healthcare matters as much as what you provide.
            </p>
          </SlideIn>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl">
          <FadeIn className="mb-14">
            <SectionLabel>Open Roles</SectionLabel>
            <h2 className="text-display-md font-bold text-rb-navy">Current Opportunities</h2>
          </FadeIn>
          <div className="space-y-4">
            {CAREER_ROLES.map((role, i) => (
              <FadeIn key={role.id} delay={i * 0.07}>
                <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-7 rounded-2xl border border-rb-slate-mid hover:border-rb-teal/40 hover:shadow-card transition-all duration-300 bg-white">
                  <div>
                    <h3 className="font-semibold text-rb-navy text-lg group-hover:text-rb-teal transition-colors mb-1">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs bg-rb-teal-pale text-rb-teal font-medium px-3 py-1 rounded-full">{role.department}</span>
                      <span className="text-xs bg-rb-slate text-rb-text-body font-medium px-3 py-1 rounded-full">{role.location}</span>
                      <span className="text-xs bg-rb-slate text-rb-text-body font-medium px-3 py-1 rounded-full">{role.type}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" href="/contact" className="flex-shrink-0">
                    Apply Now
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-rb-slate">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <SectionLabel>Working at Ridge</SectionLabel>
              <h2 className="text-display-md font-bold text-rb-navy mb-6">
                What We Look For
              </h2>
              <p className="text-rb-text-body text-lg leading-relaxed mb-6">
                Ridge professionals are more than functionally capable — they're committed to
                operating with integrity in a regulatory-sensitive environment. We expect our
                team to lead with compliance, support providers educationally, and maintain
                the documentation discipline that protects everyone in the network.
              </p>
              <Button variant="primary" href="/contact">
                Send a General Inquiry
              </Button>
            </SlideIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl border border-rb-slate-mid p-8 lg:p-10 space-y-5">
                {[
                  { icon: "🛡️", title: "Compliance-First Mindset", body: "Every team member understands that regulatory awareness is a core professional responsibility — not a legal department concern." },
                  { icon: "📚", title: "Commitment to Education", body: "We invest in training our own team as rigorously as we train the providers we serve." },
                  { icon: "🤝", title: "Relationship Integrity", body: "Ridge representatives are expected to build honest, long-term relationships grounded in accurate information." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-rb-navy text-sm mb-1">{item.title}</h3>
                      <p className="text-rb-text-body text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
