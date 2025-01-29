// Select DOM Elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const selectTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Add event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
selectTodo.addEventListener("change", filterTodos);

function addTodo(event) {
  event.preventDefault();

  // todoDiv Container
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // todo list item
  const newTodo = document.createElement("li");
  newTodo.textContent = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // Complete Button
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-btn");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  todoDiv.appendChild(completeButton);

  // Trash Button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}
function deleteOrCompleteTodo() {}
function filterTodos() {}
