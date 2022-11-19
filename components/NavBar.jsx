import React from "react";
import Link from "next/link";

export function NavBar(props) {
	return (
		<header className="  text-amber-300 flex justify-around items-center ">
			<h1 className=" flex  md:text-8xl sm:text-6xl text-5xl font-bold tracking-wider">MOVIE</h1>
			<nav className="">
				<ul className="  text-white flex gap-5 justify-center items-center ">
					<li className={!props.index ? null : "font-semibold text-amber-200"}>
						<Link href={"/"}>Início</Link>
					</li>
					<li className={!props.filme ? null : "font-semibold text-amber-200"}>
						<Link href={"/movies"}>Filmes</Link>
					</li>
					<li className={!props.serie ? null : "font-semibold text-amber-200"}>
						<Link href={"/series"}>Séries</Link>
					</li>
					<li>
						<i class="bi bi-github text-2xl "></i>
					</li>
				</ul>
			</nav>
		</header>
	);
}
