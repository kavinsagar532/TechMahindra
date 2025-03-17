
let promoBanner = document.getElementById("promoBanner");


let promoMessage = "Welcome to our sale!";
let discountPercent = 30;
let isUserLoggedIn = true;
let userLanguage = "en"; 

if (isUserLoggedIn) {
    promoMessage = `Hello! You get an exclusive ${discountPercent}% discount!`;
} else {
    promoMessage = "Sign up to receive exclusive discounts!";
}

promoBanner.textContent = promoMessage;


console.log(typeof promoMessage); 
console.log(typeof discountPercent); 
console.log(typeof isUserLoggedIn);
console.log(typeof userLanguage); 
