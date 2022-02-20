import React from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { Task } from "./Types";

function TodoApp() {
  const tasks: Task[] = [
    {
      id: 0,
      title: "test",
      isActive: false,
    },
    {
      id: 0,
      title: "test",
      isActive: false,
    },
    {
      id: 0,
      title: "test",
      isActive: false,
    },
  ];

  return (
    <div>
      <h1>TodoApp</h1>
      <TodoInput />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default TodoApp;
