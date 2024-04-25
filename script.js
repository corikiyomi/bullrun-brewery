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
    console.log(navLinks);
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
let itemDescription = document.createElement("p");
let itemPrice = document.createElement("p");
let shoppingCart = [];

// When size is selected and Add to Cart button is clicked, add quantity 1 for each size selected to the cart / cost calculator with the corresponding price.

// Add all checked items to list ready to be added to cart

// Bullrun Hoodie - Black
let blackHoodie = document.querySelectorAll("#apparel3 input.size-checkbox");
let selected = [];

function addBlackHoodieToCart() {
    for (let i = 0; i < blackHoodie.length; i++) {
        if (blackHoodie[i].checked) {
            selected.push(blackHoodie[i]);
        }
    } console.log(selected);
    for (let item of selected) {
        // Item Name <p>
        let outputP = document.createTextNode("Bullrun Hoodie — Black, ");
        // Append Item Size
        if (item.value === "S") {
            outputP.innerHTML += "S";
        } else if (item.value === "M") {
            outputP.innerHTML += "M";
        } else if (item.value === "L") {
            outputP.innerHTML += "L";
        } else if (item.value === "XL") {
            outputP.innerHTML += "XL";
        }
        // Append Item Price <p>
        itemPrice.innerHTML = "$ 22";
        // Create newItem div and append both paragraphs
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.appendChild(outputP);
        newItem.appendChild(itemPrice);
        document.getElementById("itemsAdded").appendChild(newItem);
        // clear selection; reset buttons

    }
}

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
// apparel
// document.getElementById("addShirtBlack").addEventListener("click", addBlackShirtToCart);
// document.getElementById("addShirtWhite").addEventListener("click", addWhiteShirtToCart);
document.getElementById("addHoodieBlack").addEventListener("click", addBlackHoodieToCart);
// document.getElementById("addShirtWhite").addEventListener("click", addWhiteHoodieToCart);
// // drinkware
// document.getElementById("addPint").addEventListener("click", addPintToCart);
// document.getElementById("addTulip").addEventListener("click", addTulipToCart);
// document.getElementById("addGrowler").addEventListener("click", addGrowlerToCart);
// // accessories
// document.getElementById("addSticker").addEventListener("click", addStickerToCart);
// document.getElementById("addDadHat").addEventListener("click", addDadHatToCart);
// document.getElementById("addPanelHat").addEventListener("click", addPanelHatToCart);

// Clear / Submit Shopping Cart
document.getElementById("cartReset").addEventListener("click", clearCart);
// document.getElementById("cartSubmit").addEventListener("click", submitCart);