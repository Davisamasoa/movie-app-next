import { useEffect, useRef } from "react";
import Link from "next/link";
export function MovieCard({ title, id, imageUrl, hoverWidth }) {
	const movieWidth = useRef();
	const handleHover = hoverWidth
		? "lg:hover:w-56 md:hover:w-44 w-24 md:w-40"
		: "md:hover:scale-110 sm:w-48 w-28";
	return (
		<picture className={`cursor-pointer moviePic`}>
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
							className={`transition-all duration-300 rounded-md lg:w-52 ${handleHover}`}
							src={`https://image.tmdb.org/t/p/w500/${imageUrl}`}
						/>
					) : (
						<div
							className={`bg-gray-500 transition-all duration-300 rounded-md lg:h-[312px] md:h-[288px] h-[168px] lg:w-52 ${handleHover} flex justify-center items-center text-6xl`}
						>
							<i className="bi bi-card-image p-5 text-white bg-transparent"></i>
						</div>
					)}
				</div>
			</Link>
		</picture>
	);
}
