import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Ridge Biologics Terms of Service — governing conditions for use of our website and services. For licensed healthcare providers only.",
};

const EFFECTIVE_DATE = "May 15, 2026";

export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-py bg-rb-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-xl relative">
          <p className="text-[11px] font-semibold tracking-[0.20em] uppercase text-rb-teal-light mb-4">Legal</p>
          <h1 className="text-display-xl font-bold text-white mb-6 max-w-3xl">Terms of Service</h1>
          <p className="text-white/70 text-lg max-w-2xl">Effective Date: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      {/* Not for consumer use notice */}
      <div className="bg-amber-50 border-b border-amber-200 py-4">
        <div className="container-xl">
          <p className="text-amber-800 text-sm font-semibold">
            ⚠ NOT FOR CONSUMER USE — This website and the products and services described herein are intended solely for licensed healthcare providers. General consumers should not attempt to purchase or use the products described.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="max-w-3xl prose prose-slate prose-headings:font-bold prose-headings:text-rb-navy prose-p:text-rb-text-body prose-p:leading-relaxed prose-a:text-rb-teal prose-a:no-underline hover:prose-a:underline">

            <p>These Terms of Service ("<strong>Terms</strong>") constitute a legally binding agreement between you ("<strong>User</strong>" or "<strong>you</strong>") and Ridge Biologics, LLC ("<strong>Ridge Biologics</strong>," "<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>") governing your access to and use of our website at ridge-biologics.netlify.app (the "<strong>Site</strong>") and related services.</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the Site, submitting any form, or engaging with Ridge Biologics in any capacity through this Site, you represent that you have read, understood, and agree to be bound by these Terms and our <Link href="/privacy">Privacy Policy</Link>. If you do not agree to these Terms, do not use this Site.</p>

            <h2>2. Eligibility — Licensed Healthcare Providers Only</h2>
            <p>The Site and all associated products and services are intended exclusively for <strong>licensed healthcare providers</strong>, including but not limited to physicians, physician assistants, nurse practitioners, and other licensed medical professionals operating within their scope of practice. By using this Site:</p>
            <ul>
              <li>You represent that you are a licensed healthcare provider in good standing in your jurisdiction.</li>
              <li>You represent that you are accessing the Site in your professional capacity.</li>
              <li>You understand that products distributed by Ridge Biologics are intended for use by qualified healthcare professionals only.</li>
              <li>You acknowledge that Ridge Biologics serves providers in Utah and Florida only, subject to applicable licensing requirements.</li>
            </ul>
            <p>Use by general consumers, patients, or unlicensed individuals is strictly prohibited.</p>

            <h2>3. No Medical Advice</h2>
            <p>Nothing on this Site constitutes medical advice, medical diagnosis, treatment recommendations, or clinical guidance. Ridge Biologics is a distributor of regulated biological products. All clinical decisions, including the determination of appropriateness of any product for a specific patient or indication, remain solely within the professional judgment of the treating licensed healthcare provider. Ridge Biologics does not make claims for the treatment, cure, or prevention of any disease or condition.</p>

            <h2>4. Account Registration</h2>
            <p>Access to provider-specific materials and ordering may require registration. You agree to provide accurate, current, and complete information and to update such information as necessary. You are responsible for maintaining the confidentiality of your credentials and for all activities under your account. You must notify Ridge Biologics immediately of any unauthorized use of your account.</p>

            <h2>5. Prohibited Uses</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Site for any unlawful purpose or in violation of applicable federal, state, or local laws and regulations</li>
              <li>Misrepresent your licensure status, credentials, or professional affiliation</li>
              <li>Attempt to purchase products for resale outside the terms of an authorized distributor relationship</li>
              <li>Transmit patient-identifying information or PHI through Site forms or channels</li>
              <li>Use automated means to scrape, crawl, or harvest content from the Site</li>
              <li>Introduce malware, viruses, or other harmful code</li>
              <li>Interfere with the Site's security features or attempt unauthorized access</li>
              <li>Use the Site to make false or misleading claims about products to patients</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>All content on this Site — including but not limited to text, graphics, logos, images, and data compilations — is the property of Ridge Biologics or its content suppliers and is protected by applicable copyright, trademark, and other intellectual property laws. Product names, logos, and trademarks appearing on the Site belong to their respective owners.</p>
            <p>Manufacturer trademarks referenced on this Site include: SkinTemp® and Medifil® (Human BioSciences, Inc.), ColleCule LpH® (Human BioSciences, Inc.), PurePRP® and Sapphire Centrifuge (EmCyte Corporation), and RivaCell™ (GMP-certified manufacturer). All rights reserved by their respective owners.</p>
            <p>You may not reproduce, distribute, modify, or create derivative works from Site content without our prior written consent.</p>

            <h2>7. Disclaimer of Warranties</h2>
            <p>THE SITE AND ALL CONTENT, PRODUCTS, AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, RIDGE BIOLOGICS DISCLAIMS ALL WARRANTIES, INCLUDING:</p>
            <ul>
              <li>WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT</li>
              <li>WARRANTIES REGARDING MEDICAL OUTCOMES, CLINICAL EFFICACY, OR PRODUCT PERFORMANCE</li>
              <li>WARRANTIES REGARDING THE ACCURACY, COMPLETENESS, OR TIMELINESS OF CONTENT</li>
              <li>WARRANTIES REGARDING UNINTERRUPTED OR ERROR-FREE SITE OPERATION</li>
            </ul>

            <h2>8. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, RIDGE BIOLOGICS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, BUSINESS, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH:</p>
            <ul>
              <li>Your use of or inability to use the Site</li>
              <li>Clinical outcomes associated with use of distributed products</li>
              <li>Reliance on any information provided on the Site</li>
              <li>Unauthorized access to or alteration of your information</li>
            </ul>
            <p>IN NO EVENT SHALL RIDGE BIOLOGICS'S TOTAL AGGREGATE LIABILITY EXCEED THE GREATER OF (A) TEN THOUSAND DOLLARS ($10,000) OR (B) THE TOTAL AMOUNT PAID BY YOU TO RIDGE BIOLOGICS FOR THE SPECIFIC PRODUCT(S) OR SERVICE(S) GIVING RISE TO THE CLAIM. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR CERTAIN DAMAGES, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO THE EXTENT PROHIBITED BY APPLICABLE LAW.</p>

            <h2>9. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Ridge Biologics, its officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to: (a) your use of the Site or products; (b) your violation of these Terms; (c) your violation of any applicable law or third-party rights; or (d) clinical decisions made in connection with any product.</p>

            <h2>10. Dispute Resolution and Arbitration</h2>
            <p>Any dispute, claim, or controversy arising out of or relating to these Terms, the Site, or the products or services provided by Ridge Biologics shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules. The arbitration shall be conducted in Salt Lake County, Utah. The arbitrator's decision shall be final and binding. You waive any right to a jury trial and to participation in any class action proceeding.</p>
            <p>Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in a court of competent jurisdiction to prevent irreparable harm pending arbitration.</p>

            <h2>11. Governing Law</h2>
            <p>These Terms and all related matters shall be governed by and construed in accordance with the laws of the <strong>State of Utah</strong>, without regard to its conflict of law provisions. Any court proceedings not subject to the arbitration clause shall be brought exclusively in the state or federal courts located in Salt Lake County, Utah.</p>

            <h2>12. Severability</h2>
            <p>If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will continue in full force and effect.</p>

            <h2>13. Force Majeure</h2>
            <p>Ridge Biologics shall not be liable for any failure or delay in performance due to causes beyond its reasonable control, including but not limited to acts of God, natural disasters, pandemics, acts of government, supply chain disruptions, regulatory actions by the FDA or state agencies, or interruption of utilities or communications.</p>

            <h2>14. Entire Agreement</h2>
            <p>These Terms, together with our <Link href="/privacy">Privacy Policy</Link> and <Link href="/cookies">Cookie Policy</Link>, constitute the entire agreement between you and Ridge Biologics with respect to your use of the Site and supersede all prior agreements, representations, and understandings.</p>

            <h2>15. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will indicate the effective date of revisions at the top of this page. Continued use of the Site following any modification constitutes acceptance of the revised Terms.</p>

            <h2>16. Contact</h2>
            <p>Questions about these Terms may be directed to:</p>
            <ul>
              <li>Email: <a href="mailto:info@ridgebiologics.com">info@ridgebiologics.com</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8 bg-rb-slate border-t border-rb-slate-mid">
        <div className="container-xl">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-rb-text-muted">
            <Link href="/privacy" className="hover:text-rb-navy transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-rb-navy transition-colors">Cookie Policy</Link>
            <Link href="/accessibility" className="hover:text-rb-navy transition-colors">Accessibility</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
