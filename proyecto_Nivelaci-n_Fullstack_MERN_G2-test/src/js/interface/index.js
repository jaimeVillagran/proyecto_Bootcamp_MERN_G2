// Components import
import { Navbar } from "../components/1Navbar.js";
import { Header } from "../components/1Header.js";
import { ContainerProduct } from "../components/ContainerProducts.js";
import { Footer } from "../components/1Footer.js";

// Nodes import
import { root } from "../nodes.js";

// Import data products
import { propsSections } from "../utils/data.js";

// This templates or complete interface load each component for a view depending the route
const Home = () => {
	// Function componentn invoques
	/*const navbar = Navbar();*/
	/*const header = Header();*/
	const sections = propsSections.map((element) => ContainerProduct(element));
	/*const footer = Footer();*/

	// Principal component who save the components
	const template = [, ...sections];

	root.innerHTML = template.join("");
};

export { Home };
