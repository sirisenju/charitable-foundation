/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-color": "#FFEEDD",
        "primary-bg": "#F8F7FF",
        "secondary-bg": "#B8B8FF",
      }
    },
  },
  plugins: [],
}

