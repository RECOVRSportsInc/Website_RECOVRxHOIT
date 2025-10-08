/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        recovr: { navy: "#0A2240", blue: "#1E4DD8", light: "#61B5E4", gold: "#D4AF37" },
        hoit:   { purple: "#8B5CF6", lilac: "#E9D5FF", peach: "#FFD1B5", mint: "#CFFAEA", sky: "#CDEBFF", navy: "#0F2A3C" }
      }
    }
  },
  plugins: []
}
