import { v4 } from "node-uuid";

export const addTodoAction = text => {
  if (text.trim().length === 0) return { type: "INVALID_INPUT" };
  return {
    type: "ADD_TODO",
    id: v4(),
    text: text.trim()
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

export const editTodoAction = (id, text) => {
  if (text.trim().length === 0) return { type: "INVALID_INPUT" };
  return {
    type: "EDIT_TODO",
    id,
    text: text.trim()
  };
};
