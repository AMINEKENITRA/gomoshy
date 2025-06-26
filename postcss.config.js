/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#ffe6f0',
          200: '#ff99c1',
          400: '#ff66b2',
          600: '#cc3399',
          700: '#b32e87',
          900: '#330033',
        },
      },
    },
  },
  plugins: [],
};
