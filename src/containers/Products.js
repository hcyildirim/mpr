import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/products";
import { addItemToCart } from "../actions/cart";
import ProductList from "../components/ProductList";

class Products extends Component {
  componentDidMount() {
    if (this.props.products.payload.length === 0) {
      this.props.getProducts();
    }
  }

  render() {
    const { payload, isLoading } = this.props.products;

    if (isLoading) {
      return <h2>Fetching</h2>;
    } else {
      return (
        <ProductList
          products={payload}
          onClick={item => this.props.addItem(item)}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
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
