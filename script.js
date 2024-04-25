"use strict";


// LIGHT MODE - DARK MODE SWITCH
let moonIcon = document.getElementById("moon");
let sunIcon = document.getElementById("sun");
let mainLogo = document.getElementById("lightModeLogo");
let secLogo = document.getElementById("darkModeLogo");
let lightDarkModeButton = document.getElementById("lightDarkMode");
let productHeader = document.querySelector("#products > h2");
let sizeButtons = document.querySelectorAll("label.size-label");

// If in light mode (default) and the button is clicked, change the background color, text color to #1A1A1A and #F0F0F0 respectively.
function changeMode() {
    let body = document.body;
    body.classList.toggle("dark-mode");
    // Mode Button Styling
    sunIcon.classList.toggle("hidden");
    // Header
    mainLogo.classList.toggle("hidden");
    secLogo.classList.toggle("hidden");
    // Navigation Link Color
    // get nav links
    let navLinks = document.querySelectorAll("nav a");
    // loop through links to change color
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle("nav-dark-mode");
    }
    // Shop h2 Background Color
    productHeader.classList.toggle("dark-bg");
    // Shop size link background color
    for (let i = 0; i < sizeButtons.length; i++) {
        sizeButtons[i].classList.toggle("dark-bg-button");
    }
}


// BACK TO TOP BUTTON
let btnBackToTop = document.getElementById("backToTop");

// Display: none when hero section is visible
window.addEventListener("scroll", e => {
    btnBackToTop.style.display = window.scrollY > 900 ? 'block' : 'none';
})



// PRODUCTS
let shoppingCart = [];
let selected = [];

// When size is selected and Add to Cart button is clicked, add quantity 1 for each size selected to the cart / cost calculator with the corresponding price.

// Add all checked items to list ready to be added to cart

// Classic Tee - Black / Pink
let blackShirt = document.querySelectorAll("#apparel1 input.size-checkbox");
selected = [];

function addBlackShirtToCart() {
    // When Add to Cart button is pressed, the for loop will check for items that are checked and add them to the list 'selected'
    for (let i = 0; i < blackShirt.length; i++) {
        if (blackShirt[i].checked) {
            selected.push(blackShirt[i]);
        }
    }
    // Once items have been added to selected list, items are looped over to output the item, size and price to shopping cart
    for (let myItem of selected) {
        document.getElementById("empty").classList.add("not-empty");
        // Item Name, Size
        let p = document.createElement("p");
        let itemDescription = document.createTextNode(`Classic Tee — Black / Pink , ${myItem.classList.item(1)}`);
        p.appendChild(itemDescription);
        // Append Item Price
        let itemPrice = document.createElement("p");
        let price = document.createTextNode("$ 22");
        itemPrice.appendChild(price);
        // Create newItem div and append both paragraphs
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.appendChild(p);
        newItem.appendChild(itemPrice);
        document.getElementById("itemsAdded").appendChild(newItem);
        console.log(newItem);
        // Add self to shoppingCart list for cost calculation
        shoppingCart.push(myItem);
        // Uncheck item
        myItem.checked = false;
    }
    // clear selection; reset buttons
    while (selected.length > 0) {
        selected.pop();
    }
}

// Classic Tee - White / Pink
let whiteShirt = document.querySelectorAll("#apparel2 input.size-checkbox");
selected = [];

function addWhiteShirtToCart() {
    // When Add to Cart button is pressed, the for loop will check for items that are checked and add them to the list 'selected'
    for (let i = 0; i < whiteShirt.length; i++) {
        if (whiteShirt[i].checked) {
            selected.push(whiteShirt[i]);
        }
    }
    // Once items have been added to selected list, items are looped over to output the item, size and price to shopping cart
    for (let myItem of selected) {
        document.getElementById("empty").classList.add("not-empty");
        // Item Name, Size
        let p = document.createElement("p");
        let itemDescription = document.createTextNode(`Classic Tee — White / Pink , ${myItem.classList.item(1)}`);
        p.appendChild(itemDescription);
        // Append Item Price
        let itemPrice = document.createElement("p");
        let price = document.createTextNode("$ 22");
        itemPrice.appendChild(price);
        // Create newItem div and append both paragraphs
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.appendChild(p);
        newItem.appendChild(itemPrice);
        document.getElementById("itemsAdded").appendChild(newItem);
        console.log(newItem);
        // Add self to shoppingCart list for cost calculation
        shoppingCart.push(myItem);
        // Uncheck item
        myItem.checked = false;
    }
    // clear selection; reset buttons
    while (selected.length > 0) {
        selected.pop();
    }
}

// Bullrun Hoodie - Black
let blackHoodie = document.querySelectorAll("#apparel3 input.size-checkbox");
selected = [];

