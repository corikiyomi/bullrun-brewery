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
let shoppingCart = []; // all items in cart
let selected = []; // specific to each item

// When size is selected and Add to Cart button is clicked, add quantity 1 for each size selected to the cart / cost calculator with the corresponding price.

// APPAREL
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
    for (let i = 0; i < whiteShirt.length; i++) {
        if (whiteShirt[i].checked) {
            selected.push(whiteShirt[i]);
        }
    }
    for (let myItem of selected) {
        document.getElementById("empty").classList.add("not-empty");
        let p = document.createElement("p");
        let itemDescription = document.createTextNode(`Classic Tee — White / Pink , ${myItem.classList.item(1)}`);
        p.appendChild(itemDescription);
        let itemPrice = document.createElement("p");
        let price = document.createTextNode("$ 22");
        itemPrice.appendChild(price);
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.appendChild(p);
        newItem.appendChild(itemPrice);
        document.getElementById("itemsAdded").appendChild(newItem);
        shoppingCart.push(myItem);
        myItem.checked = false;
    }
    while (selected.length > 0) {
        selected.pop();
    }
}

// Bullrun Hoodie - Black
let blackHoodie = document.querySelectorAll("#apparel3 input.size-checkbox");
selected = [];

function addBlackHoodieToCart() {
    for (let i = 0; i < blackHoodie.length; i++) {
        if (blackHoodie[i].checked) {
            selected.push(blackHoodie[i]);
        }
    }
    for (let myItem of selected) {
        document.getElementById("empty").classList.add("not-empty");
        let p = document.createElement("p");
        let itemDescription = document.createTextNode(`Bullrun Hoodie — Black, ${myItem.classList.item(1)}`);
        p.appendChild(itemDescription);
        let itemPrice = document.createElement("p");
        let price = document.createTextNode("$ 35");
        itemPrice.appendChild(price);
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.appendChild(p);
        newItem.appendChild(itemPrice);
        document.getElementById("itemsAdded").appendChild(newItem);
        shoppingCart.push(myItem);
        myItem.checked = false;
    }
    while (selected.length > 0) {
        selected.pop();
    }
}

// Bullrun Hoodie - White
let whiteHoodie = document.querySelectorAll("#apparel4 input.size-checkbox");
selected = [];

function addWhiteHoodieToCart() {
    for (let i = 0; i < whiteHoodie.length; i++) {
        if (whiteHoodie[i].checked) {
            selected.push(whiteHoodie[i]);
        }
    }
    for (let myItem of selected) {
        document.getElementById("empty").classList.add("not-empty");
        let p = document.createElement("p");
        let itemDescription = document.createTextNode(`Bullrun Hoodie — White, ${myItem.classList.item(1)}`);
        p.appendChild(itemDescription);
        let itemPrice = document.createElement("p");
        let price = document.createTextNode("$ 35");
        itemPrice.appendChild(price);
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.appendChild(p);
        newItem.appendChild(itemPrice);
        document.getElementById("itemsAdded").appendChild(newItem);
        shoppingCart.push(myItem);
        myItem.checked = false;
    }
    while (selected.length > 0) {
        selected.pop();
    }
}

// DRINKWARE
let pint = document.getElementById("drinkware1");
let tulip = document.getElementById("drinkware2");
let growler = document.getElementById("drinkware3");
// Pint
function addPintToCart() {
    document.getElementById("empty").classList.add("not-empty");
    let p = document.createElement("p");
    let itemDescription = document.createTextNode("Bullrun Brewery Pint");
    p.appendChild(itemDescription);
    let itemPrice = document.createElement("p");
    let price = document.createTextNode("$ 14");
    itemPrice.appendChild(price);
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.appendChild(p);
    newItem.appendChild(itemPrice);
    document.getElementById("itemsAdded").appendChild(newItem);
    shoppingCart.push(pint);
}
// Tulip
function addTulipToCart() {
    document.getElementById("empty").classList.add("not-empty");
    let p = document.createElement("p");
    let itemDescription = document.createTextNode("Logo Tulip Glass");
    p.appendChild(itemDescription);
    let itemPrice = document.createElement("p");
    let price = document.createTextNode("$ 12");
    itemPrice.appendChild(price);
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.appendChild(p);
    newItem.appendChild(itemPrice);
    document.getElementById("itemsAdded").appendChild(newItem);
    shoppingCart.push(tulip);
}
// Growler
function addGrowlerToCart() {
    document.getElementById("empty").classList.add("not-empty");
    let p = document.createElement("p");
    let itemDescription = document.createTextNode("64oz. Growler — Amber");
    p.appendChild(itemDescription);
    let itemPrice = document.createElement("p");
    let price = document.createTextNode("$ 35");
    itemPrice.appendChild(price);
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.appendChild(p);
    newItem.appendChild(itemPrice);
    document.getElementById("itemsAdded").appendChild(newItem);
    shoppingCart.push(growler);
}

