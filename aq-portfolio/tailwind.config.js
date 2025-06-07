/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2c2523",
      black: "#1e1917",
      demo: "#fff",
      white: "#f1e1d9",
      cyan: "#15d1e9",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#fb9718",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",
      offWhite: "#ffffff", // trắng ngà
      ivory: "#f9f7f1", // trắng kem nhẹ
      beige: "#e8e6e1", // be sáng
      lightTaupe: "#d8d2cd", // xám-be nhẹ
      lightGrey: "#cccccc", // xám sáng
      grey: "#999999", // xám trung tính
      darkGrey: "#666666", // xám đậm hơn
      accentBlue: "#d0ecf9", // xanh nhạt điểm nhấn
      accentPeach: "#fce8db", // cam đào rất nhạt
      accentMint: "#e3f8f3", // xanh mint nhạt
    },
    extend: {
      boxShadow: {
        cyanShadow: "0 0 10px 2px rgba(21, 209, 233, 0.5)",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ["Roboto"],
    },
  },
  plugins: [],
};
