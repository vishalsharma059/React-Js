import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger"
import counterReducer from "./counter/counterReducer";

// 1- Just Dev-tools

// const counterStore = createStore(counterReducer, composeWithDevTools());

// 2- Just redux-logger

// const counterStore = createStore(counterReducer, applyMiddleware(logger));

// 3- using both Dev-tools and redux-logger

const counterStore = createStore(counterReducer, composeWithDevTools(applyMiddleware(logger)));

export default counterStore;
