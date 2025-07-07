const redux = require("redux");

const Initial_Value = {
  counter: 0,
};

const reducer = (store = Initial_Value, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: store.counter + 1 };
    case "DECREMENT":
      return { counter: store.counter - 1 };
    case "ADDTION":
      return { counter: store.counter + action.payload.number };
    default:
      return store;
  }
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

// Dispatching actions
store.dispatch({ type: "INCREMENT" }); 
store.dispatch({ type: "INCREMENT" }); 
store.dispatch({ type: "DECREMENT" }); 
store.dispatch({ type: "ADDTION", payload: {number: 7} }); 
