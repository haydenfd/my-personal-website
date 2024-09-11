const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        nav: ['Ubuntu', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'bg-dark': '#1B1918',
      }
      
    },
  },
  plugins: [],
};
