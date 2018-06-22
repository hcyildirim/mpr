import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { applyMiddleware, compose, createStore } from "redux";

const logger = createLogger();

export default function configureStore(initialState, debug = false) {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(thunk, logger))
  );

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers/index");

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
