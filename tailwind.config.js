/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      // => @media (min-width: 320px)
      sm: "374px",
      // => @media (min-width: 374px)
      md: "768px",
      // => @media (min-width: 768px)

      lg: "1024px",
      // => @media (min-width: 1024px)

      xl: "1280px",
      // => @media (min-width: 1280px)

      "2xl": "1440px",
      // => @media (min-width: 1440px)
    },
    colors: {
      // our website primary color
      primary: "#00F3A1",
      // our website secondary color
      secondary: "#12FFFE",
      // our website dark color
      dark: "#040C18",
      // default white color
      white: "#FFFFFF",
      // our web green light color
      lightGreen: "#93CCC8",
      black:'#000000'
    },
    extend: {},
  },
  plugins: [],
};
