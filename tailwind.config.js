module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      screens: {
        'mdNav': '870px',
      },
      margin:{
        '-Nmedium': '-100%',
      },
      
      colors: {
        navColor: '#2F3337',
        bodyColor: '#E5E7EB',
        blackSecond: '#424242',
        mainBlue: '#26B4FF'
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
