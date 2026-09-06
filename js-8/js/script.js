"use strict";

const todos = [];

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
  priority: "priority",
};

const toDoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo.id), 0) + 1;

const createToDo = (array, quest) => {
  let newToDo = {
    [todoKeys.id]: toDoId(todos),
    [todoKeys.text]: quest,
    [todoKeys.is_completed]: false,
    [todoKeys.priority]: "Normal",
  };
  array.push(newToDo);
  return newToDo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo.id === todoId);
  if (todo === undefined) {
    console.error(`todo with id ${todoId} is not fount`);
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex == -1) {
    console.error(`bla bla ${todoId} not found`);
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

const giveHighPriorityById = (todos, todoId) => {
  const todo = todos.find(todo => todo.id === todoId);
  if (todo === undefined) {
    console.error(`todo with id ${todoId} is not fount`);
    return null;
  }
  todo[todoKeys.priority] = "High";
  todos.sort((a, b) => a.priority.localeCompare(b.priority));
  return todo;
};

const giveNormalPriorityById = (todos, todoId) => {
  const todo = todos.find(todo => todo.id === todoId);
  if (todo === undefined) {
    console.error(`todo with id ${todoId} is not fount`);
    return null;
  }
  todo[todoKeys.priority] = "Normal";
  todos.sort((a, b) => a.id - b.id);
  return todo;
};

const reverseList = todos => todos.reverse();

createToDo(todos, "baba");
createToDo(todos, "baba");
createToDo(todos, "baba");
createToDo(todos, "baba");

console.log(todos);
