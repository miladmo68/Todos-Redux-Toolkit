import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) return;
    dispatch(addTodo({ id: nanoid(), text }));
    setText("");
  }
  return (
    <form
      onClick={handleSubmit}
      className="flex items-center gap-4 p-4 border border-amber-600 rounded-md shadow-md max-w-md mx-auto bg-white"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
        placeholder="Add a new todo..."
      />
      <button
        type="submit"
        className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
