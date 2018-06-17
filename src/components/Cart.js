import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";

export default class Cart extends Component {
  render() {
    const { products } = this.props;

    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={product.image_link}
                    style={{ width: 75, height: 75 }}
                    alt={product.name}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.brand || "-"}</td>
                <td>{product.category || "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.array.isRequired
};
