import Link from "next/link";
import React from "react";
import { NavBar } from "../components/NavBar";
export default function custom500() {
	return (
		<>
			<NavBar />
			<div className="w-full h-screen -mt-16   flex justify-center items-center flex-col gap-5 text-white text-2xl">
				<h1 className="text-6xl font-bold text-center">Erro 404</h1>

				<p>
					Voltar para a
					<Link
						href={"/"}
						className="bg-amber-300 border-amber-300 border-2 ml-2 text-black rounded-full py-2 px-3 font-bold sm:text-lg text-base hover:bg-transparent hover:text-white transition duration-200"
					>
						Home
					</Link>
				</p>
			</div>
		</>
	);
}