// ACCESSORIES
let sticker = document.getElementById("accessories1");
let dadHat = document.getElementById("accessories2");
let panelHat = document.getElementById("accessories3");
// Sticker
function addStickerToCart() {
    document.getElementById("empty").classList.add("not-empty");
    let p = document.createElement("p");
    let itemDescription = document.createTextNode("Bullrun Brewery Sticker");
    p.appendChild(itemDescription);
    let itemPrice = document.createElement("p");
    let price = document.createTextNode("$ 2");
    itemPrice.appendChild(price);
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.appendChild(p);
    newItem.appendChild(itemPrice);
    document.getElementById("itemsAdded").appendChild(newItem);
    shoppingCart.push(sticker);
}
// Dad Hat
function addDadHatToCart() {
    document.getElementById("empty").classList.add("not-empty");
    let p = document.createElement("p");
    let itemDescription = document.createTextNode("Dad Hat — Black");
    p.appendChild(itemDescription);
    let itemPrice = document.createElement("p");
    let price = document.createTextNode("$ 12");
    itemPrice.appendChild(price);
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.appendChild(p);
    newItem.appendChild(itemPrice);
    document.getElementById("itemsAdded").appendChild(newItem);
    shoppingCart.push(dadHat);
}
// Panel Hat
function addPanelHatToCart() {
    document.getElementById("empty").classList.add("not-empty");
    let p = document.createElement("p");
    let itemDescription = document.createTextNode("5-Panel Hat — White");
    p.appendChild(itemDescription);
    let itemPrice = document.createElement("p");
    let price = document.createTextNode("$ 14");
    itemPrice.appendChild(price);
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.appendChild(p);
    newItem.appendChild(itemPrice);
    document.getElementById("itemsAdded").appendChild(newItem);
    shoppingCart.push(panelHat);
}

// COST CALCULATOR

// Adjust subtotal, taxes, and total cost on click
let subtotalOutput = document.getElementById("subtotal");
let taxesOutput = document.getElementById("taxes");
let totalOutput = document.getElementById("total");

let itemID = [];
let subtotal = 0;
let taxes = 0;
let total = 0;

function calculateCost () {
    // Calculate Subtotal
    let a1 = /^a1/;
    let a2 = /^a2/;
    let a3 = /^a3/;
    let a4 = /^a4/;
    // for each element in shoppingCart at index i, get item.id and add to itemID array;
    for (let i = 0; i < shoppingCart.length; i++) {
        itemID.push(shoppingCart[i].id);
    }; 
    // on each add to cart button click, get the new sum and replace the sum by zeroing out the sum at the top of the function each time it runs;
    for (let i = 0; i < itemID.length; i++) {
        if (a1.test(itemID[i])) {
            subtotal = subtotal + 22;
        } else if (a2.test(itemID[i])) {
            subtotal = subtotal + 22;
        } else if (a3.test(itemID[i])) {
            subtotal = subtotal + 35;
        } else if (a4.test(itemID[i])) {
            subtotal = subtotal + 35;
        } else if (itemID[i] == "drinkware1") {
            subtotal = subtotal + 14;
        } else if (itemID[i] == "drinkware2") {
            subtotal = subtotal + 12;
        } else if (itemID[i] == "drinkware3") {
            subtotal = subtotal + 35;
        } else if (itemID[i] == "accessories1") {
            subtotal = subtotal + 2;
        } else if (itemID[i] == "accessories2") {
            subtotal = subtotal + 12;
        } else if (itemID[i] == "accessories3") {
            subtotal = subtotal + 15;
        }
    };
    // display the sum in the p
    document.getElementById("subtotal").innerHTML = `$ ${subtotal}`;

    // Calculate Taxes
    taxes = subtotal * 0.056;
    taxes = taxes.toFixed(2);
    // display the taxes in p
    document.getElementById("taxes").innerHTML = `$ ${taxes}`;

    // Calculate Total
    total = parseFloat(subtotal) + parseFloat(taxes);
    // display the total in p
    document.getElementById("total").innerHTML = `$ ${total}`;
}; 

