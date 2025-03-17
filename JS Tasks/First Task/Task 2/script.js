let cartItems = [19.99, 9.99, 4.99];

let cartList = document.getElementById("cartItems");
cartItems.forEach(price => {
    let listItem = document.createElement("li");
    listItem.textContent = `$${price.toFixed(2)}`;
    cartList.appendChild(listItem);
});

let totalCost = cartItems.reduce((sum, price) => sum + price, 0);

let freeShippingThreshold = 30;
let shippingRate = 5.99;

let shippingCost = totalCost >= freeShippingThreshold ? 0 : shippingRate;

let finalAmount = totalCost + shippingCost;

document.getElementById("cartSummary").textContent = `Total: $${totalCost.toFixed(2)}, Shipping: $${shippingCost.toFixed(2)}, Final Amount: $${finalAmount.toFixed(2)}`;

console.log("Item Prices:", cartItems);
console.log("Total Cost:", totalCost);
console.log("Shipping Cost:", shippingCost);
console.log("Final Amount:", finalAmount);
