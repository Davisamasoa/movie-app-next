import { useEffect, useRef, useState } from "react";
import { api } from "../services/api";
import { CategoryCard } from "./CategoryCard";

export function CategoryRow({ title, path }) {
	const [movies, setMovies] = useState([]);
	const [movieWidth, setMovieWidth] = useState();
	const moviesDiv = useRef();
	const buttonsDiv = useRef();
	let navigate = 0;

	useEffect(() => {
		api.get(path).then(({ data }) => setMovies(data.results));
	}, [path]);

	function handleNavigateButton(e) {
		let num;
		const gap = 5;

		if (e.currentTarget.classList[0] == "-left-5") {
			navigate <= 0 ? navigate : (navigate -= movieWidth + gap);
			moviesDiv.current.scrollLeft = navigate;
		} else {
			navigate >= moviesDiv.current.scrollWidth - moviesDiv.current.clientWidth
				? navigate
				: (navigate += movieWidth + gap);
			moviesDiv.current.scrollLeft = navigate;
		}

		console.log(moviesDiv.current.style.gap);
	}

	function navigateOpacityOn() {
		buttonsDiv.current.className =
			"buttons absolute w-full h-50 hidden md:block md:opacity-100 transition duration-200 opacity-0  z-20";
	}

	function navigateOpacityOff() {
		buttonsDiv.current.className =
			"buttons absolute w-full h-50 hidden md:block md:opacity-0 transition duration-200 opacity-0  z-20";
	}

	return (
		<section className=" mt-4 mb-5 z-0 relative">
			<h2 className="sm:text-3xl text-2xl tracking-wide font-semibold mb-3 text-white">{title}</h2>
			<div
				ref={moviesDiv}
				onMouseEnter={() => navigateOpacityOn()}
				onMouseLeave={() => navigateOpacityOff()}
				className="flex gap-[5px] scroll-smooth max-w-none overflow-y-hidden  md:overflow-x-auto     z-0 row"
			>
				<div
					ref={buttonsDiv}
					className="buttons absolute w-full h-50 hidden md:block md:opacity-0 transition duration-200 opacity-0  z-20"
				>
					<button
						onClick={handleNavigateButton}
						className="-left-5 lg:top-[140px] md:top-[110px]  z-20 text-yellow-200 text-4xl absolute   h-full w-20"
					>
						<i className="text-yellow-200 lg:text-4xl md:text-3xl   bi bi-caret-left"></i>
					</button>

					<button
						onClick={handleNavigateButton}
						className="-right-5 lg:top-[140px] md:top-[110px] z-20 text-yellow-200 text-4xl absolute   h-full w-20"
					>
						<i className="text-yellow-200 text-4x bi bi-caret-right"></i>
					</button>
				</div>

				{movies.map(({ id, title, poster_path }) => (
					<CategoryCard key={id} title={title} imageUrl={poster_path} movie={setMovieWidth} />
				))}
			</div>
		</section>
	);
}
