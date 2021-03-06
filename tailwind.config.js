const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        gray: colors.blueGray,
        lightblue: colors.lightBlue
      },
      zIndex: {
        '-10': '-10'
      }
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover']
    },
  },
  plugins: [],
}
