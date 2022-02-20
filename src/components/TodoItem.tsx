import React from "react";
import { Task } from "./Types";

function TodoItem({ id, title, isActive, editable }: Task) {
  if (isActive) {
    return (
      <span>
        {id} : {title} : "active"
      </span>
    );
  } else {
    return (
      <span>
        {id} : {title} : "not active"
      </span>
    );
  }
}
export default TodoItem;
