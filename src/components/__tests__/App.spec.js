import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import { withRouter } from "react-router-dom";

it("renders without crashing", () => {
  const component = shallow(React.createElement(withRouter(<App />)));
  expect().toMatchSnapshot();
});
