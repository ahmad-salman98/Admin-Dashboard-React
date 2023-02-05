/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xsm: "0px",
      sm: "480px",
      mds: "600px",
      md: "768px",
      lg: "976px",
      xlg: "1024px",
      xl: "1440px",
      xxl: "2000px",
    },

  },
  plugins: [],
}
