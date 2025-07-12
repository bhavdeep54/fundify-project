/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      brandBlue: '#00BFFF',
      brandGreen: '#00FF7F',
    },
  },
},

  plugins: [],
};