// CLEAR CART
function clearCart() {
    subtotal = 0;
    taxes = 0;
    total = 0;
    document.getElementById("itemsAdded").innerHTML = "";
    // create new div class=item, id=empty
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.setAttribute("id", "empty");
    // create text node Your cart is empty.
    let emptyCartMessage = document.createTextNode("Your cart is empty.");
    // create p element, append node
    let p = document.createElement("p");
    p.appendChild(emptyCartMessage);
    // append p to div
    newDiv.appendChild(p);
    // append new div to itemsAdded div
    document.getElementById("itemsAdded").appendChild(newDiv);
    // Zero out totals
    document.getElementById("subtotal").innerHTML = "$ 0";
    document.getElementById("taxes").innerHTML = "$ 0";
    document.getElementById("total").innerHTML = "$ 0";
}


// CHECKOUT CART
function submitCart() {
    window.alert(`Thank you for shopping at Bullrun Brewery! \n\nYour total was $${total}.\n\nClose this window and keep browsing with us!`)
    // Reload page at same location, empties cart
    location.reload();
};



// FORM VALIDATION
let formIsValid = false;
let fnameIsValid = false;
let lnameIsValid = false;
let emailIsValid = false;
let phoneIsValid = false;
let commentsValid = false;

let fname = document.getElementById("first");
let lname = document.getElementById("last");
let nameRegEx = /[a-z]{3,}/i;
let selectContact = document.querySelectorAll("fieldset > input[type=radio]");
console.log(selectContact);
let emailPreferred = document.getElementById("emailPreferred");
let callPreferred = document.getElementById("callPreferred");
let textPreferred = document.getElementById("textPreferred");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let comments = document.querySelector("textarea");
let errorOutput = document.getElementById("errorOutput"); // div
let ul = document.getElementById("errorOutput"); // ul

let invalidInputs = [];

// preferred contact check
function contactMethod() { 
    // Whichever preferred contact method is selected, corresponding field is then required, making the other optional.
    if (emailPreferred.checked) {
        email.attributes.required = "";
        phone.attributes.required = false;
        document.getElementById("emailLabel").classList.add("required");
        document.getElementById("phoneLabel").classList.remove("required");
    } else if (callPreferred.checked || textPreferred.checked) {
        phone.attributes.required = "";
        document.getElementById("phoneLabel").classList.add("required");
        document.getElementById("emailLabel").classList.remove("required");
        email.attributes.required = false;
        phone.attributes.required = "";
    }
};

