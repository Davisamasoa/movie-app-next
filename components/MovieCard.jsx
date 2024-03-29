import { useEffect, useRef } from "react";
import Link from "next/link";
export function MovieCard({ title, id, imageUrl, hoverWidth, movie }) {
	const movieWidth = useRef();
	const handleHover = hoverWidth ? "w-24 md:w-40" : "sm:w-48 w-28";

	if (movie) {
		useEffect(() => {
			movie(movieWidth.current.clientWidth);
		}, []);

		window.addEventListener("resize", () => {
			setTimeout(() => {
				movie(document.querySelector(".moviePic").clientWidth);
			}, 2500);
		});
	}

	return (
		<picture className={`cursor-pointer moviePic`} ref={movieWidth}>
			<Link
				target={"_blank"}
				href={{
					pathname: `/${id}`,
					query: {
						type: title == undefined ? "serie" : "movie",
					},
				}}
			>
				<div className="relative">
					{imageUrl ? (
						<img
							width={208}
							height={312}
							className={`transition-all duration-300 rounded-md lg:w-52 md:hover:scale-105 ${handleHover}`}
							src={`https://image.tmdb.org/t/p/w500/${imageUrl}`}
						/>
					) : (
						<div
							className={`bg-gray-500 transition-all duration-300 rounded-md lg:h-[312px] md:h-[288px] h-[168px] lg:w-52 md:hover:scale-110 ${handleHover} flex justify-center items-center text-6xl`}
						>
							<i className="bi bi-card-image p-5 text-secondaryColor bg-transparent"></i>
						</div>
					)}
				</div>
			</Link>
		</picture>
	);
}
