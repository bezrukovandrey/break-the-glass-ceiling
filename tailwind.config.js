/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        sandy : '#fbf8ca',
        lightPurple: '#a13f80',
        mainPurple: '#5e1043',
        darkPurple: '#360827',
        white: '#ffffff',
    },
    fontFamily: {
      merriweather: ['Merriweather', 'sans-serif'],
      poppins: ['Poppins', 'serif'],
    },
    fontSize: {
      'xs': '14px',
      's' : '16px',
      'm': '20px',
      'l': '25px',
      'xl': '31.25px',
      'xxl': '39.1px'
    },
  },
  plugins: []
}, }
