/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD200",
        gray: "rgba(17, 17, 17, 0.5)",
      },
      backgroundImage: {
        starfield: "url(/background.webp)",
      },
      screens: {
        medium: "468px",
        mobile: "411px",
        tablet: "721px",
        laptop: "890px",
      },
    },
  },
  plugins: [],
};
