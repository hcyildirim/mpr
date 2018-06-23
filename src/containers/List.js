import React, { Component } from "react";
import { connect } from "react-redux";
import ListItems from "../components/ListItems";

class List extends Component {
  render() {
    const {
      list: { payload, isLoading }
    } = this.props;

    if (isLoading) {
      return <h2>Fetching</h2>;
    } else {
      return (
        <ListItems lists={payload} selecteds={[this.props.match.params.id]} />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    list: state.list
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
