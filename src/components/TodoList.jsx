import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  // console.log(todos);
  return (
    <div>
      <h1 className="flex mb-3 text-amber-600 font-bold justify-center">
        Todo List
      </h1>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
