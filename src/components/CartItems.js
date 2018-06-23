import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Button } from "reactstrap";

export default class CartItems extends Component {
  render() {
    const {
      items,
      showDelete,
      onDelete,
      showMark,
      onMark,
      showExport,
      onExport
    } = this.props;

    return (
      <Table striped>
        <thead>
          <tr>
            {showMark && <th />}
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            {showDelete && <th>Action</th>}
          </tr>
        </thead>
        {items.length > 0 &&
          showExport && (
            <tfoot>
              <tr>
                <td colSpan="100">
                  <Button onClick={() => onExport()}>Save</Button>
                </td>
              </tr>
            </tfoot>
          )}
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                {showMark && (
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => onMark(item.id)}
                      checked={!!item.marked}
                    />
                  </td>
                )}
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
                {showDelete && (
                  <td>
                    <Button color="link" onClick={() => onDelete(item.id)}>
                      Delete
                    </Button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

CartItems.defaultProps = {
  showDelete: true,
  showMark: true,
  showExport: true
};

CartItems.propTypes = {
  items: PropTypes.array.isRequired,
  showDelete: PropTypes.bool,
  onDelete: PropTypes.func,
  showMark: PropTypes.bool,
  onMark: PropTypes.func,
  showExport: PropTypes.bool,
  onExport: PropTypes.func
};
