/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["YakuHanJP", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Meiryo", "sans-serif"],
      },
      colors: {
        black: "#594638",
        main: "#D6225B",
        second: "#fbc3d3",
      },
    },
  },
  plugins: [],
};
