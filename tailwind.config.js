
module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '113':'113px'
      },
      height: {
        '209': "209px"
      },
      rotate: {
        '47': '47deg'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
