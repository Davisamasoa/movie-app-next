import axios from "axios";

export const api = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

const apiKey = process.env.API_KEY;

export const categories = [
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
