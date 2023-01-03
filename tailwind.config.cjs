/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crypto-blue': '#0b3562',
        'urbana-gray': '#9e9d9d',
        'crypto-light-gray': '#c0c0c0',
        'urbana-blue': '#04003b',
        'crypto-dark-gray': '#666666',
      }
    },
  },
  plugins: [],
}