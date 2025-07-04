import { useState } from "react";
import Buttons from "./components/Buttons";
import "./index.css";
const App = () => {
  const [calcValue, setCalcValue] = useState([]);

  const handleClick = (event, item) => {
    if (item === "=") {
      const newDisplayValue = eval(calcValue);
      setCalcValue(newDisplayValue);
    } else if (item === "C") {
      setCalcValue([]);
    } else {
      const newDisplayValue = calcValue + item;
      setCalcValue(newDisplayValue);
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="bg-white border rounded-xl p-6 shadow-lg w-80 ">
          <input
            type="text"
            className="w-full p-3 border rounded text-2xl text-right border-gray-500"
            placeholder="0"
            value={calcValue}
            readOnly
          />
          <Buttons handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default App;
