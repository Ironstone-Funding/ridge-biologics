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
        ridge: {
          navy:    "#0A1628",
          "navy-light": "#0F2040",
          "navy-mid": "#142952",
          teal:    "#00C5A8",
          "teal-dark": "#009E87",
          "teal-light": "#33D4BC",
          gold:    "#C8A84B",
          "gold-light": "#E2C870",
          slate:   "#4A5568",
          "slate-light": "#718096",
          "off-white": "#F7F9FC",
          "light-gray": "#EDF2F7",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0A1628 0%, #142952 50%, #0F2040 100%)",
        "teal-gradient": "linear-gradient(135deg, #00C5A8 0%, #009E87 100%)",
        "gold-gradient": "linear-gradient(135deg, #C8A84B 0%, #E2C870 100%)",
        "card-gradient": "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
      },
      boxShadow: {
        "glow-teal": "0 0 40px rgba(0, 197, 168, 0.15)",
        "glow-gold": "0 0 40px rgba(200, 168, 75, 0.15)",
        "card-dark": "0 4px 24px rgba(0, 0, 0, 0.3)",
        "card-light": "0 4px 24px rgba(0, 0, 0, 0.08)",
        "nav": "0 1px 0 rgba(255,255,255,0.05)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
