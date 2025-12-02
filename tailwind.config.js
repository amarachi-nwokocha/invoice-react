/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: "#11253D",
        yellow: "#FCB714",
        brightBackGround: '#FDF8EE',
         lightText: '#959595',
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
       fontFamily: {
        neue: ["NeueHaasDisplayBlack", "sans-serif"],
      },
    },
  },
  plugins: [],
}

