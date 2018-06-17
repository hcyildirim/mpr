import React, { Component } from "react";
import { connect } from "react-redux";
import CartItems from "../components/CartItems";

class Cart extends Component {
  render() {
    const { payload, isLoading } = this.props.recipes;

    if (isLoading) {
      return <h2>Fetching</h2>;
    } else {
      return <CartItems items={payload} />;
    }
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
