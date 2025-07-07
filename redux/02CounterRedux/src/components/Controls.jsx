import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  additonCounter,
  subtractCounter,
  privateCounter,
  incrementCounter,
  decrementCounter,
} from "../store/counter/counterAction";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  const handlePrivacyToggle = () => {
    dispatch(privateCounter());
  };

  const handleAddition = () => {
    const updateNum = inputElement.current.value;
    dispatch(additonCounter(updateNum));
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    const updateNum = inputElement.current.value;
    dispatch(subtractCounter(updateNum));
    inputElement.current.value = "";
  };

  return (
    <>
      <div className="flex justify-center gap-4">
        <button
          onClick={handleIncrement}
          className="rounded-xl shadow text-white font-semibold bg-green-500 hover:bg-green-700 px-4 py-2 mt-6"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="rounded-xl shadow text-white font-semibold bg-red-500 hover:bg-red-700 px-4 py-2 mt-6"
        >
          Decrement
        </button>
        <button
          onClick={handlePrivacyToggle}
          className="rounded-xl shadow text-white font-semibold bg-yellow-500 hover:bg-yellow-700 px-4 py-2 mt-6"
        >
          Privacy Toggle
        </button>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <input
          type="number"
          ref={inputElement}
          placeholder="Enter a number"
          className="border rounded px-4 py-2 w-48 shadow"
        />
        <button
          onClick={handleAddition}
          className="rounded-xl shadow text-white font-semibold bg-green-500 hover:bg-green-700 px-4 py-2"
        >
          Add
        </button>
        <button
          onClick={handleSubtract}
          className="rounded-xl shadow text-white font-semibold bg-red-500 hover:bg-red-700 px-4 py-2"
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
