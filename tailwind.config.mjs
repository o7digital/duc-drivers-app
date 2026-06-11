/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        city: {
          bg: "#020617",
          panel: "#07111F",
          card: "#0F172A",
          cyan: "#22D3EE",
          blue: "#60A5FA",
          green: "#34D399",
          amber: "#FBBF24",
          red: "#FB7185",
          text: "#F8FAFC",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(34, 211, 238, 0.22)",
        panel: "0 32px 90px rgba(0, 0, 0, 0.32)",
      },
    },
  },
  plugins: [],
};
