/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        desktop: "1200px",
      },
    },
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
      screens: {
        md: "950px",
      },
      colors: {
        primary: {
          100: "#ffc48e",
          200: "#ffa757",
          300: "#ff9839",
          400: "#ff891e",
          500: "#ff7c04",
          600: "#f17300",
          700: "#dc6900",
          800: "#c35d00",
          900: "#a85000",
        },
        secondary: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2a37",
          900: "#111928",
        },
        danger: {
          100: "#fde8e8",
          200: "#fbd5d5",
          300: "#f8b4b4",
          400: "#f98080",
          500: "#f05252",
          600: "#e02424",
          700: "#c81e1e",
          800: "#9b1c1c",
          900: "#771d1d",
        },
        warning: {
          100: "#fdf6b2",
          200: "#fce96a",
          300: "#faca15",
          400: "#e3a008",
          500: "#c27803",
          600: "#9f580a",
          700: "#8e4b10",
          800: "#723b13",
          900: "#633112",
        },
        success: {
          100: "#def7ec",
          200: "#bcf0da",
          300: "#84e1bc",
          400: "#31c48d",
          500: "#0e9f6e",
          600: "#057a55",
          700: "#046c4e",
          800: "#03543f",
          900: "#014737",
        },
      },
      fontFamily: {
        default: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        shadow1: "2px 2px 6px 0px rgba(164, 165, 172, 0.2)",
        shadow2: "4px 4px 12px 0px rgba(101, 104, 114, 0.2)",
        shadow3: "8px 8px 28px 0px rgba(52, 58, 72, 0.2)",
        shadow4: "12px 12px 28px 0px rgba(77, 81, 92, 0.2)",
        shadow5: "14px 14px 32px 0px rgba(52, 58, 72, 0.2)",
        shadow6: "14px 14px 38px 0px rgba(24, 24, 24, 0.2)",
        shadowbtn: "4px 4px 12px rgba(0, 0, 0, 0.10)",
        shadownavBar:
          "rgba(0, 0, 0, 0.1) 0px 4px 15px -8px, rgba(0, 0, 0, 0.04) 0px 1px 10px -5px;",
      },
    },
  },
  plugins: [],
};

//button: "4px 4px 12px rgba(0, 0, 0, 0.10)",
