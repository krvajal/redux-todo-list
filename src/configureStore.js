import { createStore, applyMiddleware } from "redux";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";
import todoApp from "./reducers/index";

const logger = store => next => {
  if (!console.group) {
    // not available in some browsers
    return next;
  }
  return action => {
    console.group(action.type);
    console.log("%c prev state", "color: gray", store.getState());
    console.log("%c action", "color: blue", action);
    const returnValue = next(action);
    console.log("%c next state", "color: green", store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const promise = store => next => action => {
  // chek if the action is a promise though
  if (typeof action.then === "function") {
    // the action should return an action object
    return action.then(next);
  }
  return next(action);
};

// const wrapDispatchWithMiddlewares = (store, middlewares) => {
//   middlewares
//     .slice()
//     .reverse()
//     .forEach(middleware => {
//       store.dispatch = middleware(store)(store.dispatch);
//     });
// };
const configureStore = () => {
  const persistedState = loadState();

  // the order of the middlewares are the order
  // in which the actions progress throught them
  const middlewares = [promise];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }
  // wrapDispatchWithMiddlewares(store, middlewares);

  const store = createStore(
    todoApp,
    persistedState, //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  );

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
