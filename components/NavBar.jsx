import React from "react";
import Link from "next/link";

export function NavBar(props) {
	return (
		<header className="  text-amber-300 mb-10 flex justify-around flex-col items-center ">
			<h1 className=" flex  md:text-8xl  text-8xl font-bold tracking-wider">MOVIES</h1>
			<nav className="">
				<ul className="  text-white font-light tracking-wider flex gap-5 justify-center items-center ">
					<li
						className={!props.index ? "transition duration-200 hover:opacity-70" : "font-bold text-amber-200"}
					>
						<Link href={"/"}>Início</Link>
					</li>
					<li
						className={!props.filme ? "transition duration-200 hover:opacity-70" : "font-bold text-amber-200"}
					>
						<Link href={"/movies"}>Filmes</Link>
					</li>
					<li
						className={!props.serie ? "transition duration-200 hover:opacity-70" : "font-bold text-amber-200"}
					>
						<Link href={"/series"}>Séries</Link>
					</li>
					<li>
						<a
							target="blank"
							className="transition duration-200 hover:opacity-70"
							href="https://github.com/Davisamasoa"
						>
							<i class="bi bi-github text-2xl "></i>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
