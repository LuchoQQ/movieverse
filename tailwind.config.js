module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // primary: "#202020",
        // secondary: "#131313",
        primary: "#202020",
        secondary: "#131313",
        bgModal: "rgba(0, 0, 0, 0.4)",
      },
      screens:{
        "3xl":"2000px",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
