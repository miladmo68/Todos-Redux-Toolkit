import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="flex flex-col items-center my-auto m-4 py-3 bg-yellow-100 gap-4 font-serif">
      <h1 className="font-extrabold text-2xl text-amber-600">
        Todos Redux Toolkit
      </h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
