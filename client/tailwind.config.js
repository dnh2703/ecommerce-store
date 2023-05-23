/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        modalOpacity: "modalOpacity 0.5s ease-in-out",
        buy: "buy 0.2s ease-in-out",
        truck: "truck 3s ease-in-out",
        way: "way 3s ease-in-out",
        "fade-in": "fadeIn 0.3s ease-in forwards",
        "fade-out": "fadeOut 0.3s ease-out forwards",
        truck: "truck 2s ease-in-out",
        way: "way 2s ease-in-out",
        "fade-in": "fadeIn 0.3s ease-in forwards",
        "fade-out": "fadeOut 0.3s ease-out forwards",
      },
      keyframes: {
        truck: {
          "0%": {
            color: "#ffbc12",
            border: "1px solid #ffbc12",
            right: "97%",
          },
          "100%": {
            color: "#6e2f1b",
            border: "1px solid #6e2f1b",
            right: "-3%",
          },
        },
        way: {
          "0%": {
            backgroundColor: "#ffbc12",
            width: "0",
          },
          "100%": {
            backgroundColor: "#6e2f1b",
            width: "100%",
          },
        },
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
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
