import { movieCategories } from "./api/services/api";
import Page from "../components/Page";
export default function Movies() {
	return <Page categorie={movieCategories} currentPage="filme" titlePage={" | Filmes"} />;
}
