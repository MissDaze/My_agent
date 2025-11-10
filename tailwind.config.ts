import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3b82f6',
          dark: '#1e40af'
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
    }
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};

export default config;// tailwind.config.ts

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette
        "deep-blue": {
          50: "#f0f7ff",
          100: "#e0eeff",
          500: "#0A2540", // Deep Professional Blue
          900: "#051428",
        },
        "trust-blue": {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#1E40AF", // Trust Blue
          900: "#1e3a8a",
        },
        "ocean": {
          50: "#f8fafc",
          500: "#0F172A", // Ocean Depth
          900: "#020617",
        },
        // Neutrals
        "neutral": {
          white: "#FFFFFF",
          "soft-gray": "#F8FAFC",
          "border-gray": "#E2E8F0",
          "text-gray": "#64748B",
          "deep-gray": "#334155",
        },
        // Accents
        "electric-cyan": "#06B6D4",
        "amber": "#F59E0B",
        "slate-purple": "#8B5CF6",
        // Semantic
        "success": "#10B981",
        "error": "#EF4444",
        "warning": "#F59E0B",
        "info": "#3B82F6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        display: ["1.875rem", { fontWeight: "700", letterSpacing: "-0.02em" }],
        "hero-headline": ["1.5rem", { fontWeight: "700", letterSpacing: "-0.02em" }],
        "page-title": ["2.25rem", { fontWeight: "600" }],
        "section-header": ["1.875rem", { fontWeight: "600" }],
        "card-title": ["1.25rem", { fontWeight: "600" }],
        "body-large": ["1.125rem", { fontWeight: "400", lineHeight: "1.75" }],
        "body": ["1rem", { fontWeight: "400" }],
        "small": ["0.875rem", { fontWeight: "400" }],
        "caption": ["0.75rem", { fontWeight: "500", letterSpacing: "0.1em", textTransform: "uppercase" }],
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      borderRadius: {
        xs: "0.25rem",
        sm: "0.375rem",
        base: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
      },
      boxShadow: {
        sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
                               
