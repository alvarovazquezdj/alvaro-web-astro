import animations from 'tailwindcss-animated'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff7d00',
        gray: 'rgba(17, 17, 17, 0.5)'
      },
      backgroundImage: {
        starfield: 'url(/background.gif)'
      },
      screens: {
        medium: '468px',
        mobile: '411px',
        tablet: '721px',
        laptop: '890px'
      }
    }
  },
  plugins: [animations]
}
