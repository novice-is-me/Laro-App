/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      },
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

