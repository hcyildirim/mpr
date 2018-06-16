import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/products";
import { addProductToRecipe } from "../actions/recipes";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from "reactstrap";
import Color from "../components/Color";

class Products extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  renderItems(items) {
    return items.map(item => {
      return (
        <Card>
          <CardImg top width="100%" src={item.image_link} />
          <CardBody>
            <CardTitle>{item.brand}</CardTitle>
            <CardSubtitle>{item.name}</CardSubtitle>
            <CardText>{item.description}</CardText>
            {item.tag_list.length > 0 && (
              <CardText className="text-muted">
                {item.tag_list.join(", ")}
              </CardText>
            )}
            <Color colors={item.product_colors} />
            <br />
            <Button
              color="primary"
              size="lg"
              block
              onClick={() => this.props.addProduct(item)}
            >
              Add
            </Button>
          </CardBody>
        </Card>
      );
    });
  }

  render() {
    const { payload, isLoading } = this.props.products;

    if (isLoading) {
      return <h2>Fetching</h2>;
    } else {
      return <CardColumns>{this.renderItems(payload)}</CardColumns>;
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
