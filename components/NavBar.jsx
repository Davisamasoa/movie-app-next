import React from "react";
import Link from "next/link";
import { elastic as Menu } from "react-burger-menu";
import { BiCameraMovie, BiMovie, BiHomeAlt2 } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

export function NavBar(props) {
	return (
		<header>
			<Menu>
				<nav className=" text-primaryColor  flex justify-around flex-col items-center pl-4 ">
					<ul className="  text-secondaryColor font-light tracking-wider  flex flex-col gap-8 justify-center mt-24">
						<li
							className={`${
								props.currentPage !== "index"
									? "transition duration-200 hover:opacity-70"
									: "font-bold text-white"
							}`}
						>
							<Link className="flex items-center" href={"/"}>
								<BiHomeAlt2 size={21} className="bg-transparent" />
								<span className="ml-2">Início</span>
							</Link>
						</li>
						<li
							className={`${
								props.currentPage !== "filme"
									? "transition duration-200 hover:opacity-70"
									: "font-bold text-white"
							}`}
						>
							<Link className="flex items-center" href={"/movies"}>
								<BiCameraMovie size={21} className="bg-transparent" />
								<span className="ml-2">Filmes</span>
							</Link>
						</li>
						<li
							className={`${
								props.currentPage !== "serie"
									? "transition duration-200 hover:opacity-70"
									: "font-bold text-white"
							}`}
						>
							<Link className="flex items-center" href={"/series"}>
								<BiMovie size={20} className="bg-transparent" />
								<span className="ml-2">Séries</span>
							</Link>
						</li>
						<li
							className={`${
								props.currentPage !== "search"
									? "transition duration-200 hover:opacity-70"
									: "font-bold text-white"
							}`}
						>
							<Link className="flex items-center" href={"/search"}>
								<ImSearch size={20} className="bg-transparent" />
								<span className="ml-2">Pesquisar</span>
							</Link>
						</li>
						<li>
							<a
								target="blank"
								className="flex justify-start items-center  hover:opacity-70 transition duration-200"
								href="https://github.com/Davisamasoa"
							>
								<BsGithub size={21} className="bg-transparent" />
								<span className="ml-2 ">GitHub</span>
							</a>
						</li>
					</ul>
				</nav>
			</Menu>
			<div className=" pt-4  text-7xl sm:text-8xl flex justify-center items-center w-full  font-bold tracking-wider">
				<Link className="text-primaryColor text-center" href="/">
					MOVIES
				</Link>
			</div>
		</header>
	);
}
