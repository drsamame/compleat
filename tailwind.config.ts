import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
				screens: {
					xl: '1120px',
					'2xl': '1296px',
				},
			},
			colors: {
				background: 'var(--background)',
				base: '#212529',
				light: {
					400: '#f8f9fa',
				},
				gray: {
					200: '#c2d4da',
					300: '#6c757d',
					400: '#dee2e6',
					500: '#e9ecef',
				},
				orange: '#fd7e14',
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans],
			},
			backgroundImage: {
				arrow: "url('/images/glyph_arrow_down.webp')",
				degrade: "url('/images/bg_degrade.webp')",
				degradem: "url('/images/bg_degrade_m.webp')",
				service1: "url('/images/service1.webp')",
				service2: "url('/images/service2.webp')",
				bannerProduct: "url('/images/sachets_compleat_1.webp')",
				bannerBlog: "url('/images/blogbg.webp')",
				star: "url('/images/star.webp')",
			},
		},
	},
	plugins: [],
};
export default config;
