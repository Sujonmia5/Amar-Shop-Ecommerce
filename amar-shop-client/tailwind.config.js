/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://i.ibb.co/m8JBknG/Rectangle-1-herder.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#F8DA96",
          "secondary": "#FAF4F4",
          "accent": "#9F9F9F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
