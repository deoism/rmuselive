import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./store";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { Router } from "../../../../../../../Library/Caches/typescript/2.6/node_modules/@types/react-router";

import Login from "./components/Login";
import Register from "./components/Register";

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/settings" component={Settings} />
      </Route>
    </Router>
  </Provider>,

  document.getElementById("root")
);

registerServiceWorker();
