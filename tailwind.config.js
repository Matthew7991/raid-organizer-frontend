/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        highlight: "#A6C3A7",
        greenmiddle: "#112523",
        darkgreen: "#101A19",
      },
    },
  },
  plugins: [],
}
