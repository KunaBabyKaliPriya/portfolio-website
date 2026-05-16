/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a14",
        bg2: "#10101c",
        accent: "#a855f7",
        accent2: "#6366f1",
        accent3: "#22d3ee",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "grad-primary":
          "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #22d3ee 100%)",
        "grad-soft":
          "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(99,102,241,0.15))",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(168,85,247,0.55)",
      },
      keyframes: {
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.1)" },
          "66%": { transform: "translate(-30px,30px) scale(0.95)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        blob: "blob 12s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
