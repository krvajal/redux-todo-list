let nextTodoId = 0;
export const addTodoAction = text => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text
  };
};

export const setVisibilityAction = filter => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
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