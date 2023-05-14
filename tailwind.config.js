/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'transparent': 'transparent',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'border-light': 'rgba(0,0,0,.12)',
      'border-dark': 'rgba(255,255,255,.12)',
    },
    fontFamily: {
      sans: ['Asap', 'sans-serif']
    },
  },
  plugins: [],
}

