import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        sans: ['"Manrope"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "var(--max-width)",
      },
      boxShadow: {
        glow: "0 20px 80px rgba(201, 162, 39, 0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
