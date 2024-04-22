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
        sans: ["Barlow, sans-serif"],
      },
      spacing: {
        "365px": "365px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
