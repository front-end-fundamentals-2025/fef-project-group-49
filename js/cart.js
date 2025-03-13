// Function to add Smartphone X to the cart
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

  if (cartItem) {
    const product = JSON.parse(cartItem);
    document.getElementById("empty-cart").style.display = "none";
    document.getElementById("cart-item").style.display = "block";
    document.getElementById("cart-img").src = product.image;
    document.getElementById("cart-name").innerText = product.name;
    document.getElementById("cart-price").innerText = product.price;
  } else {
    console.log("Cart is empty.");
  }
}

// Function to remove item from cart
function removeFromCart() {
  localStorage.removeItem("cartItem");
  document.getElementById("cart-item").style.display = "none";
  document.getElementById("empty-cart").style.display = "block";
}

// Load cart when the page loads
document.addEventListener("DOMContentLoaded", loadCart);
