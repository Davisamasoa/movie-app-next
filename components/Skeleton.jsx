import React from "react";

export default function Skeleton() {
	const movieCardSkeleton = [];

	for (let i = 0; i < 8; i++) {
		movieCardSkeleton.push("");
	}

	return (
		<>
			<div className="skeleton  bg-zinc-800 h-7  lg:w-72 md:w-60 w-44 mb-3 rounded-full"></div>
			<div className="flex gap-[5px] scroll-smooth max-w-none overflow-y-hidden  md:overflow-x-auto     z-0 row">
				{movieCardSkeleton.map((item, index) => (
					<picture key={index} className={`cursor-pointer relative  moviePic`}>
						<div
							className={`skeleton rounded-md
                                bg-zinc-800 lg:h-[312px] md:h-[240px] h-[144px]  
                               transition-all z-0 duration-300   md:w-40 lg:w-52 sm:w-24 w-24`}
						></div>
					</picture>
				))}
			</div>
		</>
	);
}
