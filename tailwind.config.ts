import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import tailWindAnimate from 'tailwindcss-animate';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '2rem',
				screens: {
					xl: '1120px',
					'2xl': '1296px',
				},
			},
			colors: {
				background: 'var(--background)',
				base: '#212529',
				light: {
					'400': '#f8f9fa',
				},
				gray: {
					'200': '#c2d4da',
					'300': '#6c757d',
					'400': '#dee2e6',
					'500': '#e9ecef',
					'600': '#808080',
				},
				orange: '#fd7e14',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans],
			},
			backgroundImage: {
				arrow: 'url("/images/glyph_arrow_down.webp")',
				degrade: 'url("/images/bg_degrade.webp")',
				degradem: 'url("/images/bg_degrade_m.webp")',
				service1: 'url("/images/service1.webp")',
				service2: 'url("/images/service2.webp")',
				bannerProduct: 'url("/images/sachets_compleat_1.webp")',
				bannerBlog: 'url("/images/blogbg.webp")',
				clinicBanner: 'url("/images/clinicBanner.webp")',
				contactBanner: 'url("/images/contactBanner.webp")',
				star: 'url("/images/star.webp")',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [tailWindAnimate],
} satisfies Config;
export default config;
