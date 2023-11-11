/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./views/**/*.ejs`], // all .html files
  // mode: "jit",
  // purge: ["./views/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["valentine"],
  },
};
