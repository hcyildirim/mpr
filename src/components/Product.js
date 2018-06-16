import React, { PropTypes, Component } from "react";

export default class Product extends Component {
  render() {
    const { items } = this.props;
    console.log(JSON.stringify(items));

    return (
      <div>
        <p>Hi from the ProductComponent</p>
        <p>{JSON.stringify(props)}</p>
      </div>
    );
  }
}

Product.propTypes = {
  items: PropTypes.object
};
