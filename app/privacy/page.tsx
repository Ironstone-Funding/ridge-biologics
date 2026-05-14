import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Ridge Biologics Privacy Policy — how we collect, use, and protect your information in compliance with CCPA, Utah Consumer Privacy Act, and applicable federal requirements.",
};

const EFFECTIVE_DATE = "May 14, 2026";

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-py bg-rb-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-xl relative">
          <p className="text-[11px] font-semibold tracking-[0.20em] uppercase text-rb-teal-light mb-4">Legal</p>
          <h1 className="text-display-xl font-bold text-white mb-6 max-w-3xl">Privacy Policy</h1>
          <p className="text-white/70 text-lg max-w-2xl">Effective Date: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="max-w-3xl prose prose-slate prose-headings:font-bold prose-headings:text-rb-navy prose-p:text-rb-text-body prose-p:leading-relaxed prose-a:text-rb-teal prose-a:no-underline hover:prose-a:underline">

            <p>Ridge Biologics, LLC ("<strong>Ridge Biologics</strong>," "<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard information when you visit our website at ridge-biologics.netlify.app (the "<strong>Site</strong>") or contact us through our forms or by email.</p>

            <p>By using the Site, you agree to the terms of this Privacy Policy. If you do not agree, please do not use the Site.</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information you voluntarily provide when you submit contact or product-request forms, including:</p>
            <ul>
              <li>First and last name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Practice or organization name</li>
              <li>Message content</li>
            </ul>
            <p>We do not collect sensitive personal information such as government-issued identification numbers, financial account information, or biometric data. <strong>Do not include patient information or protected health information (PHI) in any form submission.</strong></p>

            <p>We may also collect certain technical information automatically when you visit the Site, including your IP address, browser type, device type, pages visited, and referring URL, through standard web server logs and analytics tools.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Verify provider eligibility and licensing status</li>
              <li>Send product, compliance, and operational communications</li>
              <li>Improve the functionality and content of the Site</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>

            <h2>3. Cookies and Tracking Technologies</h2>
            <p>Our Site uses cookies and similar technologies to ensure proper functionality. Cookies are small text files stored on your device. We use:</p>
            <ul>
              <li><strong>Essential cookies:</strong> Necessary for the Site to function, including session management and security features.</li>
              <li><strong>Analytics cookies:</strong> If analytics tools are enabled, they help us understand how visitors interact with the Site (e.g., pages viewed, time on site). These may use anonymized data.</li>
            </ul>
            <p>You may manage cookie preferences through your browser settings. Disabling essential cookies may affect Site functionality. See our <Link href="/cookies">Cookie Policy</Link> for more detail.</p>

            <h2>4. Data Sharing and Third Parties</h2>
            <p>We do not sell, rent, or trade your personal information. We may share your information with:</p>
            <ul>
              <li><strong>Service providers:</strong> Vendors who assist with hosting, email delivery, or analytics, under contractual confidentiality obligations.</li>
              <li><strong>Legal requirements:</strong> When required by law, regulation, court order, or governmental request.</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, subject to standard confidentiality obligations.</li>
            </ul>
            <p>We do not share your information with unaffiliated third parties for marketing purposes.</p>

            <h2>5. Data Retention</h2>
            <p>We retain personal information for as long as necessary to fulfill the purposes described in this Policy, comply with legal obligations, resolve disputes, and enforce agreements. Business contact information collected through forms is retained for the duration of our business relationship plus a reasonable period thereafter, not to exceed seven (7) years absent a legal hold requirement.</p>

            <h2>6. HIPAA and Protected Health Information</h2>
            <p>Ridge Biologics does not collect, store, or process protected health information (PHI) as defined under the Health Insurance Portability and Accountability Act (HIPAA) through this website. The information collected via contact forms is limited to business contact information (name, email, phone, practice name) and general inquiries.</p>
            <p>Healthcare providers should <strong>NOT</strong> include patient information, clinical data, or any protected health information in form submissions or email communications sent through this website.</p>
            <p>For healthcare providers who require HIPAA-compliant communication channels for order processing or product-related discussions that may involve PHI, Ridge Biologics maintains separate secure systems and can execute Business Associate Agreements (BAAs) as required. Contact us at <a href="mailto:compliance@ridgebiologics.com">compliance@ridgebiologics.com</a> to establish HIPAA-compliant communication protocols.</p>

            <h2>7. Your Rights — California (CCPA/CPRA)</h2>
            <p>California residents have the following rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA):</p>
            <ul>
              <li><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal information we have collected about you.</li>
              <li><strong>Right to Delete:</strong> Request deletion of personal information we have collected, subject to certain exceptions.</li>
              <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information.</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of personal information. <em>We do not sell or share personal information for cross-context behavioral advertising.</em></li>
              <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> Not applicable as we do not collect sensitive personal information as defined under CPRA.</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
            </ul>

            <h2>8. Your Rights — Utah (UCPA)</h2>
            <p>Utah residents have rights under the Utah Consumer Privacy Act (UCPA), including the right to access personal data, the right to delete personal data you provided, the right to data portability, and the right to opt out of the sale of personal data or targeted advertising. We do not engage in the sale of personal data or targeted advertising.</p>

            <h2>9. Your Rights — Florida</h2>
            <p>Florida residents have rights under applicable Florida privacy statutes. We provide mechanisms for Florida residents to access, correct, and request deletion of their personal information consistent with applicable law.</p>

            <h2>10. Other State Privacy Rights (VCDPA, CPA, CTDPA)</h2>
            <p>Residents of Virginia (VCDPA), Colorado (CPA), and Connecticut (CTDPA) have similar rights to those described above, including rights to access, correct, delete, and port their personal data, and to opt out of the sale of personal data and targeted advertising. We honor these rights upon verified request.</p>

            <h2>11. FTC Requirements</h2>
            <p>This Privacy Policy complies with the Federal Trade Commission Act and applicable FTC guidance on privacy and data security. We implement reasonable security measures to protect your information against unauthorized access, disclosure, alteration, and destruction.</p>

            <h2>12. How to Exercise Your Rights</h2>
            <p>To exercise any of the rights described in this Policy, please contact us at:</p>
            <ul>
              <li>Email: <a href="mailto:privacy@ridgebiologics.com">privacy@ridgebiologics.com</a></li>
            </ul>
            <p>We will respond to verified requests within 45 days, with a possible 45-day extension where reasonably necessary. We may require you to verify your identity before processing your request.</p>

            <h2>13. Security</h2>
            <p>We implement commercially reasonable technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

            <h2>14. Children's Privacy</h2>
            <p>The Site is intended solely for use by licensed healthcare providers and business professionals. We do not knowingly collect personal information from individuals under the age of 18. If we become aware that we have collected personal information from a minor, we will take steps to delete it promptly.</p>

            <h2>15. Third-Party Links</h2>
            <p>The Site may contain links to third-party websites, including regulatory agencies and industry resources. We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies.</p>

            <h2>16. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will indicate the effective date of any changes at the top of this page. Your continued use of the Site after any update constitutes acceptance of the revised Policy.</p>

            <h2>17. Contact Us</h2>
            <p>For privacy-related inquiries, requests, or complaints:</p>
            <ul>
              <li>Email: <a href="mailto:privacy@ridgebiologics.com">privacy@ridgebiologics.com</a></li>
              <li>General: <a href="mailto:info@ridgebiologics.com">info@ridgebiologics.com</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8 bg-rb-slate border-t border-rb-slate-mid">
        <div className="container-xl">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-rb-text-muted">
            <Link href="/terms" className="hover:text-rb-navy transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-rb-navy transition-colors">Cookie Policy</Link>
            <Link href="/accessibility" className="hover:text-rb-navy transition-colors">Accessibility</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
