import { useState } from "react";
import { Home } from "./Home";
import "./App.css";

const defaultTodos = [
  { text: "Ver Tecla", completed: true },
  { text: "Jugar Switch", completed: true },
  { text: "Trabajar", completed: false },
  { text: "Comer Pizza", completed: false },
];

function App(props) {
  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState(defaultTodos);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  //Renderizar lo que busco
  let buscTodo = [];
  //Buscar
  if (!searchValue.length >= 1) {
    buscTodo = todos;
  } else {
    buscTodo = todos.filter((todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

      return todoText.includes(searchText);
    });
  }

  //Completar todo

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;

    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);
  };

  return (
    <>
      <Home
        totalTodos = {totalTodos}
        completedTodos = {completedTodos}
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
        buscTodo = {buscTodo}
        completeTodo = {completeTodo}
        deleteTodo = {deleteTodo}
      />
    </>
  );
}

export default App;
