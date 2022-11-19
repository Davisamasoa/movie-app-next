import { useEffect, useRef, useState } from "react";

export function CategoryCard({ title, imageUrl, movie }, props) {
	const movieWidth = useRef();
	useEffect(() => {
		movie(movieWidth.current.offsetWidth);
	}, []);

	// window.addEventListener("resize", () => {
	// 	setTimeout(() => {
	// 		movie(movieWidth.current.offsetWidth);
	// 	}, 500);
	// });

	return (
		<picture
			onClick={() => {
				console.log(title);
			}}
			ref={movieWidth}
			className={`cursor-pointer relative ${props.className}`}
		>
			<img
				className="transition-all z-0 duration-300  md:w-40 lg:w-52 sm:w-24 w-24  hover:scale-110 hover:z-30"
				src={`https://image.tmdb.org/t/p/w500/${imageUrl}`}
			/>
		</picture>
	);
}
