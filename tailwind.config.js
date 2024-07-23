/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        red: "rgba(255, 92, 92, 1)",
        green: "rgba(33, 194, 105, 1)",
        sky: "rgba(57, 172, 231, 1)",
      },
    },
  },
  plugins: [],
};
