// Function 1: Place Order
function placeOrder(callback) {
    setTimeout(() => {
        console.log("Order placed");
        callback();  // call the next function
    }, 1000); // delay of 1 second
}

// Function 2: Cook Food
function cookFood(callback) {
    setTimeout(() => {
        console.log("Food cooking...");
        callback();  // call the next function
    }, 2000); // delay of 2 seconds
}

// Function 3: Deliver Food
function deliverFood() {
    setTimeout(() => {
        console.log("Food delivered");
    }, 1500); // delay of 1.5 seconds
}


placeOrder(() => {
    cookFood(() => {
        deliverFood();
    });

    
});
