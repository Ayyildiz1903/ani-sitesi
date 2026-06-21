import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: "#08060F",
        murdum: {
          DEFAULT: "#3D0A52",
          light:   "#6B2D8B",
          pale:    "#9B59B6",
          glow:    "#C77DFF",
        },
        gold: {
          DEFAULT: "#C9A96E",
          pale:    "#E8C97A",
          dim:     "#8B6B3A",
        },
        paper: "#F2EDE4",
      },
      fontFamily: {
        serif:    ["'Cormorant Garamond'", "Georgia", "serif"],
        display:  ["'Playfair Display'", "serif"],
        script:   ["'Dancing Script'", "cursive"],
        sans:     ["'Inter'", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow":  "floatSlow 8s ease-in-out infinite",
        "pulse-glow":  "pulseGlow 3s ease-in-out infinite",
        "drift":       "drift 20s linear infinite",
        "wing-open":   "wingOpen 1s cubic-bezier(0.34,1.56,0.64,1) forwards",
      },
      keyframes: {
        floatSlow: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%":     { transform: "translateY(-12px) rotate(2deg)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.4", filter: "blur(8px)" },
          "50%":     { opacity: "0.8", filter: "blur(4px)" },
        },
        drift: {
          "0%":   { transform: "translateX(0) translateY(0)" },
          "100%": { transform: "translateX(-100px) translateY(100vh)" },
        },
        wingOpen: {
          from: { transform: "scaleX(0.1)", opacity: "0.5" },
          to:   { transform: "scaleX(1)", opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
