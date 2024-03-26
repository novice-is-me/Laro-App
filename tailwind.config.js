/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      '832px': { 'max': '832px' },
      '770px': { 'max': '770px' },

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }

      colors:{
        'orange' : '#FA5000',
        'bgColor': '#FFF6F2'
      },
      dropShadow:{
        shadowBtn : '0px 5px 1px rgba(0,0,0,0.16 )'
      }
    },
  },
  plugins: [],
}

      
