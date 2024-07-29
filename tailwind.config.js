/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.{html,js,handlebars}',
  ],
  theme: {
    extend: {
       colors: {
        primary: '#7D67F6', 
        secondary:"#E2432E",
        tertiary:"#F1BC27",
      },
    },
  },
  plugins: [],
}
