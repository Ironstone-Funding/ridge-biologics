"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "rb_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage unavailable (SSR or restricted)
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch { /* noop */ }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-rb-navy border-t border-white/10 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
        <p className="text-white/80 text-sm leading-relaxed flex-1">
          This website uses cookies to ensure proper functionality. By continuing to use this site, you consent to our use of cookies.{" "}
          <Link href="/cookies" className="text-rb-teal-light underline underline-offset-2 hover:text-white transition-colors">
            Learn More
          </Link>
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 px-6 py-2 bg-rb-teal hover:bg-rb-teal-dark text-white text-sm font-semibold rounded-lg transition-colors duration-200"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
