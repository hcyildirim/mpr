import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Button, ButtonGroup } from "reactstrap";

export default class CartItems extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedItems: [] };
  }

  onCheckBoxClicked(item) {
    const index = this.state.selectedItems.indexOf(item);

    if (index < 0) {
      this.state.selectedItems.push(item);
    } else {
      this.state.selectedItems.splice(index, 1);
    }

    this.setState({ selectedItems: [...this.state.selectedItems] });
  }

  render() {
    const { items, onDelete } = this.props;

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th />
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <Button
                    color="primary"
                    onClick={() => this.onCheckBoxClicked(item)}
                    active={this.state.selectedItems.includes(item)}
                  >
                    One
                  </Button>
                </td>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={item.image_link}
                    style={{ width: 75, height: 75 }}
                    alt={item.name}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.brand || "-"}</td>
                <td>{item.category || "-"}</td>
                <td>
                  <Button color="primary" onClick={() => onDelete(item.id)}>
                    Remove
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

CartItems.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};
