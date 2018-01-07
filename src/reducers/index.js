import { combineReducers } from "redux";
import todos, * as fromTodos from "./todos";

const todoApp = combineReducers({
  todos
});
export default todoApp;

export const getVisibleTodos = (state, filter) => {
  return fromTodos.getVisibleTodos(state.todos, filter);
};

export const getActiveTodoCount = state => {
  return fromTodos.getActiveTodoCount(state.todos);
};
export const getCompletedTodoCount = state =>
  fromTodos.getCompletedTodoCount(state.todos);
