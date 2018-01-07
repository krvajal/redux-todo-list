import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Provider from "./components/Provider";
import TodoApp from "./App";
import todoApp from "./reducers";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const store = createStore(
  todoApp,
  persistedState //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);

// registerServiceWorker();
