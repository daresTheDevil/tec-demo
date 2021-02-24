const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './app/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/components/*.html.erb',
    './app/components/*.rb',
    './app/javascript/controllers/*.js',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],

  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        overlay: '9999',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        // sans: ['Public Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        rose: colors.rose,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        blue: colors.blue,
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        green: colors.green,
        lime: colors.lime,
        yellow: colors.yellow,
        amber: colors.amber,
        orange: colors.orange,
        red: colors.red,
      },
    },
  },

  variants: {
    extend: {
      // ...
      cursor: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
