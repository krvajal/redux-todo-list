import React from "react";
import { shallow } from "enzyme";
import AddTodo from "../AddTodo";
import configureStore from "../../configureStore";

test("Add todo renders", () => {
  const component = shallow(<AddTodo store={configureStore()} />);
  expect(component).toMatchSnapshot();
});
