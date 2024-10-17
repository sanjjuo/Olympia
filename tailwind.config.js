/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        appBlue: '#0073CF'
      },
      fontFamily: {
        Outfit: ["Outfit-Regular", "sans-serif"],
        Outfitmd: ["Outfit-Medium", "sans-serif"],
        Outfitbold: ["Outfit-Bold", "sans-serif"],
        StrikeRegular: ["Strike-Regular", "sans-serif"],
      }
    },
  },
  plugins: [],
}

