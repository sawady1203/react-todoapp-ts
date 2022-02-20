import React from "react";
import { Task } from "./Types";

function TodoItem({ id, title }: Task) {
  return (
    <div>
      <h3>
        {id} : {title}
      </h3>
    </div>
  );
}

export default TodoItem;
