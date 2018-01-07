import React, { Component } from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import Provider from "./components/Provider";
import TodoApp from "./App";
import todoApp from "./reducers";

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);

// registerServiceWorker();
