// Operators and Expressions.
let num1 = 10;
let num2 = 5;
// Arithmetic Operators.
console.log("Addition(+):", num1 + num2);
console.log("Subtraction(-):", num1 - num2);
console.log("Multiplication(*):", num1 * num2);
console.log("Division(/):", num1 / num2);
console.log("Exponent(**):", num1 ** num2);
console.log("Remainder (Modulos - %):", num1 % 6);

// ORDER OF OPERATIONS
// PEMDAS/BODMAS
/*
P - Parenthesis
E - Exponents
M - Multiplacation
D - DIvision
A - Addition
S - Substraction
*/
let answer = 3 + (4 * (5 - 2) ** 2) / 2;
// answer = 3 + (4 * (5 - 2) ** 2) / 2;
// answer = 3 + (4 * 3 ** 2) / 2;
// answer = 3 + 4 * 9 / 2;
// answer = 3 + 36 / 2;
// answer = 3 + 18;
// answer = 21;
console.log("Answer:", answer);

// String Expression or Concatenation
let greeting = "Hi";
let name = "Alex";
console.log(greeting + " " + name + "!");
// \ - Espace Character.

// 3. Comparison Operators
// type coercion: it will convert the data type if necessary
console.log("Equal to (!=):", 5 != 5);
console.log("Equal to (!=) with type coercion:", 5 != "5");

console.log("Not Equal to (!=):", 5 != 5);
console.log("Not Equal to (!=) with type coercion:", 5 != "5");

// Strict Equal to(===): check if two values are equal in value and in data type.
console.log("Strict Equal to (===):", 5 === 5);
console.log("Strict Equal to (===):", 5 === "5");

// Strict Not Equal to(!==): check if two values are not equal in value and in data type.
console.log("Strict Not Equal to (!==):", 5 !== 5);
console.log("Strict Not Equal to (!==):", 5 !== "5");

console.log("Greater Than (>):", 5 > 3);
console.log("Less Than (<):", 3 < 5);
console.log("Greater Than or Equal to(>=):", 5 >= 3);
console.log("Less Than or Equal to(<=):", 3 <= 5);

// 4. Logical Operators
// AND - &&
// OR - ||
// NOT - !
let sunny = false;
let warm = false;
// AND: true only if all of the variables is true, otherwise false.
console.log("Is it sunny AND warm?", sunny && warm);

// OR: true if atleast one of the variable is true, otherwise false.
console.log("Is it sunny OR warm?", sunny || warm);

// NOT: inverts the value of a boolean.
console.log("NOT sunny?", !sunny);

// 5. Assignment Expression
// (=): assign a value to a variable.
let num3 = 10;
let num4 = 5;

// Addition Assignment (+=)
// num3 = num3 + num4;
num3 += num4;
console.log("The new value of num3:", num3);
// Computation: 10 + 5 = 15
// New value of num3: 15
// Subtraction Assignment (-=)
num3 -= num4;
console.log("The new value of num3:", num3);
// Computation: 15 - 5 = 10

// Multiplication Assignment (*=)
num3 *= num4;
console.log("The new value of num3:", num3);
// Computation: 10 * 5 = 50

// Division Assignment (/=)
num3 /= num4;
console.log("The new value of num3:", num3);
// Computation: 50 / 5 = 10

