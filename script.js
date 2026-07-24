/* ==========================================
   BREW & BEYOND - CART & INTERACTION LOGIC
   ========================================== */

// 1. Cart State Management
let cartCount = 0;
let cartItems = [];

/**
 * Adds an item to the cart and updates both Mobile & Desktop badges
 * @param {Object} item - Optional item object { id, name, price }
 */
function addToCart(item = null) {
    cartCount++;
    
    if (item) {
        cartItems.push(item);
    }

    updateCartUI();
}

/**
 * Updates UI elements for Mobile & Desktop cart badges
 */
function updateCartUI() {
    const desktopBadge = document.getElementById("cart-badge");
    const mobileBadge = document.getElementById("mobile-cart-badge");

    const badges = [desktopBadge, mobileBadge];

    badges.forEach(badge => {
        if (badge) {
            badge.innerText = cartCount;
            
            // Unhide badge if count > 0
            if (cartCount > 0) {
                badge.classList.remove("hidden");
                badge.classList.add("flex");
            } else {
                badge.classList.add("hidden");
                badge.classList.remove("flex");
            }
        }
    });
}

/**
 * Toggles Cart Drawer Visibility (Triggered by Navigation Basket Icons)
 */
function toggleCart() {
    const cartDrawer = document.getElementById("cart-drawer");
    const cartOverlay = document.getElementById("cart-overlay");

    if (cartDrawer) {
        cartDrawer.classList.toggle("translate-x-full");
    }
    
    if (cartOverlay) {
        cartOverlay.classList.toggle("hidden");
    }
}

// 2. Safe Interval Counter
let count = 0;

setInterval(() => {
    count++;
    const counterEl = document.getElementById("counter");
    
    // Only update if element exists on current page
    if (counterEl) {
        counterEl.innerText = count;
    }
}, 100);
