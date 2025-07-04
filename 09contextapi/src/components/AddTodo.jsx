import React, { useState, useRef, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function AddTodo() {

  const {addNewItem} = useContext(TodoContext);
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addNewItem(todoName, todoDate);
  };

  return (
    <>
      <div className="p-4">
        <form onSubmit={handleClick}>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <input
                type="text"
                ref={todoNameElement}
                className="w-full p-2 border rounded"
                placeholder="Enter Todo here"
              />
            </div>
            <div className="col-span-4">
              <input
                type="date"
                ref={todoDateElement}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="col-span-2">
              <button
                className="w-full p-2 bg-green-600 text-white rounded cursor-pointer"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
