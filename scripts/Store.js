let cart = [];

// Load products from products.json and render them.
async function loadProducts() {
  try {
    const response = await fetch('products.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function renderProducts(products) {
  const container = document.getElementById('products-container');
  container.innerHTML = '';
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product';
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Buy Now</button>
    `;
    container.appendChild(productCard);
  });
}

async function addToCart(productId) {
  try {
    const response = await fetch('products.json');
    const products = await response.json();
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existingItem = cart.find(item => item.product.id === productId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ product, quantity: 1 });
    }
    renderCart();
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}

function renderCart() {
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.product.price * item.quantity;
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <span>${item.product.name} (x${item.quantity})</span>
      <span>$${(item.product.price * item.quantity).toFixed(2)}</span>
    `;
    cartContainer.appendChild(cartItem);
  });
  document.getElementById('cart-total').innerText = 'Total: $' + total.toFixed(2);
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  alert('Proceeding to checkout with Printful integration (placeholder).');
  cart = [];
  renderCart();
}

window.addEventListener('DOMContentLoaded', loadProducts);
