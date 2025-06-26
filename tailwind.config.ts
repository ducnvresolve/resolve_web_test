import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slidedown-short": {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        "slideup-long": {
          "0%": { transform: "translateY(120px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        "slideup-long-delayed": {
          "0%": { transform: "translateY(120px)", opacity: "0" },
          "50%": { transform: "translateY(120px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        skeleton: {
          "0%": { backgroundColor: "#d1d5db" },
          "50%": { backgroundColor: "#e5e7eb" },
          "100%": { backgroundColor: "#d1d5db" },
        },
        "partners-infinite-carousel": {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-1669px)" },
        },
        "customer-infinite-carousel": {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-1669px)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "bounce-scale": {
          "0%": { transform: "scale(1)" },
          "60%": { transform: "scale(1.13)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slidedown-short": "slidedown-short 0.15s ease-out",
        "slideup-long": "slideup-long 0.3s ease-out",
        "slideup-long-slow": "slideup-long 0.5s ease-out",
        "slideup-long-very-slow": "slideup-long 0.85s ease-out",
        "slideup-long-delayed": "slideup-long-delayed 0.6s ease-out",
        "slideup-long-very-delayed": "slideup-long-delayed 1s ease-out",
        skeleton: "skeleton 1.2s ease-in-out infinite",
        "partners-infinite-carousel":
          "partners-infinite-carousel 15s linear infinite",
        "customer-infinite-carousel":
          "customer-infinite-carousel 15s linear infinite",
        slideInLeft: "slideInLeft 0.8s cubic-bezier(0.4,0,0.2,1) both",
        slideInRight: "slideInRight 0.8s cubic-bezier(0.4,0,0.2,1) both",
        "bounce-scale": "bounce-scale 0.35s cubic-bezier(0.34,1.56,0.64,1)",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
