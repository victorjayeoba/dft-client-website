/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],

  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        center: true,
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '768px',
        xl: '1024px',
      },
    },
    extend: {},
  },
  plugins: [],
}

