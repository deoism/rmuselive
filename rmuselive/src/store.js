import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { promiseMiddleware, localStorageMiddleware } from "./middleware";

import settings from "./reducers/setting";
i;

const defaultState = {
  appName: "RMuse_Live",
  articles: null
};

const reducer = combineReducers({
  auth,
  common,
  home,
  settings,
  article
});

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(
  reducer,
  compose(
    applyMiddleware(promiseMiddleware, localStorageMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
