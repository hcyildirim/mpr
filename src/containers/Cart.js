import React, { Component } from "react";
import { connect } from "react-redux";
import CartItems from "../components/CartItems";
import { deleteItemFromCart, markItemOnCart } from "../actions/cart";
import { addList } from "../actions/list";
import { getVisibleItems } from "../selectors";

class Cart extends Component {
  render() {
    const {
      cart: { payload, isLoading },
      deleteItem,
      markItem,
      createList,
      todos
    } = this.props;

    if (isLoading) {
      return <h2>Fetching</h2>;
    } else {
      return (
        <CartItems
          items={todos}
          onDelete={id => deleteItem(id)}
          onMark={id => markItem(id)}
          onExport={list => createList(list)}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    todos: getVisibleItems(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteItem: id => {
      dispatch(deleteItemFromCart(id));
    },
    markItem: id => {
      dispatch(markItemOnCart(id));
    },
    createList: list => {
      dispatch(addList(list));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
