import { useEffect, useRef, useState } from "react";
import { api } from "../pages/api/services/api";
import { MovieCard } from "./MovieCard";
import Skeleton from "./Skeleton";

import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";

export function CategoryRow({ title, path }) {
	const [movies, setMovies] = useState([]);
	const [movieWidth, setMovieWidth] = useState();
	const [loading, setLoading] = useState(true);
	const moviesDiv = useRef();
	const buttonsDiv = useRef();

	let navigate = 0;

	useEffect(() => {
		api.get(path).then(({ data }) => {
			setMovies(data.results);
			setLoading(false);
		});
	}, [path]);

	function handleNavigateButton(e) {
		let num;
		const gap = 8;

		if (e.currentTarget.classList[0] == "left-1") {
			navigate <= 0 ? navigate : (navigate -= (movieWidth + gap) * 3);
			moviesDiv.current.scrollLeft = navigate;
		} else {
			navigate >= moviesDiv.current.scrollWidth - moviesDiv.current.clientWidth
				? navigate
				: (navigate += (movieWidth + gap) * 3);
			moviesDiv.current.scrollLeft = navigate;
		}
	}

	return (
		<section className="mt-4 mb-5 relative ">
			{loading ? (
				<Skeleton />
			) : (
				<>
					<h2 className="sm:text-3xl text-2xl tracking-wide font-semibold mb-3 text-secondaryColor">
						{title}
					</h2>
					<div
						ref={moviesDiv}
						onMouseEnter={() => buttonsDiv.current.classList.replace("md:opacity-0", "md:opacity-100")}
						onMouseLeave={() => buttonsDiv.current.classList.replace("md:opacity-100", "md:opacity-0")}
						className="flex items-center lg:min-h-[342px] md:min-h-[270px] gap-2 scroll-smooth max-w-none overflow-x-auto lg:overflow-x-hidden"
					>
						<div
							ref={buttonsDiv}
							className="md:opacity-0 bg-red z-50 buttons top-2/4  left-0 absolute w-full h-50 hidden md:block opacity-0 transition-opacity duration-200"
						>
							<button
								onClick={handleNavigateButton}
								className="left-1 z-20  text-primaryColor text-4xl absolute h-full w-20"
							>
								<IoMdArrowDropleftCircle
									size={40}
									className="text-primaryColor bg-black/[0.6] rounded-full lg:text-4xl md:text-3xl"
								/>
							</button>

							<button
								onClick={handleNavigateButton}
								className="-right-[35px] z-20 text-primaryColor text-4xl absolute h-full w-20"
							>
								<IoMdArrowDroprightCircle
									size={40}
									className="text-primaryColor bg-black/[0.6] rounded-full lg:text-4xl md:text-3xl"
								/>
							</button>
						</div>

						{movies.map(({ id, title, poster_path }) => (
							<MovieCard
								key={id}
								id={id}
								title={title}
								imageUrl={poster_path}
								hoverWidth={true}
								movie={setMovieWidth}
							/>
						))}
					</div>
				</>
			)}
		</section>
	);
}
