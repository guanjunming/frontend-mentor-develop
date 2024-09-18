/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        yellow: "#f4d04e",
        "gray-950": "#111111",
        "gray-500": "#6b6b6b",
      },
    },
  },
  plugins: [],
};
