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
        varela: ['Varela', ...defaultTheme.fontFamily.mono],
        'roboto-condensed': ['IBM Plex Sans'],
      },
      colors: {
        'bg-dark': '#171717',
        'goldenrod': "#FFC000",
        'primary-gold': "#FACE72",
        "card-dark": "#1F1F1F",
        "card-border": "#525252"
      }
      
    },
  },
  plugins: [],
};
