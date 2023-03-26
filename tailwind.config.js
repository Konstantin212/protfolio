/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: 'rgb(2 35 60 / 90%)',
          DEFAULT: 'rgba(255, 144, 0, 0.9)',
        },
        'dark-primary-text': 'rgba(255, 144, 0, 0.9)',
      },
      fontFamily: {
        kaushan: 'Kaushan Script',
        'space-mono': 'Space Mono, monospace',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
