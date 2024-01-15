/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'work': ['Work Sans', 'sans-serif'],
      },
      boxShadow: {
        'gray': ['0px 8px 35px 0px rgba(0, 0, 0, 0.05)']
      },
    },
  },
  plugins: [],
}

