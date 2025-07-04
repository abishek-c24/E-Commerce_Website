// js/product.js
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'));
const product = products.find(p => p.id === productId);

const detailDiv = document.getElementById('product-detail');
detailDiv.innerHTML = `
  <img src="${product.image}" alt="${product.name}">
  <h2>${product.name}</h2>
  <p>${product.description}</p>
  <p><strong>Price: ₹${product.price}</strong></p>
  <button id="addToCart">Add to Cart</button>
`;

document.getElementById('addToCart').addEventListener('click', () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart!');
});
