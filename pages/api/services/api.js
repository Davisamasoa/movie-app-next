import axios from "axios";

export const api = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

export const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const movieCategories = [
	{
		title: "Populares",
		path: `/trending/movie/week?api_key=${apiKey}&language=pt-BR`,
	},
	{
		title: "Ação",
		path: `/discover/movie?api_key=${apiKey}&with_genres=28&language=pt-BR`,
	},
	{
		title: "Ficção científica",
		path: `/discover/movie?api_key=${apiKey}&with_genres=878&language=pt-BR`,
	},
	{
		title: "Animação",
		path: `/discover/movie?api_key=${apiKey}&with_genres=16&language=pt-BR`,
	},
	{
		title: "Comédia",
		path: `/discover/movie?api_key=${apiKey}&with_genres=35&language=pt-BR`,
	},

	{
		title: "Terror",
		path: `/discover/movie?api_key=${apiKey}&with_genres=53&language=pt-BR`,
	},
	{
		title: "Drama",
		path: `/discover/movie?api_key=${apiKey}&with_genres=18&language=pt-BR`,
	},
	{
		title: "Romance",
		path: `/discover/movie?api_key=${apiKey}&with_genres=10749&language=pt-BR`,
	},
	{
		title: "Documentário",
		path: `/discover/movie?api_key=${apiKey}&with_genres=99&language=pt-BR`,
	},
];

export const serieCategories = [
	{
		title: "Populares",
		path: `/trending/tv/week?api_key=${apiKey}&language=pt-BR`,
	},

	{
		title: "Animação",
		path: `/discover/tv?api_key=${apiKey}&with_genres=16&language=pt-BR`,
	},
	{
		title: "Comédia",
		path: `/discover/tv?api_key=${apiKey}&with_genres=35&language=pt-BR`,
	},

	{
		title: "Drama",
		path: `/discover/tv?api_key=${apiKey}&with_genres=18&language=pt-BR`,
	},
	{
		title: "Romance",
		path: `/discover/tv?api_key=${apiKey}&with_genres=10749&language=pt-BR`,
	},
	{
		title: "Documentário",
		path: `/discover/tv?api_key=${apiKey}&with_genres=99&language=pt-BR`,
	},
];

export const indexCategories = [
	{
		title: "Filmes em Alta",
		path: `/trending/movie/week?api_key=${apiKey}&language=pt-BR`,
	},

	{
		title: "Séries de animação",
		path: `/discover/tv?api_key=${apiKey}&with_genres=16&language=pt-BR`,
	},
	{
		title: "Filmes de Comédia",
		path: `/discover/movie?api_key=${apiKey}&with_genres=35&language=pt-BR`,
	},

	{
		title: "Séries de Drama",
		path: `/discover/tv?api_key=${apiKey}&with_genres=18&language=pt-BR`,
	},
	{
		title: "Filmes de Romance",
		path: `/discover/movie?api_key=${apiKey}&with_genres=10749&language=pt-BR`,
	},
	{
		title: "Documentário",
		path: `/discover/tv?api_key=${apiKey}&with_genres=99&language=pt-BR`,
	},
];
