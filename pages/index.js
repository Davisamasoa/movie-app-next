import Page from "../components/Page";
import { indexCategories } from "./api/services/api";

export default function Home() {
	return <Page categorie={indexCategories} currentPage="index" titlePage={""} />;
}
