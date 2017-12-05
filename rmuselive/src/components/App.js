import React, { Component } from "react";
import { connect } from "react-redux";

//import agent from "../agent";

const mapStateToProps = state => ({
  appName: state.common.appName,
  redirectTo: state.common.redirectTo,
  currentUser: state.common.currentUser
});
const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) => dispatch({ type: "APP_LOAD", payload, token }),
  onRedirect: () => dispatch({ type: "REDIRECT" })
});

class App extends Component {
  state = {};

  componentWillMount() {
    const token = window.localStorage.getItem("jwt");
    // if (token) {
    //   set with agent
    //   agent.setToken(token);
    // }
    // this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.context.router.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }

  render() {
    const appName = this.props.appName;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to RMuse Live</h1>
        </header>
        <p className="App-intro">
          <h2>A place for artist of all kinds.</h2>
        </p>
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
