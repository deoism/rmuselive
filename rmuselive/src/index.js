import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { Router } from "../../../../../../../Library/Caches/typescript/2.6/node_modules/@types/react-router";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Route>
  </Router>,

  document.getElementById("root")
);

registerServiceWorker();
