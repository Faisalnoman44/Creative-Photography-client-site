/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#3cc1b2",

          "secondary": "#a1bf0b",

          "accent": "#fff4bf",

          "neutral": "#322C3A",

          "base-100": "#F5F2F8",

          "info": "#82BFE3",

          "success": "#1A7544",

          "warning": "#EFB60B",

          "error": "#E87892",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
