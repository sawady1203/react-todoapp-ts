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
      <h2>TodoList</h2>
      <ul>
        {tasks.map((task, key) => {
          console.log(task);
          return (
            <li key={key}>
              <TodoItem {...task} />;
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
