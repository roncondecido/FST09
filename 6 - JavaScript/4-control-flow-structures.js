// Control Flow Structures
// 1. Conditional Statements
// Allow us to execute different blocks of code based on a condition.
// if, else if, else statement
// {} - Code Block
// () - Conditional Block
let temperature = 22;
if (temperature < 0) {
  console.log("It's freezing!");
  console.log("Stay indoors and drink hot chocolate.");
} else if (temperature >= 0 && temperature <= 19) {
  // Range: 0 - 19
  console.log("It's cool outside.");
} else {
  console.log("It's warm outside.");
}

// 2. Looping Statements
// Repeatedly execute a blocki of code until a specific condition is not met.

// For Loop
/*
    1st: Variable Initialization.
    2nd: Condition Expression.
    3rd: Increment/Decrement.
*/
for (let i = 1; i <= 3; i++) {
  console.log("For Loop Count:", i);
}

// While Loop
let count = 1;
while (count <= 3) {
  console.log("While Loop Count:", count);
  count++;
}
