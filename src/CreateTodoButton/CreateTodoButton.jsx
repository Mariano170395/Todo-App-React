import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  const clickButton = (mensaje) => {
    alert(mensaje);
  };
  return (
    <button
      className="CreateTodoButton"
      onClick={() => clickButton("este es el mensaje")}
    >
      +
    </button>
  );
};

export { CreateTodoButton };
