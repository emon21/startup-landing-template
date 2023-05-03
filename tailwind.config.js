/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    colors: {
      primary: '#008AFF',
      secondary: '#222D39',
      gray: '#8492A7',
      white: '#ffffff',
    },
    fontFamily: {
      custom: ['Hanken Grotesk', 'sans-serif'],
    },

    container: {
      center: true,
      padding: '0rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '920px',
        xl: '1024px',
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
