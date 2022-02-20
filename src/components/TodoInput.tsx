import React from "react";
import { useState } from "react";
import { Task } from "./Types";

type Props = {
  tasks: Task[];
  updateTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

function TodoInput({ tasks, updateTasks }: Props) {
  const [title, setTitle] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTaskAppend = () => {
    // 新しいtaskの定義
    const newTask: Task = {
      id: tasks.length + 1,
      title: title,
      isActive: false,
    };
    // tasksに追加する
    updateTasks([...tasks, newTask]);
    // titleを空にする
    setTitle("");
  };

  return (
    <div>
      <h2>TodoInput</h2>
      <input
        type="text"
        placeholder="ここにタスクをいれて"
        value={title}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleTaskAppend}>
        追加
      </button>
    </div>
  );
}

export default TodoInput;
