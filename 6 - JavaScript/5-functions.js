// Functions
// Reusable block of code that can be executed whenever needed.
function greet() {
  console.log("Hello, welcome to world of functions!");
  console.log("Let's go!");
}

// Calling a function.
greet();
greet();
greet();

// 2. Function definition with parameters.
// parameters - placeholder
// arguments - values that we pass to the functions parameters.
function sum(num1, num2) {
  return num1 + num2;
}
console.log("Sum:", sum(10, 5));
console.log("Sum:", sum(29, 50));