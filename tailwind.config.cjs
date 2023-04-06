/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      colors: {
      primary: "hsl(25, 97%, 53%)",
          white: "hsl(0, 0%, 100%)",
          lt_grey: "hsl(217, 12%, 63%)",
          md_grey: "hsl(216, 12%, 54%)",
          md_blue: "hsl(213, 19%, 18%)",
          dk_blue: "hsl(216, 12%, 8%)",
        },
      fontFamily: {
        body: ["Overpass", "sans-serif"],
      },
      fontSize: {
        norm: "15px",
      },
      fontWeight: {
        400: "400",
        700: "700",
      },
    },
  },
  plugins: [],
};
