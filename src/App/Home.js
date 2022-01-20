import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";

const Home = ({totalTodos, completedTodos, searchValue, setSearchValue, buscTodo, completeTodo, deleteTodo }) => {
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      {/* //Va abierta porque lleva items */}
      <TodoList>
        {buscTodo.map((element) => {
          return (
            <TodoItem
              text={element.text}
              completed={element.completed}
              key={element.text}
              onComplete={() => completeTodo(element.text)}
              onDelete={() => deleteTodo(element.text)}
            />
          );
        })}
      </TodoList>
      <CreateTodoButton />
    </>
  );
};

export { Home };
