"use client";

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-kp-text mb-1.5">
            First Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="first-name"
            type="text"
            required
            autoComplete="given-name"
            className="w-full px-4 py-3 rounded-xl border border-kp-border focus:border-kp-green focus:ring-2 focus:ring-kp-green/20 outline-none transition text-kp-text text-sm"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-kp-text mb-1.5">
            Last Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="last-name"
            type="text"
            required
            autoComplete="family-name"
            className="w-full px-4 py-3 rounded-xl border border-kp-border focus:border-kp-green focus:ring-2 focus:ring-kp-green/20 outline-none transition text-kp-text text-sm"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-kp-text mb-1.5">
          Email Address <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          className="w-full px-4 py-3 rounded-xl border border-kp-border focus:border-kp-green focus:ring-2 focus:ring-kp-green/20 outline-none transition text-kp-text text-sm"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-kp-text mb-1.5">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          className="w-full px-4 py-3 rounded-xl border border-kp-border focus:border-kp-green focus:ring-2 focus:ring-kp-green/20 outline-none transition text-kp-text text-sm"
          placeholder="(360) 555-0100"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-kp-text mb-1.5">
          Subject
        </label>
        <select
          id="subject"
          className="w-full px-4 py-3 rounded-xl border border-kp-border focus:border-kp-green focus:ring-2 focus:ring-kp-green/20 outline-none transition text-kp-text text-sm bg-white"
        >
          <option value="">Select a topic…</option>
          <option value="prescription">Prescription Question</option>
          <option value="transfer">Transfer a Prescription</option>
          <option value="refill">Prescription Refill</option>
          <option value="medicare">Medicare Enrollment</option>
          <option value="wellness">Wellness Classes</option>
          <option value="savings">Prescription Savings</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-kp-text mb-1.5">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-kp-border focus:border-kp-green focus:ring-2 focus:ring-kp-green/20 outline-none transition text-kp-text text-sm resize-y"
          placeholder="How can we help you today?"
        />
      </div>

      <p className="text-xs text-kp-text-muted">
        Please do not include personal health information in this form. For
        medication-specific questions, please call us directly.
      </p>

      <button
        type="submit"
        className="btn-green w-full justify-center text-base py-3.5"
      >
        Send Message
      </button>
    </form>
  );
}
