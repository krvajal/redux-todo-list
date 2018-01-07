import React from "react";
import Provider from "./Provider";
import TodoApp from "./App";
import { BrowserRouter, Route } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/:filter?" component={TodoApp} />
    </BrowserRouter>
  </Provider>
);

export default Root;
