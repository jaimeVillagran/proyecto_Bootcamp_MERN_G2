// Import needed component
import { cards } from "./cards.js";

const ContProduct = ({ title, products, target }) => {
	return `
    <section id="${target}" class="section">
        <h2 class="contain__p--subtitle">Productos</h2>
        <h1 class="contain__p--title">${title}</h1>
        <div class="product">
            ${products.map((element) => cards(element)).join("")}
        </div>
    </section>
    `;
};

export { ContProduct };
