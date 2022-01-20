import React from "react";
import "./TodoList.css"

const TodoList = (props) => {
  return (
    <div>
      {/* Le paso los props de todoList */}
      <ul>{props.children}</ul>
    </div>
  );
};

export  { TodoList };
