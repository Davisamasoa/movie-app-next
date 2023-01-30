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
		<picture ref={movieWidth} className={`cursor-pointer ${props.className} moviePic`}>
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
					<img
						className="transition-all duration-300 rounded-md   md:w-40 lg:w-52 sm:w-24 w-24 lg:hover:w-56 md:hover:w-44"
						src={`https://image.tmdb.org/t/p/w500/${imageUrl}`}
					/>
				</div>
			</Link>
		</picture>
	);
}
