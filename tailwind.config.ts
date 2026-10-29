import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F7F5F0",
          warm: "#F7F5F0",
          card: "#FFFFFF",
          muted: "#EFECE6",
        },
        ink: {
          DEFAULT: "#202923",
          primary: "#202923",
          secondary: "#505B53",
          muted: "#7B867E",
        },
        forest: {
          DEFAULT: "#2F5D50",
          hover: "#254B40",
          dark: "#1C3730",
          light: "#3E7465",
        },
        sage: {
          DEFAULT: "#E8EEE8",
          subtle: "#F1F5F1",
          deep: "#D0DCD0",
        },
        terracotta: {
          DEFAULT: "#B75C3B",
          hover: "#9C4D30",
          subtle: "#FDF4F0",
          muted: "#C87456",
        },
        rule: {
          border: "#DDDCD4",
          subtle: "#EAE8E0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      maxWidth: {
        content: "1220px",
      },
      boxShadow: {
        editorial: "0 1px 3px rgba(32, 41, 35, 0.05), 0 1px 2px rgba(32, 41, 35, 0.03)",
        elevated: "0 10px 25px -5px rgba(32, 41, 35, 0.07), 0 8px 10px -6px rgba(32, 41, 35, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
