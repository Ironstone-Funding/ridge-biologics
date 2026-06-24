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
          green:          "#2B5F38",
          "green-dark":   "#1E4528",
          "green-mid":    "#367248",
          "green-light":  "#4A8C5C",
          "green-pale":   "#EEF4EF",
          gold:           "#C8923A",
          "gold-light":   "#D4A84B",
          "gold-dark":    "#A87328",
          "gold-pale":    "#FDF4E7",
          cream:          "#F7F5EF",
          "cream-dark":   "#EDE9DF",
          text:           "#2C3E2D",
          "text-muted":   "#6B7B6C",
          "text-light":   "#9CAB9E",
          border:         "#D1D9D3",
          "border-light": "#E5EBE6",
        },
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4rem)",   { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 3.5vw, 3rem)",   { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        section:    "6rem",
        "section-sm": "4rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card:         "0 2px 20px rgba(43, 95, 56, 0.06)",
        "card-hover": "0 8px 40px rgba(43, 95, 56, 0.14)",
        button:       "0 4px 16px rgba(200, 146, 58, 0.32)",
        nav:          "0 1px 24px rgba(43, 95, 56, 0.10)",
      },
      backgroundImage: {
        "hero-green":    "linear-gradient(135deg, #1E4528 0%, #2B5F38 55%, #367248 100%)",
        "cta-green":     "linear-gradient(135deg, #2B5F38 0%, #1E4528 100%)",
        "cta-gold":      "linear-gradient(135deg, #C8923A 0%, #A87328 100%)",
        "cta-dark":      "linear-gradient(135deg, #1E4528 0%, #162F1C 100%)",
        "section-cream": "linear-gradient(180deg, #ffffff 0%, #F7F5EF 100%)",
      },
      animation: {
        "fade-up":    "fadeUp 0.55s ease forwards",
        "slide-down": "slideDown 0.2s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%":   { opacity: "0", transform: "translateY(-6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
