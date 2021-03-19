import { createCart } from "./cart/cart";
import "./styles.css";

const addButtons = document.querySelectorAll(".add-button");

// let totalPrice = 0;

const products = [
  { name: "Cinthol", price: 10, productId: 1 },
  { name: "Axe", price: 5, productId: 2 },
];

const cart = createCart({ items: products });

document.getElementById("total").innerHTML = `Total : ${cart.getTotal()}`; // slowest

function handleAddToCart(event) {
  let productId = parseInt(event.target.dataset.productId, 10);
  console.log({ items: cart.getItems() });
  cart.addItemWithProductId(productId, products);

  document.getElementById("total").innerHTML = `Total : ${cart.getTotal()}`;
}
addButtons.forEach((n) => {
  n.addEventListener("click", handleAddToCart);
});
