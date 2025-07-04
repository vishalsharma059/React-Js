import { useState } from "react";

const Buttons = ({handleClick}) => {
  const buttons = [
    "1",
    "2",
    "3",
    "C",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "-",
    "0",
    "*",
    "/",
    "=",
    ];
    
  return (
    <>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {buttons.map((item, index) => (
            <button key={index} className="p-3 bg-gray-200 border rounded hover:bg-gray-300"
              onClick={(event) => {handleClick(event, item)}}  
            >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default Buttons;
