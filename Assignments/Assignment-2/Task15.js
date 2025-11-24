// Given monthly expenses array
let expenses = [2000, 1500, 3500, 4000];

// Function to calculate total expenses
function calculateTotal(expArray) {
    let total = 0;  // start from 0

    // Loop through the array and add each expense
    for (let i = 0; i < expArray.length; i++) {
        total += expArray[i];
    }

    console.log("Total Money Spent: ₹" + total);
}

// Call the function
calculateTotal(expenses);
