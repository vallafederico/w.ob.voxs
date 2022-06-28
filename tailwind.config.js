/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
        display: ["Work Sans"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#EAE8DE",
      black: "#282A2B",
      red: "#EF8733",
      light: "#FBFAF1",
    },
  },
  plugins: [],
};
