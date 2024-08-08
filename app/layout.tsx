import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './common/header';
import Footer from './common/footer';
import Head from './head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		default: '랜딩페이지',
		template: '%s | 랜딩페이지',
	},
	description: '광고 랜딩페이지',
	keywords: ['hi', 'hello'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			{/* <Head /> */}
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
