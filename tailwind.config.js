/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('./src/assets/images/bg-sidebar-mobile.svg')",
        desktop: "url('./src/assets/images/bg-sidebar-desktop.svg')",
      },
      fontFamily: {
        normal: ["Ubuntu-Regular", "sans-serif"],
        medium: ["Ubuntu-Medium", "sans-serif"],
        bold: ["Ubuntu-Bold", "sans-serif"],
      },

      colors: {
        // Primary
        marineblue: "hsl(213, 96%, 18%)",
        purplishblue: "hsl(243, 100%, 62%)",
        pastelblue: "hsl(228, 100%, 84%)",
        lightblue: "hsl(206, 94%, 87%)",
        strawberryred: "hsl(354, 84%, 57%)",

        // Neutral
        coolgray: "hsl(231, 11%, 63%)",
        lightgray: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
