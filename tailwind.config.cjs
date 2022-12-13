/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      width: {
        fluid: "min(100% - 2rem, 110rem)",
      },
      fontFamily: {
        titan: ["Titan One", "cursive"],
      },
      colors: {
        dark: "hsl(223, 9%, 14%)",
        light: "hsl(0, 0%, 68%)",
      },
    },
  },
  plugins: [],
};
