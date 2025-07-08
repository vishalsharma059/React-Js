import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return (
    <div className="text-center text-2xl font-semibold text-gray-800">
      Counter current value: {counter}
    </div>
  );
};

export default DisplayCounter;
