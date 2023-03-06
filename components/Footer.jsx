import { BsGithub, BsLinkedin } from "react-icons/bs";

export function Footer() {
	return (
		<footer className="mt-5 mb-2 gap-1 text-secondaryColor flex justify-center w-full flex-col items-center">
			<p className="font-light">Desenvolvido por Davi Samuel</p>
			<figure className="text-primaryColor text-2xl flex gap-2">
				<a href="https://github.com/Davisamasoa" target="_blank">
					<BsGithub />
				</a>

				<a href="https://www.linkedin.com/in/davisamasoa/" target="_blank">
					<BsLinkedin />
				</a>
			</figure>
		</footer>
	);
}
