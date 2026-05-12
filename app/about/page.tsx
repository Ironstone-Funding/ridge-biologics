"use client";

import Image from "next/image";
import { LEADERSHIP_TEAM } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import StaggerChildren, { itemVariants } from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const MISSION_POINTS = [
  {
    title: "Distribution with Discipline",
    body: "We believe that how you distribute matters as much as what you distribute. Every logistics decision Ridge makes is anchored in documentation integrity and chain-of-custody discipline.",
  },
  {
    title: "Education Before Introduction",
    body: "No provider enters our network without completing a structured compliance orientation. We invest in education because informed providers make better decisions.",
  },
  {
    title: "Infrastructure Over Transactions",
    body: "Ridge builds infrastructure — operational frameworks, compliance processes, training programs — that support practices over the long term.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="section-py bg-rb-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-xl relative">
          <SlideIn direction="left">
            <SectionLabel light>About Ridge Biologics</SectionLabel>
            <h1 className="text-display-xl font-bold text-white mb-6 max-w-3xl">
              Built to Support the Providers<br />Who Support Patients
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Ridge Biologics is a premium regenerative biologics distribution and provider-support company.
              We exist to provide the infrastructure, education, and operational guidance that allows
              practices to integrate biologics with confidence.
            </p>
          </SlideIn>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="flex justify-center lg:justify-start">
              <Image src="/images/logo.png" alt="Ridge Biologics" width={320} height={100} className="w-full max-w-xs h-auto" />
            </FadeIn>
            <SlideIn direction="right">
              <SectionLabel>Our Mission</SectionLabel>
              <h2 className="text-display-md font-bold text-rb-navy mb-6">
                Compliance-Conscious Infrastructure for Modern Regenerative Medicine
              </h2>
              <p className="text-rb-text-body text-lg leading-relaxed">
                Ridge was founded on the belief that providers deserve a distribution partner
                who takes compliance, documentation, and education as seriously as they do —
                and who builds operational infrastructure to match.
              </p>
            </SlideIn>
          </div>
        </div>
      </section>

      <section className="section-py bg-rb-slate">
        <div className="container-xl">
          <FadeIn className="mb-12">
            <h2 className="text-display-md font-bold text-rb-navy">How We Operate</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {MISSION_POINTS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="h-full bg-white rounded-2xl border border-rb-slate-mid p-8 hover:border-rb-teal/40 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-8 h-0.5 bg-rb-teal rounded-full mb-6" />
                  <h3 className="font-semibold text-rb-navy text-lg mb-3">{p.title}</h3>
                  <p className="text-rb-text-body text-sm leading-relaxed">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl">
          <FadeIn className="mb-12">
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="text-display-md font-bold text-rb-navy">Our Team</h2>
          </FadeIn>
          <StaggerChildren staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((m) => (
              <motion.div key={m.id} variants={itemVariants}>
                <div className="h-full bg-rb-slate rounded-2xl p-7 hover:shadow-card transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-rb-navy flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-rb-teal mb-2">{m.title}</div>
                  <p className="text-rb-text-body text-sm leading-relaxed">{m.bio}</p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-py-sm bg-rb-navy">
        <div className="container-lg text-center">
          <FadeIn>
            <h2 className="text-display-md font-bold text-white mb-5">Work With Ridge</h2>
            <p className="text-white/60 text-lg mb-8">
              Provider, representative, or manufacturer — we'd like to hear from you.
            </p>
            <Button variant="primary" size="lg" href="/contact">Get in Touch</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
