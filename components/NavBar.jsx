import React from "react";
import Link from "next/link";
import { elastic as Menu } from "react-burger-menu";
import { BiCameraMovie, BiMovie, BiHomeAlt2 } from "react-icons/bi";
import { ImSearch } from "react-icons/im";

export function NavBar(props) {
	return (
		<header>
			<Menu>
				<nav className=" text-primaryColor  flex justify-around flex-col items-center pl-4 ">
					<ul className="  text-secondaryColor font-light tracking-wider  flex flex-col gap-8 justify-center mt-24">
						<li
							className={` flex items-center ${
								props.currentPage !== "index"
									? "transition duration-200 hover:opacity-70"
									: "font-bold text-white"
							}`}
						>
							<BiHomeAlt2 size={21} className="bg-transparent" />
							<Link className="ml-2" href={"/"}>
								Início
							</Link>
						</li>
						<li
							className={` flex items-center ${
								props.currentPage !== "filme"
									? "transition duration-200 hover:opacity-70"
									: "font-bold text-white"
							}`}
						>
							<BiCameraMovie size={21} className="bg-transparent" />
							<Link className="ml-2" href={"/movies"}>
								Filmes
							</Link>
						</li>
						<li
							className={` flex items-center ${
								props.currentPage !== "serie"
									? "transition duration-200 hover:opacity-70"
									: "font-bold text-white"
							}`}
						>
							<BiMovie size={20} className="bg-transparent" />
							<Link className="ml-2" href={"/series"}>
								Séries
							</Link>
						</li>
						<li
							className={` flex items-center ${
								props.currentPage !== "search"
									? "transition duration-200 hover:opacity-70"
									: "font-bold text-white"
							}`}
						>
							<ImSearch size={20} className="bg-transparent" />
							<Link className="ml-2" href={"/search"}>
								Pesquisar
							</Link>
						</li>
						<li>
							<a
								target="blank"
								className="transition duration-200 hover:opacity-70"
								href="https://github.com/Davisamasoa"
							>
								<i className="bi bi-github bg-transparent"></i>
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
