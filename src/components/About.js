import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./store";
import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/about" component={About} />
        <Route path="/faq" component={Faq} />
      </Route>
    </Router>
  </Provider>,

  document.getElementById("root")
);

registerServiceWorker();
