import { useState } from "react";

const Practice = ({ items, handleKeyDown, text }) => {
  const [clickedItems, setClickedItems] = useState([]);

  const handleButton = (item, event) => {
    alert(`${item} being bought!!`);
    setClickedItems((prev) => [...prev, item]);
    console.log(event);
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-900 rounded">
        <div className="w-full max-w-md bg-gray-800 rounded-xl p-6 ">
          <h1 className="text-center text-3xl text-white font-bold mb-4">
            🍽️ Food Items
          </h1>
          <input
            type="text"
            className="w-full border rounded border-white text-white p-2 m-2 bg-transparent placeholder-gray-400"
            onKeyDown={handleKeyDown}
            placeholder="Enter the food items"
            autoFocus
          />

          {items.length === 0 ? (
            <p className="text-center font-semibold text-red-500 mt-2">
              😔 No food items available. Please add something!
            </p>
          ) : (
            <ul className="divide-y divide-gray-700">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center px-4 py-3 hover:bg-gray-700 rounded transition text-white ${
                    clickedItems.includes(item)
                      ? "bg-gray-500"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <span>{item}</span>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 cursor-pointer rounded shadow  text-white font-semibold text-sm px-3 py-1"
                    onClick={(event) => handleButton(item, event)}
                  >
                    Add
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Practice;
