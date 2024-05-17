/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      custom1: ["Custom-1", "sans-serif"],
    },
    extend: {
      colors: {
        background: "#0C1821",
        "blue-background": "#1B2A41",
        "blue-foreground": "#324A5F",
        "light-green": "#A3F7B5",
        selected: "#92140C",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 5s steps(15) infinite alternate, blink 0.7s infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
