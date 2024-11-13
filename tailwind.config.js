/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary_bg: '#334B35',
        second_bg: '#263C28',
        aksen_bg: '#6D8C54',
        primary_text: '#FFFFFF',
        second_text: '#F7C35F',
      },
    },
  },
  plugins: [],
}