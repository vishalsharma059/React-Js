// we need to have an intial state values

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

// Then we need to have the reducer

const counterReducer = (store = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...store, counter: store.counter + 1 };

    case "DECREMENT":
      return { ...store, counter: store.counter - 1 };

    case "ADDITION":
      return { ...store, counter: store.counter + Number(action.payload) };

    case "SUBTRACT":
      return { ...store, counter: store.counter - Number(action.payload) };

    case "PRIVACY_TOGGLE":
      return { ...store, privacy: !store.privacy };

    default:
      return store;
  }
};

export default counterReducer;