import React, { Component } from "react";
import PropTypes from "prop-types";
import SpinKit from "react-spinkit";

export default class Spinner extends Component {
  render() {
    const { name } = this.props;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <SpinKit name={name} />
      </div>
    );
  }
}

Spinner.propTypes = {
  name: PropTypes.string.isRequired
};
