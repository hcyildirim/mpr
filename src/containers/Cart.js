import React, { Component } from "react";
import { connect } from "react-redux";
import CartItems from "../components/CartItems";
import { deleteItemFromCart, markItemOnCart } from "../actions/cart";
import { addList } from "../actions/list";
import { getMarkedItems } from "../selectors";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import shortid from "shortid";
import Spinner from "../components/Spinner";

const Msg = ({ name }) => (
  <Row>
    <Col sm="8">List created successfully.</Col>
    <Col sm="4">
      <Link to={`/lists/${name}`}>Detail</Link>
    </Col>
  </Row>
);

class Cart extends Component {
  onExport() {
    const { createList, filteredItems } = this.props;
    const name = shortid.generate();

    createList({ name, payload: filteredItems });
    toast(<Msg name={name} />);
  }
  render() {
    const {
      cart: { payload, isLoading },
      deleteItem,
      markItem
    } = this.props;

    if (isLoading) {
      return <Spinner name="ball-clip-rotate-multiple" />;
    } else {
      return (
        <div>
          <ToastContainer />
          <CartItems
            items={payload}
            onDelete={id => deleteItem(id)}
            onMark={id => markItem(id)}
            onExport={() => this.onExport()}
          />
        </div>
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
