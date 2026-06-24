import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kp: {
          // Pharmacy greens
          green:          "#2E7D52",
          "green-dark":   "#1C5738",
          "green-mid":    "#39875E",
          "green-light":  "#4FA472",
          "green-pale":   "#EAF3EE",
          "green-ultra":  "#F4FAF6",
          // Healthcare blue accent
          blue:           "#1B6FA8",
          "blue-dark":    "#145482",
          "blue-light":   "#E8F3FB",
          "blue-pale":    "#F0F7FD",
          // Legacy gold (kept so interior pages don't break)
          gold:           "#C8923A",
          "gold-light":   "#D4A84B",
          "gold-dark":    "#A87328",
          "gold-pale":    "#FDF4E7",
          // Warm neutrals
          cream:          "#FBF8F2",
          "cream-dark":   "#F2EDE3",
          // Text
          text:           "#1D2B23",
          "text-body":    "#3C4840",
          "text-muted":   "#677068",
          "text-light":   "#9BAB9E",
          // Borders
          border:         "#D2DAD4",
          "border-light": "#E6EDE8",
        },
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4rem)",      { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 3.5vw, 3rem)",      { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card:         "0 1px 4px rgba(0,0,0,0.06), 0 2px 12px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 20px rgba(0,0,0,0.10)",
        nav:          "0 2px 12px rgba(0,0,0,0.08)",
        button:       "0 2px 8px rgba(46,125,82,0.25)",
      },
      backgroundImage: {
        // Softer gradient — used by interior page heroes
        "hero-green":    "linear-gradient(135deg, #1C5738 0%, #2E7D52 60%, #39875E 100%)",
        "cta-green":     "linear-gradient(135deg, #2E7D52 0%, #1C5738 100%)",
        "cta-gold":      "linear-gradient(135deg, #C8923A 0%, #A87328 100%)",
        "cta-dark":      "linear-gradient(135deg, #1C5738 0%, #132E22 100%)",
        "section-cream": "linear-gradient(180deg, #ffffff 0%, #FBF8F2 100%)",
      },
      animation: {
        "slide-down": "slideDown 0.2s ease forwards",
        "fade-up":    "fadeUp 0.4s ease forwards",
      },
      keyframes: {
        slideDown: {
          "0%":   { opacity: "0", transform: "translateY(-6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
