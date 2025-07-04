import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import WelcomeMessage from "./components/WelcomeMessage";
import "./index.css";
import TodoItemContextProvider from "./context/TodoContext";

export default function App() {
  return (
    <>
      <TodoItemContextProvider>
        <div className="flex justify-center text-center items-center min-h-screen bg-gray-800">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <AppName />
            <AddTodo />
            <WelcomeMessage />
            <TodoItem />
          </div>
        </div>
      </TodoItemContextProvider>
    </>
  );
}
