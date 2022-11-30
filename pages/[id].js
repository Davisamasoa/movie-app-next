import Head from "next/head";
import React from "react";
import { NavBar } from "../components/NavBar";
import { apiKey } from "./api/services/api";

export async function getServerSideProps(context) {
	let data;
	let movie;
	if (context.query.type == "movie") {
		data = await fetch(
			`https://api.themoviedb.org/3/movie/${context.query.id}?api_key=${apiKey}&language=pt-BR`
		);
		movie = await data.json();
		movie.release_date = formatDate(movie.release_date);
	} else {
		data = await fetch(
			`https://api.themoviedb.org/3/tv/${context.query.id}?api_key=${apiKey}&language=pt-BR`
		);
		movie = await data.json();
		movie.title = movie.name;
		movie.release_date = formatDate(movie.first_air_date);
	}

	function formatDate(date) {
		const dateArray = date.split("");
		const dateFormated = `${
			dateArray[8] +
			dateArray[9] +
			dateArray[7] +
			dateArray[5] +
			dateArray[6] +
			dateArray[4] +
			dateArray[0] +
			dateArray[1] +
			dateArray[2] +
			dateArray[3]
		} `;
		return dateFormated;
	}

	return {
		props: {
			title: movie.title,
			img: movie.poster_path,
			description: movie.overview,
			releaseDate: movie.release_date,
		},
	};
}

export default function Film({ title, img, description, releaseDate }) {
	return (
		<>
			<Head>
				<title>Movie App | {title}</title>
			</Head>

			<div className="md:px-9 sm:px-7 px-4 py-4 App">
				<NavBar />
				<main className="w-full mt-24 flex justify-center items-center">
					<div className="text-white flex flex-col sm:flex-row  w-[800px] gap-10 ">
						<img className="lg:w-80 md:w-72 sm:w-64  w-full" src={`https://image.tmdb.org/t/p/w500/${img}`} />

						<div className="relative">
							<h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-5">{title}</h2>
							<p>{description}</p>
							<p className=" mt-5">
								{" "}
								<b> Data de lançamento:</b> {releaseDate}
							</p>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
