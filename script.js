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



// PRODUCTS

// When size is selected and Add to Cart button is clicked, add quantity 1 for each size selected to the cart / cost calculator with the corresponding price.
// Adjust subtotal, taxes, and total cost on click


// Keep cart visible on the side of the screen when in the Product section. End should be at bottom of Product section and at the top of Product section.





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