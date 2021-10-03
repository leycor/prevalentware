module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      mdNav: '850px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      margin:{
        '-Nmedium': '-100%',
      },
      
      colors: {
        navColor: '#2F3337'
      }
    },
    fontFamily: {
      roboto:['Roboto']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