function addBlackHoodieToCart() {
    // When Add to Cart button is pressed, the for loop will check for items that are checked and add them to the list 'selected'
    for (let i = 0; i < blackHoodie.length; i++) {
        if (blackHoodie[i].checked) {
            selected.push(blackHoodie[i]);
        }
    }
    // Once items have been added to selected list, items are looped over to output the item, size and price to shopping cart
    for (let myItem of selected) {
        document.getElementById("empty").classList.add("not-empty");
        // Item Name, Size
        let p = document.createElement("p");
        let itemDescription = document.createTextNode(`Bullrun Hoodie — Black, ${myItem.classList.item(1)}`);
        p.appendChild(itemDescription);
        // Append Item Price
        let itemPrice = document.createElement("p");
        let price = document.createTextNode("$ 35");
        itemPrice.appendChild(price);
        // Create newItem div and append both paragraphs
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.appendChild(p);
        newItem.appendChild(itemPrice);
        document.getElementById("itemsAdded").appendChild(newItem);
        console.log(newItem);
        // Add self to shoppingCart list for cost calculation
        shoppingCart.push(myItem);
        // Uncheck item
        myItem.checked = false;
    }
    // clear selection; reset buttons
    while (selected.length > 0) {
        selected.pop();
    }
}
// Bullrun Hoodie - White
let whiteHoodie = document.querySelectorAll("#apparel4 input.size-checkbox");
selected = [];

function addWhiteHoodieToCart() {
    // When Add to Cart button is pressed, the for loop will check for items that are checked and add them to the list 'selected'
    for (let i = 0; i < whiteHoodie.length; i++) {
        if (whiteHoodie[i].checked) {
            selected.push(whiteHoodie[i]);
        }
    }
    // Once items have been added to selected list, items are looped over to output the item, size and price to shopping cart
    for (let myItem of selected) {
        document.getElementById("empty").classList.add("not-empty");
        // Item Name, Size
        let p = document.createElement("p");
        let itemDescription = document.createTextNode(`Bullrun Hoodie — White, ${myItem.classList.item(1)}`);
        p.appendChild(itemDescription);
        // Append Item Price
        let itemPrice = document.createElement("p");
        let price = document.createTextNode("$ 35");
        itemPrice.appendChild(price);
        // Create newItem div and append both paragraphs
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.appendChild(p);
        newItem.appendChild(itemPrice);
        document.getElementById("itemsAdded").appendChild(newItem);
        console.log(newItem);
        // Add self to shoppingCart list for cost calculation
        shoppingCart.push(myItem);
        // Uncheck item
        myItem.checked = false;
    }
    // clear selection; reset buttons
    while (selected.length > 0) {
        selected.pop();
    }
}

console.log(shoppingCart); 

// Clear Cart
function clearCart() {
    document.getElementById("itemsAdded").innerHTML = "";
    let p = document.createElement("p");
    let cartMessage = document.createTextNode("Your cart is empty.");
    p.appendChild(cartMessage);
    document.getElementById("itemsAdded").appendChild(p);
}

// Adjust subtotal, taxes, and total cost on click





// FORM VALIDATION

// First name required

// Last name required

// Preferred contact method selection required. Default is email

// Whichever preferred contact method is selected, corresponding field is then required, making the other optional.

// Comments are required. Display character count in the bottom right corner? 0/1000






// SUBMIT

// When form is submitted, display the form contents and a message thanking the user for submitting. After time on screen, message disappears.

// If there are items in the shopping cart, return to Products section. 

// If the shopping cart is empty, reload the page.








// EVENT LISTENERS
// document.getElementById("lightDarkMode").addEventListener("click", changeMode);

document.getElementById("lightDarkMode").addEventListener("click", changeMode);

// Product-Specific
// Apparel
document.getElementById("addShirtBlack").addEventListener("click", addBlackShirtToCart);
document.getElementById("addShirtWhite").addEventListener("click", addWhiteShirtToCart);
document.getElementById("addHoodieBlack").addEventListener("click", addBlackHoodieToCart);
document.getElementById("addHoodieWhite").addEventListener("click", addWhiteHoodieToCart);
// // Drinkware
// document.getElementById("addPint").addEventListener("click", addPintToCart);
// document.getElementById("addTulip").addEventListener("click", addTulipToCart);
// document.getElementById("addGrowler").addEventListener("click", addGrowlerToCart);
// // Accessories
// document.getElementById("addSticker").addEventListener("click", addStickerToCart);
// document.getElementById("addDadHat").addEventListener("click", addDadHatToCart);
// document.getElementById("addPanelHat").addEventListener("click", addPanelHatToCart);

// Clear / Submit Shopping Cart
document.getElementById("cartReset").addEventListener("click", clearCart);
// document.getElementById("cartSubmit").addEventListener("click", submitCart);