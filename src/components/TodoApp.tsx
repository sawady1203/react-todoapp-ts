import React from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

function TodoApp() {
  return (
    <div>
      <h1>TodoApp</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default TodoApp;
