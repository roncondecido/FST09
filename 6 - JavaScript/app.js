// Arrays
let fruits = ["Apple", "Banana", "Orange", "Avocado"];
console.log("Fruits:", fruits);
console.log("Length of Fruits:", fruits.length);
console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[3]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

// Update Elements
fruits[0] = "Mango";
console.log("Fruits:", fruits);

// property: an information about the object.
// methods: function that belongs to an object.
// Add Element
// .push(): add an element at the end of the array
fruits.push("Apple", "Grapes");
console.log("Fruits:", fruits);

// .pop(): delete an element at the end of the array
let deletedFruit = fruits.pop();
console.log("Deleted Fruit:", deletedFruit);
console.log("Fruits:", fruits);

// .includes(): check if an element exists
// Return: either true or false
console.log("Is Orange inside of fruits:", fruits.includes("Orange"));

fruits.forEach(function (fruit) {
  console.log("Fruit:", fruit);
});
