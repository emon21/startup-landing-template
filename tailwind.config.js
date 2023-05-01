/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
        custom: ['Hanken Grotesk', 'sans-serif'],
      },
    extend: {
        colors:{
            btnprimary:"#008AFF",  
            },

        },
        
  
    container: {
        center: true,
        padding: "0rem",
        screens: {
            sm: "600px",
            md: "728px",
            lg: "920px",
            xl: "1024px",
            "2xl": "1320px",
        },
    },
  },
  plugins: [],
}
