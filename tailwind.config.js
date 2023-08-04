/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "#DBF227",
        primaryContent: "#E8FFCE",
        primarySubTitle: "#ACFADF",
        primaryBase: "#94ADD7",
        primaryElse: "#7C73C0",
        primaryBg: "#000000",
      }
    },
  },
  plugins: [],
}