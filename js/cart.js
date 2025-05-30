// Function to add phone to the cart
function addToCart() {
  const product = {
    name: "Smartphone X",
    price: "$699.99",
    image: "img/product1.jpg",
  };
  localStorage.setItem("cartItem", JSON.stringify(product));
}

// Function to load cart data
function loadCart() {
  const cartItem = localStorage.getItem("cartItem");

  const emptyCartText = document.getElementById("empty-cart");
  const cartItemContainer = document.getElementById("cart-item");

  if (cartItem && cartItemContainer && emptyCartText) {
    const product = JSON.parse(cartItem);
    emptyCartText.style.display = "none";
    cartItemContainer.style.display = "block";

    document.getElementById("cart-img").src = product.image;
    document.getElementById("cart-name").innerText = product.name;
    document.getElementById("cart-price").innerText = product.price;
  } else if (emptyCartText && cartItemContainer) {
    emptyCartText.style.display = "block";
    cartItemContainer.style.display = "none";
  }
}

// Function to remove item from cart
function removeFromCart() {
  localStorage.removeItem("cartItem");
  loadCart();
}

function setupEventListeners() {
  const removeBtn = document.getElementById("remove-btn");
  if (removeBtn) {
    removeBtn.addEventListener("click", removeFromCart);
  }

  const searchBtn = document.getElementById("search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", searchProducts);
  }
}

function searchProducts() {
  const query = document.getElementById("search").value;
  console.log(`Searching for: ${query}`);
}

document.addEventListener("DOMContentLoaded", function () {
  loadCart();
  setupEventListeners();
});
