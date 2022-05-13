module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        "height": "height"
      }
    },
  },
  plugins: [require("postcss"), require("tailwindcss")],
}
