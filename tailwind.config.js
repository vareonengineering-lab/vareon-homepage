/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3A",
        electric: "#007BFF",
        cyan: { DEFAULT: "#00B8D9" },
        mist: "#F5F7FA",
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
      boxShadow: { soft: "0 10px 30px -12px rgba(11,31,58,.25)" },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-18px)" } },
        dash: { to: { strokeDashoffset: "0" } },
      },
      animation: { float: "float 8s ease-in-out infinite" },
    },
  },
  plugins: [],
};
