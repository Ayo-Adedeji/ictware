/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A4F8A",   // Deep Blue — trust, professionalism
        teal: "#0E8E8E",      // Teal — innovation, connectivity
        gold: "#C89B2A",      // Gold — excellence, premium
        secondary: "#1A1A2E", // Deep dark for text
        neutral: "#FFFFFF",
        navy: {
          950: "#0B1220",
          800: "#16233D",
        },
        amber: {
          500: "#D4A24C",
        },
        bone: {
          50: "#F7F3EC",
        },
        slate: {
          400: "#8B93A7",
        },
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
        heading: ['"Fraunces"', "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        "assemble-in": {
          "0%": { opacity: "0", transform: "translate(var(--tx, 0), var(--ty, 0)) scale(var(--ts, 1)) rotate(var(--tr, 0))" },
          "100%": { opacity: "1", transform: "translate(0,0) scale(1) rotate(0)" },
        },
      },
      animation: {
        "assemble-in": "assemble-in var(--td, 500ms) cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};
