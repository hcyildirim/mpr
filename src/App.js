import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "./containers/Products";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return <Products />;
  }
}

export default connect()(App);
