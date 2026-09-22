/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["DM Sans", "sans-serif"], display: ["Space Grotesk", "sans-serif"] },
      colors: { ink: "#173d32", paper: "#e9f6f5", cream: "#ffffff", fern: "#47764f", coral: "#59cf52", sun: "#b8e1df", muted: "#55716c", line: "#cce5e3" },
    },
  },
  plugins: [],
};
