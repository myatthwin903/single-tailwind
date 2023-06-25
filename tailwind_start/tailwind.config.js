/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary:{
          100:"#18181b",
          200:"#27272a",
          300:"#3f3f46"
        },
        secondary:{
          100:"#f1f5f9",
          200:"#94a3b8",
          300:"#0f172a"
        },
        accent:{
          100:"#164e63"
        },
      },
      fontFamily:{
        'roboto':['Roboto Mono']
      }
    },
  },
  plugins: [],
}

