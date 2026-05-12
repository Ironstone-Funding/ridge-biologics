import type { Metadata } from "next";
import { COMPANY_META } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ridge Biologics for partnership, media, and investor inquiries.",
};

const CONTACT_OPTIONS = [
  {
    title: "Business Development",
    description: "Explore partnership, licensing, and collaboration opportunities.",
    email: "bizdev@ridgebiologics.com",
    icon: "🤝",
  },
  {
    title: "Investor Relations",
    description: "Analyst inquiries, financial information, and shareholder services.",
    email: "ir@ridgebiologics.com",
    icon: "📊",
  },
  {
    title: "Media & Communications",
    description: "Press inquiries, interview requests, and media assets.",
    email: "media@ridgebiologics.com",
    icon: "📰",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-32 bg-ridge-navy min-h-screen">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <FadeIn>
          <SectionLabel className="mb-4">Get In Touch</SectionLabel>
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Let's Build Something
            <br />
            <span className="bg-teal-gradient bg-clip-text text-transparent">
              Remarkable Together
            </span>
          </h1>
          <p className="text-xl text-white/55 max-w-2xl leading-relaxed">
            Whether you're a potential partner, investor, member of the press, or simply
            curious about our work — we'd love to hear from you.
          </p>
        </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {CONTACT_OPTIONS.map((option, i) => (
            <SlideIn key={option.title} direction="up" delay={i * 0.1}>
              <div className="h-full bg-ridge-navy-light border border-white/10 rounded-2xl p-8 hover:border-ridge-teal/30 transition-all duration-300 group">
                <div className="text-3xl mb-5">{option.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-ridge-teal transition-colors">
                  {option.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{option.description}</p>
                <a
                  href={`mailto:${option.email}`}
                  className="text-sm text-ridge-teal hover:text-ridge-teal-light transition-colors font-mono"
                >
                  {option.email}
                </a>
              </div>
            </SlideIn>
          ))}
        </div>

        {/* Contact form */}
        <div className="grid lg:grid-cols-2 gap-16">
          <SlideIn direction="left">
            <h2 className="text-3xl font-bold text-white mb-3">Send a Message</h2>
            <p className="text-white/50 mb-8">
              Fill out the form and a member of our team will get back to you within two business days.
            </p>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                {["First Name", "Last Name"].map((label) => (
                  <div key={label}>
                    <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2">
                      {label}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-ridge-navy-mid border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-ridge-teal/50 transition-colors text-sm"
                      placeholder={label}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-ridge-navy-mid border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-ridge-teal/50 transition-colors text-sm"
                  placeholder="you@organization.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full bg-ridge-navy-mid border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-ridge-teal/50 transition-colors text-sm"
                  placeholder="Company / Institution"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2">
                  Inquiry Type
                </label>
                <select className="w-full bg-ridge-navy-mid border border-white/15 rounded-xl px-4 py-3 text-white/70 focus:outline-none focus:border-ridge-teal/50 transition-colors text-sm">
                  <option value="">Select inquiry type</option>
                  <option>Business Development</option>
                  <option>Investor Relations</option>
                  <option>Media & Press</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/50 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-ridge-navy-mid border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-ridge-teal/50 transition-colors text-sm resize-none"
                  placeholder="Tell us about your interest..."
                />
              </div>

              <Button variant="primary" size="lg" type="submit" className="w-full justify-center">
                Send Message
              </Button>
            </form>
          </SlideIn>

          {/* Address / info */}
          <SlideIn direction="right" delay={0.15}>
            <div className="lg:pt-14">
              <div className="bg-ridge-navy-light border border-white/10 rounded-2xl p-8 mb-6">
                <h3 className="font-semibold text-white mb-5">Corporate Headquarters</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-white/35 text-xs uppercase tracking-widest mb-1">Address</p>
                    <p className="text-white/70 whitespace-pre-line">{COMPANY_META.address}</p>
                  </div>
                  <div>
                    <p className="text-white/35 text-xs uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-white/70">{COMPANY_META.phone}</p>
                  </div>
                  <div>
                    <p className="text-white/35 text-xs uppercase tracking-widest mb-1">General Inquiries</p>
                    <a href={`mailto:${COMPANY_META.email}`} className="text-ridge-teal hover:underline text-sm">
                      {COMPANY_META.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-ridge-teal/5 border border-ridge-teal/15 rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-2">Careers at Ridge Biologics</h3>
                <p className="text-sm text-white/55 mb-4">
                  Join a team of world-class scientists and operators on a mission to transform medicine.
                </p>
                <Button variant="outline" size="sm" href="/about#careers">
                  View Open Roles
                </Button>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </div>
  );
}
