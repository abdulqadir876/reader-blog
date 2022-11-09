/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // 'gray-dark': '#393943',
      'gray-dark': '#1e1e1e',
      'gray': '#616870',
      // 'gray-light': '#AAABAF',
      'gray-light': '#e8e8e8',
      'light': '#f7f7f7'
      // 'light': 'rgb(241 245 249)'

    },
    fontFamily: {
      sans: ['poppins', 'sans-serif'],
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}