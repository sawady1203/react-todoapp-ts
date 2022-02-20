import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import { Task } from "./Types";

function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <div>
      <h1>TodoApp</h1>
      <TodoInput tasks={tasks} updateTasks={setTasks} />
      <TodoList tasks={tasks} updateTasks={setTasks} />
    </div>
  );
}

export default TodoApp;
