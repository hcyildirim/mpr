import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return <Home />;
  }
}

export default connect()(App);
