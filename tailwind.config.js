/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#C12929",
        darkred:'#8D0000'

      },
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
        'alegreya':['Alegreya', 'serif'],
        'plaster':['Plaster', 'cursive'],
        'limelight':['Limelight', 'cursive']
      }
    },
  },
  plugins: [],
}

