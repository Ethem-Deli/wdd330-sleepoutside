import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}
document.querySelectorAll('.add-to-cart-button').forEach(button => {
  button.addEventListener('click', event => {
    const product = {
      id: button.dataset.id,
      name: button.dataset.name,
      price: button.dataset.price,
      // Add other necessary product properties
    };
    addProductToCart(product);
  });
});

function addProductToCart(product) {
  // Retrieve the existing cart from localStorage
  let cart = JSON.parse(localStorage.getItem('so-cart')) || [];

  // Add the new product to the cart array
  cart.push(product);

  // Save the updated cart back to localStorage
  localStorage.setItem('so-cart', JSON.stringify(cart));
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
