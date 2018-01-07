import { v4 } from "node-uuid";

export const addTodoAction = text => {
  return {
    type: "ADD_TODO",
    id: v4(),
    text
  };
};

export const toggleTodoAction = id => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};

export const deleteTodoAction = id => {
  return {
    type: "REMOVE_TODO",
    id
  };
};

export const toggleAllAction = () => {
  return {
    type: "TOGGLE_ALL"
  };
};
