/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background1': 'var(--background1)',
        'background2': 'var(--background2)',
        'text1': 'var(--text1)',
        'text2': 'var(--text2)',
        'link': 'var(--link)',

      }
    },
  },
  plugins: [],
}

