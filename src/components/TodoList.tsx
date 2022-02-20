import React from "react";
import TodoItem from "./TodoItem";
import { Task } from "./Types";

function TodoList() {
  const tasks: Task[] = [
    {
      id: 0,
      title: "test",
      isActive: false,
    },
  ];
  return (
    <div>
      <h2>TodoList</h2>
      <TodoItem {...tasks[0]} />
    </div>
  );
}

export default TodoList;
