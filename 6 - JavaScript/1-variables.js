console.log("Hello World!");
// This is a single-line comment.
/* 
This is a
multi-line
comment.
*/

// Variables: container/box.
/*
let - mutable/changeable - block-scope
var - mutable/changeable - global scope
const - immutable/unchangeable - block-scope
*/
// Camel-case naming convension.
let firstName = "John";
console.log("Firstname:", firstName);
firstName = "Jane";
console.log("Firstname:", firstName);
var lastName = "Doe";
console.log("Lastname:", lastName);
lastName = "Smith";
console.log("Lastname:", lastName);

// {} - Code Block
{
  var email = "janesmith@example.com";
  let username = "janesmith40";
  console.log("Username:", username);
}
/*
Note: You can only access a block scope variable 
inside of the block where you defined it.
console.log("Username:", username); 
ReferenceError: username is not defined.
*/
console.log("Email:", email);

const birthday = "01-24-1999";
console.log("Birthday:", birthday);
// birthday = "01-25-1999"; TypeError: Assignment to constant variable.
