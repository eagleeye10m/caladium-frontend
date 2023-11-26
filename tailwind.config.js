/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        buttons_color: "#076E48",
      },
      boxShadow: {
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 1px 6px 2px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
