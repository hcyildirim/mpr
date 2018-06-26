import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Color extends Component {
  render() {
    const { colors } = this.props;

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {colors.map((color, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: color.hex_value,
                borderRadius: "50%",
                width: 20,
                height: 20,
                marginTop: 0,
                marginRight: 3,
                marginBottom: 3,
                marginLeft: 3
              }}
            />
          );
        })}
      </div>
    );
  }
}

Color.propTypes = {
  colors: PropTypes.array
};
