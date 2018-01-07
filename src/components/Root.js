import React from "react";
import Provider from "./Provider";
import TodoApp from "./App";

const Root = ({ store }) => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

export default Root;
