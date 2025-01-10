/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html', 
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#233277",
        gold: "#d4af37",
      },
      backgroundColor:{
        primary: "#233277",
        secondary: "#d4af37",
        tertiary: "#f5f5f5",
      },
      fontFamily: {
        openSans: [ '"Tajawal", Arial, Helvetica, sans-serif'],
        cinzel: ['"Cinzel"', 'serif'],
        archivo:['"Archivo", sans-serif']
      },
    },
  },
  plugins: [],
};
