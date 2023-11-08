/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			MartianMono: ["Martian Mono", "monospace"],
			BrickGrotesque: ["Bricolage Grotesque", "sans-serif"],
		  },
		  colors:{
			dark: "#0f0f0f",
			light: "#6c6c6c",
		  }
		},
	  },
	plugins: [],
}
