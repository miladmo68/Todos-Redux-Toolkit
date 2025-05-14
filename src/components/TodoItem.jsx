import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center p-4 border border-amber-600 rounded-md gap-4 shadow-sm mb-2 w-full min-w-md bg-white">
      <span className="text-gray-800">{todo.text}</span>
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
