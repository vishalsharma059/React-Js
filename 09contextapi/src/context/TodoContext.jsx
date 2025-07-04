import React, { createContext, useReducer } from "react";

// Create the Context
export const TodoContext = createContext({
  items: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

// Reducer Function
const todoItemsReducer = (currTodoItems, action) => {
  switch (action.type) {
    case "NEW_ITEM":
      return [
        ...currTodoItems,
        {
          name: action.payload.itemName,
          dueDate: action.payload.itemDueDate,
        },
      ];
    case "DELETE_ITEM":
      return currTodoItems.filter(
        (item) => item.name !== action.payload.itemName
      );
    default:
      return currTodoItems;
  }
};

// Provider complonent
const TodoItemContextProvider = ({ children }) => {
  const [TodoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newTodoAction);
  };

  const deleteItem = (itemNameToDelete) => {
    const deleteTodoAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: itemNameToDelete,
      },
    };
    dispatchTodoItems(deleteTodoAction);
  };

  return (
    <TodoContext.Provider
      value={{
        items: TodoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoItemContextProvider;
