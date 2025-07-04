import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./index.css";
import { useState } from "react";

export default function App() {
  const initialTodo = [
    {
      name: "BreakFast",
      dueDate: "21/05/2025",
    },
    {
      name: "Gym",
      dueDate: "21/05/2025",
    },
    {
      name: "Go to College",
      dueDate: "21/05/2025",
    },
  ];

  const [TodoItems, setTodoItems] = useState(initialTodo);
  const handleDelete = (indexToDelete) => {
    const updateTodos = TodoItems.filter((_, i) => i !== indexToDelete);
    setTodoItems(updateTodos);
  };

  return (
    <>
      <div className="flex justify-center text-center items-center min-h-screen bg-gray-800">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <AppName />
          <AddTodo
            onAdd={(newTodo) => setTodoItems([...initialTodo, newTodo])}
          />
          <TodoItem items={TodoItems} onDelete={handleDelete} />
        </div>
      </div>
    </>
  );
}
