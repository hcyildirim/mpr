import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/products";
import { addProductToRecipe } from "../actions/recipes";
import ProductList from "../components/ProductList";

class Products extends Component {
  constructor(props) {
    super(props);
  }

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
          onClick={product => this.props.addProduct(product)}
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
    addProduct: product => {
      dispatch(addProductToRecipe(product));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
