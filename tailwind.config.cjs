/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      width: {
        fluid: "min(100% - 2rem, 110rem)",
      },
	  fontFamily: {
		
	  }
    },
  },
  plugins: [],
};
