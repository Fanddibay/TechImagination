/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "red-custom-100": "#E63946",
        "red-custom-200": "#C23A2C",
        "deep-blue": "#1D3557",
        "ocean-blue": "#A8DADC",
        "sand-100": "#F1FAEE",
        "background-img": "#F9F9F9",
        "text-color": "#5a5a5a",
      },
    },
  },
  plugins: [],
};
