/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import TailwindCssAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./Layout/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ["GeneralSans", "ui-sans-serif", "system-ui"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      xs: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      width: {
        Hug: "372px",
        fixed: "365px",
      },
      height: {
        Hug: "372px",
        fixed: "196px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#003464",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#f1f1f1",
          foreground: "hsl(var(--secondary-foreground))",
        },
        third: {
          DEFAULT: "#D9D9D9",
          foreground: "hsl(var(--secondary-foreground))",
        },
        fourth: {
          DEFAULT: "#407BFF",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        radius_none: "0rem",
        radius_xxs: "0.125rem",
        radius_xs: "0.25rem",
        radius_sm: "0.375rem",
        radius_md: "0.5rem",
        radius_lg: "0.625rem",
        radius_xl: "0.75rem",
        radius_2xl: "1rem",
        radius_3xl: "1.25rem",
        radius_4xl: "1.5rem",
        radius_full: "",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        loader: "loader 1s linear infinite forwards",
      },
    },
  },
  plugins: [TailwindCssAnimate],
} satisfies Config;

export default config;
