/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      custom1: ["Custom-1", "sans-serif"],
    },
    extend:{
      colors:{
        'purple':{
          100 : '#a06ba8',
          200 : '#7d508b',
          300 : '#5b3a6e',
          400 : '#3e2a5a',
          500 : '#2b1e48',
          }
        },
        keyframes: {
          typing: {
            "0%": {
              width: "0%",
              visibility: "hidden"
            },
            "100%": {
              width: "100%"
            }
          },
          blink: {
            "50%": {
              borderColor: "transparent"
            },
            "100%": {
              borderColor: "white"
            }
          }
        },
        animation: {
          typing: "typing 5s steps(15) infinite alternate, blink 0.7s infinite"
        }
      },
  },
  plugins: [],
}

