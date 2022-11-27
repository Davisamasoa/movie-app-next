import { serieCategories } from "./api/services/api";
import Page from "../components/Page";

export default function Series() {
	return <Page categorie={serieCategories} currentPage="serie" titlePage={" | Séries"} />;
}
