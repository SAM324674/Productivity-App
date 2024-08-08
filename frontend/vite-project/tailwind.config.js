/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "yellow":'#55efc4',
        "green":'#55efc4'
      }
    },
  },
  plugins: [
    function({addUtilities}){
      addUtilities({
        /* Define custom scrollbar width styles here */
        '.scrollbar-thin::-webkit-scrollbar': {
          width: '4px',  /* Adjust the width as needed */
          height: '4px', /* Adjust the height as needed */
        }
      })
    }
  ],
}