import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Task } from "./Types";

type Props = {
  tasks: Task[];
  updateTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

function TodoList({ tasks, updateTasks }: Props) {
  const [_title, setTitle] = useState<string>(" ");
  const handleDelete = (deletetask: Task) => {
    updateTasks(tasks.filter((task) => task.id !== deletetask.id));
  };

  const handleCheck = (doneTask: Task) => {
    updateTasks(
      tasks.map((t) =>
        t.id === doneTask.id ? { ...t, isActive: !t.isActive } : t
      )
    );
    console.info(tasks);
  };

  const handleEdit = (editTask: Task) => {
    updateTasks(
      tasks.map((t) =>
        t.id === editTask.id ? { ...t, editable: !t.editable } : t
      )
    );
  };

  const handleEditTitle = (
    e: React.ChangeEvent<HTMLInputElement>,
    task: Task
  ) => {
    e.isDefaultPrevented();
    setTitle(e.target.value);
    updateTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, title: _title } : t))
    );
  };

  const handleSaveTitle = (task: Task) => {
    updateTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, editable: !t.editable } : t))
    );
  };

  return (
    <div>
      <h2>TodoList</h2>
      <ul>
        {tasks.map((task, key) => {
          if (!task.editable) {
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
                <button
                  onClick={() => {
                    handleEdit(task);
                  }}
                >
                  編集
                </button>
              </li>
            );
          } else {
            return (
              <li key={key}>
                <input
                  type="text"
                  placeholder={task.title}
                  onChange={(e) => handleEditTitle(e, task)}
                />
                <button type="submit" onClick={() => handleSaveTitle(task)}>
                  変更
                </button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default TodoList;
