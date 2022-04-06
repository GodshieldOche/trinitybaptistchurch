module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary-black': '#141313',
      'secondary-black': '#272525',
      'primary-white': '#F5F5F5',
      'secondary-white': '#FEF9F9',
      'primary-dark': '#5481A8',
      'primary-light': '#6665FE',
      'secondary-one': '#B8FEB8',
      'secondary-two': '#6EFEFE',
    },
    container: {
      center: true,
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    }
  },
  plugins: [],
}
