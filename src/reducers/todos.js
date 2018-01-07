import { combineReducers } from "redux";
import todo from "./todo";
import { access } from "fs";
import expect from "expect";
import deepFreeze from "deep-freeze";

const byId = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
    case "TOGGLE_TODO":
    case "EDIT_TODO":
      return { ...state, [action.id]: todo(state[action.id], action) };
    case "REMOVE_TODO":
      return { ...state, [action.id]: undefined };

    case "TOGGLE_ALL":
      return toggleAll(state);
    default:
      return state;
  }
};

const toggleAll = (state, action) => {
  return Object.keys(state).reduce((updatedTodos, id) => {
    updatedTodos[id] = {
      ...state[id],
      completed: !state[id].completed
    };
    return updatedTodos;
  }, {});
};
const allIds = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.id];
    case "REMOVE_TODO":
      return state.filter(id => id != action.id);
    default:
      return state;
  }
};

const byKeyTodos = combineReducers({ allIds, byId });

const todos = (state = {}, action) => {
  switch (action.type) {
    case "CLEAR_COMPLETED":
      return clearCompleted(state);
    default:
      return byKeyTodos(state, action);
  }
};

const clearCompleted = state => {
  if (state.allIds) {
    const activeIds = state.allIds.filter(id => !state.byId[id].completed);
    const activeById = activeIds.reduce((activeTodos, id) => {
      activeTodos[id] = state.byId[id];
      return activeTodos;
    }, {});
    return {
      allIds: activeIds,
      byId: activeById
    };
  }
  return state;
};

const testClearCompleted = () => {
  const stateBefore = {
    allIds: ["0", "1"],
    byId: {
      "0": {
        id: "0",
        text: "Learn Redux",
        completed: false
      },
      "1": {
        id: "1",
        text: "Go Shopping",
        completed: true
      }
    }
  };
  const action = {
    type: "CLEAR_COMPLETED"
  };
  const stateAfter = {
    allIds: ["0"],
    byId: {
      "0": {
        id: "0",
        text: "Learn Redux",
        completed: false
      }
    }
  };
  expect(todos(stateBefore, action)).toEqual(stateAfter);
};

testClearCompleted();

export default todos;

export const getVisibleTodos = (state, filter) => {
  const allTodos = state.allIds.map(id => state.byId[id]);
  switch (filter) {
    case "all":
      return allTodos;
    case "completed":
      return allTodos.filter(t => t.completed);
    case "active":
      return allTodos.filter(t => !t.completed);
    default:
      return allTodos;
  }
};
export const getActiveTodoCount = state => {
  return state.allIds.reduce((count, id) => {
    if (!state.byId[id].completed) count++;
    return count;
  }, 0);
};
export const getCompletedTodoCount = state => {
  return state.allIds.length - getActiveTodoCount(state);
};
