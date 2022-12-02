import { useEffect, useRef } from "react";
import Link from "next/link";
export function MovieCard({ title, id, imageUrl, movie }, props) {
	const movieWidth = useRef();
	useEffect(() => {
		movie(movieWidth.current.clientWidth);
	}, []);

	window.addEventListener("resize", () => {
		setTimeout(() => {
			movie(document.querySelector(".moviePic").clientWidth);
		}, 2500);
	});

	return (
		<picture ref={movieWidth} className={`cursor-pointer relative ${props.className} moviePic`}>
			<Link
				target={"_blank"}
				href={{
					pathname: `/${id}`,
					query: {
						type: title == undefined ? "serie" : "movie",
					},
				}}
			>
				<img
					className="transition-all z-0 duration-300 rounded-md  md:w-40 lg:w-52 sm:w-24 w-24  hover:scale-110 hover:relative "
					src={`https://image.tmdb.org/t/p/w500/${imageUrl}`}
				/>
			</Link>
		</picture>
	);
}
