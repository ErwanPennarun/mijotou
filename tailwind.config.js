const autoprefixer = require("autoprefixer");

module.exports = {
  content: [
    "./pages/**/*.{js, jsx, ts, tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "main-blue": "#01295f",
        "main-red": "#ea5460",
      },
      gridTemplateColumns: {
        cards: "repeat(auto-fill, minmax(150px, 350px))",
        recettes: "25% 75%",
      },
      keyframes: {
        dropdown: {
          "0%": { transform: "scaleY(0)", "transform-origin": "top center" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        dropdown: "dropdown ease-in-out 0.35s",
      },
    },
  },
  plugins: [],
};
