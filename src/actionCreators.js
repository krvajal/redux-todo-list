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
