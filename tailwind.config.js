/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    fontFamily: {
      KumbhSans: ['Kumbh Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        DarkCyan: 'hsl(185, 75%, 39%)',
        DesaturatedBlue: 'hsl(229, 23%, 23%)',
        GrayishBlue: 'hsl(227, 10%, 46%)',
        DarkGray: 'hsl(0, 0%, 59%)',
      }
    },
  },
  plugins: [],
}

