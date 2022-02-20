import React from "react";
import { useState } from "react";
import { Task } from "./Types";

type Props = {
  tasks: Task[];
  updateTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

function TodoInput({ tasks, updateTasks }: Props) {
  const [title, setTitle] = useState<string>("");
  const [count, setCount] = useState<number>(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTaskAppend = () => {
    // 新しいtaskの定義
    setCount(count + 1);
    const newTask: Task = {
      id: count,
      title: title,
      isActive: false,
      editable: false,
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
