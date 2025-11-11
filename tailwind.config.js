/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        // Microsoft Blue - Professional & Trustworthy
        primary: "#0078d4",
        "primary-light": "#50e6ff",
        "primary-dark": "#005a9e",
        "dark-bg": "#0a0025",
        accent: "#ff6b35",
      },
    },
  },
  plugins: [],
};
