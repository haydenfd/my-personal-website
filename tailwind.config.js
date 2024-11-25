const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        'roboto-condensed': ['IBM Plex Sans'],
      },
      colors: {
        'bg-dark': '#171717',
        'primary-gold': "#FACE72",
        "card-dark": "#1F1F1F",
        "card-border": "#525252",
        "muted-gray-color": "#999",
        "primary-yellow-color": "#fcd37a",
        "base-button-color": "#bbb",
      },
      boxShadow: {
        'yellow': '0 -2px 4px -1px #fcd37a, 0 4px 6px -1px #fcd37a, 0 2px 4px -1px #fcd37a',
      },
      
    },
  },
  plugins: [],
};
