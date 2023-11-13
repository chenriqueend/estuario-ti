const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        tarawera: "#253D47",
      },
      colors: {
        lima: "#DAFF00",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        "365px": "365px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