// validate form inputs
function formValid(e) {
    e.preventDefault();
    // clear ul
    errorOutput.innerHTML = "";
    // first name check
    try {
        if (!nameRegEx.test(fname.value)) {
            invalidInputs.push(fname);
            throw new Error("First name is required.");
        } else {
            fname.classList.remove("no-error");
            fnameIsValid = true;
        }
    } catch(error) {
        let fnameError = document.createElement("li");
        fnameError.innerHTML = error.message;
        ul.appendChild(fnameError);
    }

    // last name check
    try {
        if (!nameRegEx.test(lname.value)) {
            invalidInputs.push(lname);
            throw new Error("Last name is required.");
        } else {
            lname.classList.add("no-error");
            lnameIsValid = true;
        }
    } catch(error) {
        let lnameError = document.createElement("li");
        lnameError.innerHTML = error.message;
        ul.appendChild(lnameError);
    }

    // preferred contact field
    let emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    try {
        if (document.getElementById("emailLabel").classList.contains("required")) {
            if (!emailRegEx.test(email.value)) {
                invalidInputs.push(email);
                throw new Error("Email address is required. Invalid or missing email address.");
            } else {
                email.classList.add("no-error");
                emailIsValid = true;
            }
        } else if (document.getElementById("phoneLabel").classList.contains("required")) {
            if (phone.value.length !== 10) {
                invalidInputs.push(phone);
                throw new Error("Please enter a valid phone number.");
            } else {
                phone.classList.add("no-error");
                phoneIsValid = true;
            }
        }

    } catch(error) {
        let emailError = document.createElement("li");
        emailError.innerHTML = error.message;
        ul.appendChild(emailError);
    }

    // comments
    try {
        if (comments.value.length == 0) {
            invalidInputs.push(comments);
            throw new Error("Comments are required.");
        } else {
            comments.classList.add("no-error");
            commentsValid = true;
        }
    } catch(error) {
        let commentError = document.createElement("li");
        commentError.innerHTML = error.message;
        ul.appendChild(commentError);
    }

    // if no errors exist
    if (invalidInputs.length == 0) {
        errorOutput.classList.add("no-error");
        errorOutput.classList.remove("error");
    } else {
        errorOutput.classList.remove("no-error");
        for (let x of invalidInputs) {
            x.classList.add("error");
        }
    }

    // check if all fields are valid
    if (fnameIsValid && lnameIsValid && commentsValid) {
        if (emailIsValid || phoneIsValid) {
        formIsValid = true;
        }
    } else {
        formIsValid = false;
    }
};



// SUBMIT

function submitForm() {
    // If form is valid and submit button is clicked:
    if (formIsValid) {
        // If there are items in the shopping cart, return to Products section
        if (shoppingCart.length !== 0) {
            // Display a message thanking the user for submitting in alert window
            window.alert(`Thank you for submitting your form. You'll be hearing from us soon!\n\nYou still have items in your cart! Don't forget about them.`);
            window.document.location.href = "#products";
        } else {  // If there are no items in the shopping cart, reload the page to the top
            // Display a message thanking the user for submitting in alert window
            window.alert(`Thank you for submitting your form. You'll be hearing from us soon!\n\nThis page will reload.`);
            // reload to top of page
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant",
            });
            location.reload();
        }
    }
};



// EVENT LISTENERS
// ------------------------------------------------------------- //
// Light / Dark Mode Toggle:
document.getElementById("lightDarkMode").addEventListener("click", changeMode);

// Products:
// Apparel
document.getElementById("addShirtBlack").addEventListener("click", addBlackShirtToCart);
document.getElementById("addShirtWhite").addEventListener("click", addWhiteShirtToCart);
document.getElementById("addHoodieBlack").addEventListener("click", addBlackHoodieToCart);
document.getElementById("addHoodieWhite").addEventListener("click", addWhiteHoodieToCart);
// // Drinkware
document.getElementById("addPint").addEventListener("click", addPintToCart);
document.getElementById("addTulip").addEventListener("click", addTulipToCart);
document.getElementById("addGrowler").addEventListener("click", addGrowlerToCart);
// // Accessories
document.getElementById("addSticker").addEventListener("click", addStickerToCart);
document.getElementById("addDadHat").addEventListener("click", addDadHatToCart);
document.getElementById("addPanelHat").addEventListener("click", addPanelHatToCart);

// Cost Calculator
// // Add event listener to all Add to Cart buttons on the page
let cartBtns = document.querySelectorAll("button[class=add-to-cart]");
cartBtns.forEach(cartBtn => {
    cartBtn.addEventListener("click", calculateCost);
});

// Clear / Submit Shopping Cart
document.getElementById("cartReset").addEventListener("click", clearCart);
document.getElementById("cartSubmit").addEventListener("click", submitCart);

// Validate / Submit Form
selectContact.forEach(contactType => {
    contactType.addEventListener("click", contactMethod);
});
document.getElementById("submit").addEventListener("click", formValid);
document.getElementById("submit").addEventListener("click", submitForm);