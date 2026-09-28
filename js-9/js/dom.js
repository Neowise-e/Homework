import { todoKeys } from "./constants.js";
import {
  createTodo,
  completeTodoById,
  deleteTodoById,
} from "./todo-service.js";
import { setTodosToLocalStorage } from "./storage.js";

const todosList = document.querySelector(".todos");
const formElem = document.querySelector(".form");
const inputElem = document.querySelector(".input");

const createTodoElement = todo => {
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo");
  newTodo.dataset.id = todo[todoKeys.id];
  newTodo.innerHTML = `<div class="todo-text">${todo[todoKeys.text]}</div>
    <div class="todo-actions">
        <button class="button-complete button">&#10004;</button>
        <button class="button-delete button">&#10006;</button>
    </div>
    `;
  return newTodo;
};

export const renderTodos = (todos) => {
  todosList.innerHTML = "";
  todos.forEach(todo => {
    const todoElement = createTodoElement(todo);
    if (todo[todoKeys.is_completed]) {
      todosList.classList.add("completed");
    }
    todosList.prepend(todoElement);
  });
};

function handleCreateTodo(todos, text) {
  const todo = createTodo(todos, text);
  const todoElement = createTodoElement(todo);
  setTodosToLocalStorage(todos);
  todosList.append(todoElement);
}

export const initTodoHandlers = todos => {
  formElem.addEventListener("submit", event => {
    event.preventDefault();

    const text = inputElem.value.trim();
    if (text == "") {
      return;
    }
    handleCreateTodo(todos, text);
    inputElem.value = "";
  });

  todosList.addEventListener("click", event => {
    const todo = event.target.closest(".todo");
    const todoId = Number(todo.dataset.id);

    if (!todo) return;

    if (event.target.matches(".button-complete")) {
      completeTodoById(todos, todoId);
      setTodosToLocalStorage(todos);
      todo.classList.toggle("completed");
    }
    if (event.target.matches(".button-delete")) {
      deleteTodoById(todos, todoId);
      setTodosToLocalStorage(todos);
      todo.remove();
    }
  });
};
