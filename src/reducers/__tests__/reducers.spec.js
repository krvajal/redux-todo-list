import deepFreeze from "deep-freeze";
import expect from "expect";

import todos from "../todos";

test("toggle todo", () => {
  const stateBefore = {
    "0": {
      id: "0",
      text: "Learn Redux",
      completed: false
    },
    "1": {
      id: "1",
      text: "Go Shopping!",
      completed: false
    }
  };

  const action = {
    type: "TOGGLE_TODO",
    id: "1"
  };
  const stateAfter = {
    "0": {
      id: "0",
      text: "Learn Redux",
      completed: false
    },
    "1": {
      id: "1",
      text: "Go Shopping!",
      completed: true
    }
  };
  expect(todos({ byId: stateBefore, allIds: ["0", "1"] }, action)).toEqual({
    byId: stateAfter,
    allIds: ["0", "1"]
  });
});

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: "ADD_TODO",
    id: 0,
    text: "Learn Redux"
  };

  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    }
  ];
  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(todos(stateBefore, action)).toEqual(stateAfter);
};
