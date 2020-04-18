import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feelingReducer = (state = 0, action) => {
  if (action.type === "SET_FEELING") {
    return action.payload;
  }

  return state;
};

const understandingReducer = (state = 0, action) => {
  if (action.type === "SET_UNDERSTANDING") {
    return action.payload;
  }

  return state;
};

const supportReducer = (state = 0, action) => {
  if (action.type === "SET_SUPPORT") {
    return action.payload;
  }

  return state;
};

const commentsReducer = (state = "", action) => {
  if (action.type === "SET_COMMENTS") {
    return action.payload;
  }

  return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentsReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
