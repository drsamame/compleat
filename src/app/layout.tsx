import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/components/Footer';

const fontSans = localFont({
	src: [
		{
			path: './fonts/Aspekta-300.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: './fonts/Aspekta-400.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/Aspekta-700.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: 'CompleAT',
	description: 'Compleat es una clínica de nutrición y medicina estética',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={`${fontSans.className} antialiased`}>
				<header>
					<Header></Header>
				</header>
				{children}
				<Footer />
			</body>
		</html>
	);
}
