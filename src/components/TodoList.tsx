import React from "react";
import TodoItem from "./TodoItem";
import { Task } from "./Types";

type Props = {
  tasks: Task[];
  updateTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

function TodoList({ tasks, updateTasks }: Props) {
  const handleDelete = (deletetask: Task) => {
    updateTasks(tasks.filter((task) => task.id !== deletetask.id));
  };

  const handleCheck = (doneTask: Task) => {
    updateTasks(
      tasks.map((task) =>
        task.id === doneTask.id ? { ...task, isActive: !task.isActive } : task
      )
    );
    console.info(tasks);
  };

  return (
    <div>
      <h2>TodoList</h2>
      <ul>
        {tasks.map((task, key) => {
          return (
            <li key={key}>
              <input type="checkbox" onClick={() => handleCheck(task)} />
              <TodoItem {...task} />{" "}
              <button
                onClick={() => {
                  handleDelete(task);
                }}
              >
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
