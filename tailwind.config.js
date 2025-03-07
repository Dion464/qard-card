/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'qard-blue': '#50ABFF',
        'qard-dark': '#0A1929',
        'qard-gray': '#1E293B',
      },
      fontFamily: {
        helvetica: ['Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 