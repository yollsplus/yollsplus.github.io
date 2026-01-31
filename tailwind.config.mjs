/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'retro-bg': '#f5f5f0',
				'retro-text': '#2d2d2d',
				'retro-border': '#000000',
				'retro-accent-1': '#ff6b6b', // Coral Red
				'retro-accent-2': '#4ecdc4', // Cyan
				'retro-accent-3': '#ffe66d', // Yellow
			},
			fontFamily: {
				'pixel': ['"Press Start 2P"', 'cursive'],
				'mono': ['"IBM Plex Mono"', 'monospace'],
			},
			boxShadow: {
				'retro': '4px 4px 0px 0px rgba(0,0,0,1)',
				'retro-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
			},
		},
	},
	plugins: [],
}
