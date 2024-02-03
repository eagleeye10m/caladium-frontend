/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // tv: { min: "1200px" },
      // pc: { min: "992px", max: "1200px" },
      // laptop: { min: "768px", max: "992px" },
      // tablet: { max: "768px" },
      // iphone: { min: "480px" },
      // galaxy: { min: "360px" },
      // ipad: { min: "360px" },

      xl: { min: "1279px" },
      xl_two: { max: "1279px" },
      lg: { min: "991px" },
      lg_two: { max: "991px" },
      md: { min: "767px" },
      md_two: { max: "767px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        buttons_color: "#07676ed5",
      },
      boxShadow: {
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 1px 6px 2px rgb(0 0 0 / 0.1)",
        md: "0 10px 10px -3px rgb(0 0 0 / 0), 0 -3px 21px -2px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
