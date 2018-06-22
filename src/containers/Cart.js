import React, { Component } from "react";
import { connect } from "react-redux";
import CartItems from "../components/CartItems";
import { deleteItemFromCart, markItemOnCart } from "../actions/cart";
import { addList } from "../actions/list";
import { getMarkedItems } from "../selectors";

class Cart extends Component {
  render() {
    const {
      cart: { payload, isLoading },
      deleteItem,
      markItem,
      createList,
      filteredItems
    } = this.props;

    if (isLoading) {
      return <h2>Fetching</h2>;
    } else {
      return (
        <CartItems
          items={payload}
          onDelete={id => deleteItem(id)}
          onMark={id => markItem(id)}
          onExport={() => createList(filteredItems)}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    filteredItems: getMarkedItems(state)
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
