import React from "react";
import Link from "next/link";

export function NavBar(props) {
	return (
		<header className="  text-amber-300 mb-10 flex justify-around flex-col items-center ">
			<Link href="/">
				<h1 className=" flex  md:text-8xl  text-8xl font-bold tracking-wider">MOVIES</h1>
			</Link>
			<nav className="">
				<ul className="  text-white font-light tracking-wider flex gap-5 justify-center items-center ">
					<li
						className={
							props.currentPage !== "index"
								? "transition duration-200 hover:opacity-70 border-b-2 border-transparent py-2"
								: "border-b-2 border-amber-300 py-2"
						}
					>
						<Link href={"/"}>Início</Link>
					</li>
					<li
						className={
							props.currentPage !== "filme"
								? "transition duration-200 hover:opacity-70 border-b-2 border-transparent py-2"
								: "border-b-2 border-amber-300 py-2"
						}
					>
						<Link href={"/movies"}>Filmes</Link>
					</li>
					<li
						className={
							props.currentPage !== "serie"
								? "transition duration-200 hover:opacity-70 border-b-2 border-transparent py-2"
								: "border-b-2 border-amber-300 py-2"
						}
					>
						<Link href={"/series"}>Séries</Link>
					</li>
					<li>
						<a
							target="blank"
							className="transition duration-200 hover:opacity-70"
							href="https://github.com/Davisamasoa"
						>
							<i className="bi bi-github text-2xl "></i>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
