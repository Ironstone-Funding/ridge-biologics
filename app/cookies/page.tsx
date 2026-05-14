import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Ridge Biologics Cookie Policy — how we use cookies and how to manage your preferences.",
};

const EFFECTIVE_DATE = "May 14, 2026";

export default function CookiesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-py bg-rb-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rb-teal/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container-xl relative">
          <p className="text-[11px] font-semibold tracking-[0.20em] uppercase text-rb-teal-light mb-4">Legal</p>
          <h1 className="text-display-xl font-bold text-white mb-6 max-w-3xl">Cookie Policy</h1>
          <p className="text-white/70 text-lg max-w-2xl">Effective Date: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="max-w-3xl prose prose-slate prose-headings:font-bold prose-headings:text-rb-navy prose-p:text-rb-text-body prose-p:leading-relaxed prose-a:text-rb-teal prose-a:no-underline hover:prose-a:underline">

            <p>This Cookie Policy explains how Ridge Biologics, LLC ("<strong>Ridge Biologics</strong>," "<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>") uses cookies and similar technologies on our website at ridge-biologics.netlify.app (the "<strong>Site</strong>").</p>

            <h2>1. What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device by a website when you visit it. They allow the website to remember your actions and preferences over a period of time, so you don't have to re-enter them each time you visit. Cookies can be "session cookies" (deleted when you close your browser) or "persistent cookies" (remain on your device until they expire or you delete them).</p>

            <h2>2. Types of Cookies We Use</h2>

            <h3>Essential Cookies</h3>
            <p>These cookies are necessary for the Site to function properly. They enable core functionality such as page navigation, security, and access to secure areas. The Site cannot function properly without these cookies, and they cannot be disabled in our systems.</p>
            <table>
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>rb_cookie_consent</td>
                  <td>Stores your cookie consent preference</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>__session</td>
                  <td>Session management (if applicable)</td>
                  <td>Session</td>
                </tr>
              </tbody>
            </table>

            <h3>Analytics Cookies (if enabled)</h3>
            <p>If analytics tools are deployed on the Site (such as Netlify Analytics), these cookies help us understand how visitors interact with our content. Data collected is aggregated and anonymized where possible and is used to improve Site performance and content. We do not use these cookies for targeted advertising.</p>

            <h3>Third-Party Cookies</h3>
            <p>Our Site is hosted on Netlify. Netlify may place essential cookies related to CDN delivery and security. We do not use third-party advertising or social media tracking cookies.</p>

            <h2>3. Cookie Duration</h2>
            <ul>
              <li><strong>Session cookies:</strong> Expire when you close your browser.</li>
              <li><strong>Persistent cookies:</strong> Remain on your device for a set period (typically 12 months or less) or until you delete them.</li>
            </ul>

            <h2>4. Managing Cookies</h2>
            <p>You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the Site.</p>

            <h3>Google Chrome</h3>
            <ol>
              <li>Click the three dots menu → Settings</li>
              <li>Click Privacy and security → Cookies and other site data</li>
              <li>Select your preferred cookie settings</li>
            </ol>

            <h3>Mozilla Firefox</h3>
            <ol>
              <li>Click the menu button → Settings</li>
              <li>Select Privacy &amp; Security</li>
              <li>Under Enhanced Tracking Protection, choose your settings</li>
            </ol>

            <h3>Apple Safari</h3>
            <ol>
              <li>Go to Safari → Preferences → Privacy</li>
              <li>Select Block all cookies or adjust cross-site tracking settings</li>
            </ol>

            <h3>Microsoft Edge</h3>
            <ol>
              <li>Click the three dots menu → Settings</li>
              <li>Click Privacy, search, and services</li>
              <li>Under Cookies and site data, adjust your preferences</li>
            </ol>

            <h2>5. Do Not Track</h2>
            <p>Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want your online activity tracked. Our Site currently does not alter its behavior in response to DNT signals, but we do not use tracking for advertising purposes regardless.</p>

            <h2>6. Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will indicate the revised effective date at the top of this page.</p>

            <h2>7. Contact</h2>
            <p>If you have questions about our use of cookies, contact us at:</p>
            <ul>
              <li>Email: <a href="mailto:privacy@ridgebiologics.com">privacy@ridgebiologics.com</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8 bg-rb-slate border-t border-rb-slate-mid">
        <div className="container-xl">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-rb-text-muted">
            <Link href="/privacy" className="hover:text-rb-navy transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-rb-navy transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-rb-navy transition-colors">Accessibility</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
