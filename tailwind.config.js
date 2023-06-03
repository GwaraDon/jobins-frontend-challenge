/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        primary: "#0F60FF",
        success: " #1EB564",
        danger: "#EA5455",
        muted: "#8B909A",
      },
    },
  },
  plugins: [],
};
