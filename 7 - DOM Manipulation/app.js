// Document Object Model (DOM)
// allow us to use JavaScript to change the structure, content and style of our website.

// .querySelector()
// #id, .class, tagname
// Return: First Element
const elementWithID = document.querySelector("#first-div");
console.log(elementWithID);

// Update the content and style
elementWithID.textContent = "Div 1";
elementWithID.style.color = "Green";
elementWithID.style.backgroundColor = "Yellow";
elementWithID.style.fontFamily = "Impact";

// This will only select the first element.
const elementWithClass = document.querySelector(".sample-div");
console.log(elementWithClass);

// .querySelectorAll()
// #id, .class, tagname
const elementsWithClass = document.querySelectorAll(".sample-div");
console.log(elementsWithClass);
elementsWithClass[1].textContent = "Div 2";
elementsWithClass[1].style.backgroundColor = "#0d3b66";
elementsWithClass[1].style.color = "#faf0ca";

const headings = document.querySelectorAll("h3");
console.log(headings);

headings.forEach(function (heading) {
  heading.style.backgroundColor = "#e07a5f";
  heading.style.color = "#f4f1de";
});

// Update element attributes
const dayNightIcon = document.querySelector("#day-night-icon");
dayNightIcon.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

// Appending New Elements
const parentElementDiv = document.querySelector("#parent-element");
const createdElementDiv = document.createElement("div");
createdElementDiv.textContent = "Child Element";
parentElementDiv.appendChild(createdElementDiv);

// Removing Elements
const elementToBeRemoved = document.querySelector("#element-to-be-removed");
elementToBeRemoved.remove();

// Adding Event Listeners and Manipulating Element Styles
const darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", function () {
  const pageContainer = document.querySelector("#page-container");
  pageContainer.style.backgroundColor = "black";
  pageContainer.style.color = "white";
  const pageModeText = document.querySelector("#page-mode-text");
  pageModeText.textContent = "Dark Mode";
});
