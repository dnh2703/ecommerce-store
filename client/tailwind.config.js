/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        modalOpacity: "modalOpacity 0.5s ease-in-out",
        buy: "buy 0.2s ease-in-out",
      },
      keyframes: {
        modalOpacity: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        arrow: {
          "0%": {
            transform: "translateX(2px)",
          },
          "50%": {
            transform: "translateX(-2px)",
          },
          "100%": {
            transform: "translateX(2px)",
          },
        },
        modalHeight: {
          "0%": {
            height: "0px",
          },
          "100%": {
            height: "80%",
          },
        },
        flames: {
          "0%": {
            fontSize: "20px",
          },
          "50%": {
            fontSize: "28px",
          },
          "100%": {
            fontSize: "20px",
          },
        },
        modalHeight50: {
          "0%": {
            height: "0px",
          },
          "100%": {
            height: "50%",
          },
        },
        buy: {
          "0%": {
            transform: "translateX(0)",
          },
          "20%": {
            transform: "translateX(25px)",
          },
          "40%": {
            transform: "translateX(-25px)",
          },
          "60%": {
            transform: "translateX(10px)",
          },
          "80%": {
            transform: "translateX(-10px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
