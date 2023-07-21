/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        button: "#FF7C04",
      },
      fontWeight: {
        button: 500,
        thin: 400,
      },
      borderRadius: {
        default: "5px",
      },
      backgroundColor: {
        button: "#FF7C04",
      },
      fontFamily: {
        default: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
