import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// const store = configureStore({
//   reducer: {},
// });

export default store;
