/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        bgNavbar : '#83A2FF',
        bgWeather : '#B4BDFF',
        bgNews : '#E0F4FF'
      },
      fontFamily : {
        fontName : ["Roboto Slab", "serif"],
      }
    },
  },
  plugins: [],
}

