import React, { Component } from "react";
import { connect } from "react-redux";
import CartItems from "../components/CartItems";
import { deleteItemFromCart, markItemOnCart } from "../actions/cart";

class Cart extends Component {
  render() {
    const {
      cart: { payload, isLoading },
      deleteItem,
      markItem
    } = this.props;

    if (isLoading) {
      return <h2>Fetching</h2>;
    } else {
      return (
        <CartItems
          items={payload}
          onDelete={id => deleteItem(id)}
          onMark={id => markItem(id)}
        />
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
    },
    markItem: id => {
      dispatch(markItemOnCart(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
