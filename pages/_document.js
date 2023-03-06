// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import { Footer } from "../components/Footer";

export default function Document() {
	return (
		<Html lang="pt-BR">
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
			</Head>
			<body className="relative min-h-screen">
				<Main />
				<NextScript />
				<Footer />
			</body>
		</Html>
	);
}
