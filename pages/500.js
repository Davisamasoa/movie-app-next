import Link from "next/link";
import React from "react";
import { NavBar } from "../components/NavBar";
export default function custom500() {
	return (
		<>
			<div className="w-full h-screen -mt-16  flex justify-center items-center flex-col gap-4 text-white text-2xl">
				<h1 className="text-2xl font-bold">Essa página não existe!</h1>
				<span className="font-bold">:(</span>
				<Link
					href={"/"}
					className="bg-amber-300 text-black rounded-md py-2 px-2 font-normal text-lg hover:scale-110 transition duration-200"
				>
					Voltar para a página inicial
				</Link>
			</div>
		</>
	);
}
