import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/products";
import { addItemToCart } from "../actions/cart";
import { ToastContainer, toast } from "react-toastify";
import ProductList from "../components/ProductList";

class Products extends Component {
  componentDidMount() {
    if (this.props.products.payload.length === 0) {
      this.props.getProducts();
    }
  }

  onAddClick(item) {
    const {
      addItem,
      cart: { payload }
    } = this.props;

    if (payload.some(e => e.id === item.id)) {
      toast.warn(`${item.name} already exists in cart.`);
    } else {
      addItem(item);
      toast.success(`${item.name} added to cart.`);
    }
  }

  render() {
    const { payload, isLoading } = this.props.products;

    if (isLoading) {
      return <h2>Fetching</h2>;
    } else {
      return (
        <div>
          <ToastContainer />
          <ProductList
            products={payload}
            onClick={item => this.onAddClick(item)}
          />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => {
      dispatch(fetchProducts());
    },
    addItem: item => {
      dispatch(addItemToCart(item));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
