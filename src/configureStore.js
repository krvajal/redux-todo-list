import { createStore } from "redux";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";
import todoApp from "./reducers/index";

const addLoggintToDispatch = store => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    // not available in some browsers
    return rawDispatch;
  }
  return action => {
    console.group(action.type);
    console.log("%c prev state", "color: gray", store.getState());
    console.log("%c action", "color: blue", action);
    const returnValue = rawDispatch(action);
    console.log("%c next state", "color: green", store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const addPromiseSupportToDispatch = store => {
  const rawDispatch = store.dispatch;
  return action => {
    // chek if the action is a promise though
    if (typeof action.then === "function") {
      // the action should return an action object
      return action.then(rawDispatch);
    }
    return rawDispatch;
  };
};
const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    todoApp,
    persistedState //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  if (process.env.NODE_ENV !== "production") {
    store.dispatch = addLoggintToDispatch(store);
  }
  store.dispatch = addPromiseSupportToDispatch(store);
  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos
      });
    }, 1000)
  );
  return store;
};

export default configureStore;
