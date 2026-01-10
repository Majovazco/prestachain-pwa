/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '6': '1.5rem',
        '8': '3rem',
      }
    },
  },
  plugins: [require("daisyui")],
}