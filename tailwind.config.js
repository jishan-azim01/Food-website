/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      primary: "#f97316",
      secondary: "#FAB12F",
    },
    fontFamily:{
      sans:["Poppins", "sans-serif"],
    },
    container:{
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl" : "6rem",
        },
    },
    animation: {
      "spin-slow": "spain 20s linear infinite",
    },
    keyframes: {
      spain: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
    },
  },
  },
  plugins: [],
}

