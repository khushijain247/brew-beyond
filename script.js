let cart = 0;

function addToCart() {

cart++;

document.getElementById("cart-count").innerText = cart;

}

let count = 0;

setInterval(() => {

count++;

document.getElementById("counter").innerText = count;

},100);