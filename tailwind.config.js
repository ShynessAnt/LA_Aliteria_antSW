/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B4513", // Color marrón chocolate
        secondary: "#D2691E", // Naranja tostado
        accent: "#FFD700", // Dorado
        dark: "#2C1810", // Marrón oscuro
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
