import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				eerie: {
					100: "#d2d2d2",
					200: "#a5a5a6",
					300: "#777779",
					400: "#4a4a4d",
					500: "#1d1d20",
					600: "#17171a",
					700: "#111113",
					800: "#0c0c0d",
					900: "#060606",
				},
			},
			keyframes: {
				"animate-rotate": {
					"0%": {
						transform: "translateY(0)",
						opacity: "1",
					},
					"80%": { opacity: ".7" },
					"100%": {
						transform: "translateY(-800px) rotate(360deg)",
						opacity: "0",
					},
				},
			},
			animation: {
				"animate-rotate": "animate-rotate 10s linear infinite",
			},
		},
		container: {
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
	},
	plugins: [],
};
export default config;
