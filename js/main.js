// js/main.js
const productsContainer = document.getElementById('products');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <a class="button" href="product.html?id=${product.id}">View Details</a>
  `;
  productsContainer.appendChild(card);
});
