import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const WelcomeMessage = () => {
    const {items} = useContext(TodoContext);

  return (
    items.length === 0 && (
      <p className="text-gray-500 text-center">
        Welcome to the app! Add your todo. 🚀
      </p>
    )
  );
};

export default WelcomeMessage;
