/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navText: "#171a20",
        transparent1: "rgba(0,0,0,0)",
      },
    },
  },
  plugins: [],
};
