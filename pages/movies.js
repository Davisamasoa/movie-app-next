import Head from "next/head";
import { CategoryRow } from "../components/CategoryRow";
import { NavBar } from "../components/NavBar";
import { movieCategories } from "./api/services/api";
import { serieCategories } from "./api/services/api";
export default function Home() {
	return (
		<div>
			<Head>
				<title>Movie App | Filmes</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
				/>
			</Head>

			<div className="md:px-9 sm:px-7 px-4 py-4 App">
				<NavBar filme={true} />

				{movieCategories.map(({ title, path }) => (
					<CategoryRow key={title} title={title} path={path} />
				))}
			</div>
		</div>
	);
}
