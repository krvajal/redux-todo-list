import { combineReducers } from "./lib/react-redux";

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

export const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action));
    case "REMOVE_TODO":
      return state.filter(t => t.id != action.id);
    case "EDIT_TODO":
      return state.map(t => todo(t, action));
    case "CLEAR_COMPLETED":
      return state.filter(t => !t.completed);
    case "TOGGLE_ALL":
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos
});
export default todoApp;
