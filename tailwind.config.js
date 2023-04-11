/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "neon-orange":
          "0 0 10px 2px #ff8c00, 0 0 20px 4px #ff8c00, 0 0 30px 6px #ff8c00, 0 0 40px 8px #ff8c00",
      },
    },
  },
  plugins: [require("tailwindcss/plugin")],
};
