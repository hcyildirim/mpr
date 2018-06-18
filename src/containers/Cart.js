import React, { Component } from "react";
import { connect } from "react-redux";
import CartItems from "../components/CartItems";
import { deleteItemFromCart } from "../actions/cart";

class Cart extends Component {
  render() {
    const { payload, isLoading } = this.props.cart;

    if (isLoading) {
      return <h2>Fetching</h2>;
    } else {
      return (
        <CartItems items={payload} onDelete={id => this.props.deleteItem(id)} />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteItem: id => {
      dispatch(deleteItemFromCart(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
