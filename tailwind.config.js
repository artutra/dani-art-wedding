/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        italiana: ["Italiana", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        'moss': '#577453',
        'terracotta': '#B02C0C',
        'primary': '#FCF7FF',
        'secondary': '#878C8F',
      }
    },
  },
  plugins: [],
}

