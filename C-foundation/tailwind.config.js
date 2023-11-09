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
      },
      backgroundImage: {
        "hero-image": "url('assets/smilling-children.jpg')"
      },
      screens: {
        "xss": "420px",
        "mlg": "1200px",
        "mxl": "1470px"
      },
      fontFamily: {
        primaryfont: ["DM Sans"],
        secfont: ["Zen Old Mincho"],
        boldFont: ["Manrope"],
      },
    },
  },
  plugins: [],
}

