import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import counterReducer from "./counter/counterReducer";
import postsReducer from "./posts/postsReducer";

// 1- Just Dev-tools

// const counterStore = createStore(counterReducer, composeWithDevTools());

// 2- Just redux-logger

// const counterStore = createStore(counterReducer, applyMiddleware(logger));

// 3- using both Dev-tools and redux-logger

const rootReducer = combineReducers({
  counterStore: counterReducer,
  postsStore: postsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
