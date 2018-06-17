import React, { Component } from "react";
import PropTypes from "prop-types";

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

import Color from "./Color";

export default class ProductList extends Component {
  render() {
    const { products, onClick } = this.props;

    return (
      <CardColumns>
        {products.map(product => {
          return (
            <Card key={Math.random()}>
              <CardImg top width="100%" src={product.image_link} />
              <CardBody>
                <CardTitle>{product.brand}</CardTitle>
                <CardSubtitle>{product.name}</CardSubtitle>
                <CardText>{product.description}</CardText>
                {product.tag_list.length > 0 && (
                  <CardText className="text-muted">
                    {product.tag_list.join(", ")}
                  </CardText>
                )}
                <Color colors={product.product_colors} />
                <br />
                <Button
                  color="primary"
                  size="lg"
                  block
                  onClick={() => onClick(product)}
                >
                  Add
                </Button>
              </CardBody>
            </Card>
          );
        })}
      </CardColumns>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};
