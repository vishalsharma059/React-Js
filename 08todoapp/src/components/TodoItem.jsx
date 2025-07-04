const TodoItem = ({ items, onDelete }) => {

  return (
    <div className="p-4">
      {items.length === 0 ? (
        <p className="text-gray-500 text-center">
          Welcome to the app! Add your todo. 🚀
        </p>
      ) : (
        items.map((todo, index) => (
          <div
            key={index}
            className="border-b rounded p-2 grid grid-cols-12 gap-4 text-left mb-2 items-center hover:bg-gray-600 "
          >
            <div className="col-span-6">{todo.name}</div>
            <div className="col-span-4">{todo.dueDate}</div>
            <div className="col-span-2">
              <button
                className=" cursor-pointer w-full p-2 bg-red-600 text-white rounded"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoItem;
