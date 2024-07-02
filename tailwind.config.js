/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-vue/**/*.{vue,js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{vue,js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '16rem'
      }
    },
    extend: {}
  },
  plugins: []
}
