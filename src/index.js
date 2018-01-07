import React, { Component } from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import Provider from "./components/Provider";
import TodoApp from "./App";
import todoApp from "./reducers";

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);

// registerServiceWorker();
