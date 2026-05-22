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
        rb: {
          navy:        "#284454",
          "navy-dark": "#1e3340",
          "navy-mid":  "#2f5066",
          "navy-light":"#3a6278",
          teal:        "#38747e",
          "teal-dark": "#2a5f69",
          "teal-light":"#4a8f9a",
          "teal-pale": "#e8f2f4",
          "slate":     "#f0f4f6",
          "slate-mid": "#dde7eb",
          "slate-dark":"#b8cdd4",
          "text-body": "#3d5a68",
          "text-muted":"#7a9aaa",
          "brass":     "#a0826d",
          "charcoal":  "#1a1a1a",
        },
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        serif:   ['"Cormorant Garamond"', "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 3.5vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "7rem",
        "section-sm": "5rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        "card":       "0 2px 20px rgba(40, 68, 84, 0.08)",
        "card-hover": "0 8px 40px rgba(40, 68, 84, 0.14)",
        "nav":        "0 1px 0 rgba(40, 68, 84, 0.08)",
        "button":     "0 4px 16px rgba(56, 116, 126, 0.25)",
        "inset-nav":  "inset 0 -1px 0 rgba(255,255,255,0.08)",
      },
      backgroundImage: {
        "hero-dark":    "linear-gradient(160deg, #1e3340 0%, #284454 55%, #2a5f69 100%)",
        "section-teal": "linear-gradient(135deg, #284454 0%, #38747e 100%)",
        "card-subtle":  "linear-gradient(145deg, #ffffff 0%, #f0f4f6 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
