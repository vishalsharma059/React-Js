// Action (names)

export const INCREMENT = "INCREMENT";

export const DECREMENT = "DECREMENT";

export const PRIVACY_TOGGLE = "PRIVACY_TOGGLE";

export const ADDITION = "ADDITION";
export const SUBTRACT = "SUBTRACT";

// in actions we return an object {type, payload}

// These are the action Creator functions

export const incrementCounter = () => ({ type: INCREMENT });

export const decrementCounter = () => ({ type: DECREMENT });

export const privateCounter = () => ({ type: PRIVACY_TOGGLE });

export const additonCounter = (num) => ({ type: ADDITION, payload: num });

export const subtractCounter = (num) => ({ type: SUBTRACT, payload: num });
