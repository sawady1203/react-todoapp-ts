import React from "react";
import TodoItem from "./TodoItem";
import { Task } from "./Types";

type Props = {
  tasks: Task[];
};

function TodoList({ tasks }: Props) {
  console.log(tasks);
  return (
    <div>
      <h2>TodoList</h2>
      <ul>
        {tasks.map((task, key) => {
          //   console.log(task);
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
