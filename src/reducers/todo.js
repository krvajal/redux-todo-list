const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case "TOGGLE_TODO":
      if (action.id !== state.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    case "TOGGLE_ALL":
      return {
        ...state,
        completed: !state.completed
      };
    case "EDIT_TODO":
      if (action.id !== state.id) {
        return state;
      }
      return {
        ...state,
        text: action.text
      };

    default:
      return state;
  }
};

export default todo;
