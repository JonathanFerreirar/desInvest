/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#3490dc",
        danger: "#e3342f",
      },
    },
  },
  plugins: [],
};
