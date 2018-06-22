import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Button } from "reactstrap";

export default class CartItems extends Component {
  render() {
    const { items, onDelete, onMark, onExport } = this.props;

    return (
      <Table borderless>
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
        {items.length > 0 && (
          <tfoot>
            <tr>
              <td>
                <Button onClick={() => onExport()}>Create List</Button>
              </td>
            </tr>
          </tfoot>
        )}
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <Button color="link" onClick={() => onMark(item.id)}>
                    {item.marked ? "Selected" : "Select"}
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
                  <Button color="link" onClick={() => onDelete(item.id)}>
                    Delete
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
  onDelete: PropTypes.func.isRequired,
  onMark: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired
};
