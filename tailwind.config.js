/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        


"primary": "#5bf215",
        


"secondary": "#ef1f98",
        


"accent": "#0b8e21",
        


"neutral": "#202328",
        


"base-100": "#EBEDEF",
        


"info": "#9BC6EE",
        


"success": "#1B7E53",
        


"warning": "#EFD671",
        


"error": "#E54C3E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}