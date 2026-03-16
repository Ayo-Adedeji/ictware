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
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
