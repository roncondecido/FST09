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
function deleteOrCompleteTodo(event) {
  const targetBtn = event.target;
  if (targetBtn.classList.contains("complete-btn")) {
    // The user marks the task as completed.
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.toggle("completed");
  }
  if (targetBtn.classList.contains("trash-btn")) {
    // The user deletes the task.
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.add("fall");
    todoDiv.addEventListener("transitionend", function () {
      todoDiv.remove();
    });
  }
}
function filterTodos(event) {
  const todos = todoList.childNodes;
  const filterValue = event.target.value;
  todos.forEach(function (todo) {
    if (filterValue === "all") {
      todo.style.display = "flex";
    } else if (filterValue === "completed") {
      if (todo.classList.contains("completed")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    } else if (filterValue === "uncompleted") {
      if (!todo.classList.contains("completed")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    }
  });
}
