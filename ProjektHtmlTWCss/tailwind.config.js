/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        'bg-gray': '#F6F7FB',
        'btn-color':'#1d4a80',
        'text-color':'#5B637F',
      },
      fontFamily: { 
        "circular": ['Circular', 'sans-serif']
      } 
    },
  },
  plugins: [],
}


