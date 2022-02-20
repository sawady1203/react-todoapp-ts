import React from "react";
import { Task } from "./Types";

function TodoItem({ id, title }: Task) {
  return (
    <span>
      {id} : {title}
    </span>
  );
}

export default TodoItem;
