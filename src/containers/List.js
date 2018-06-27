import React, { Component } from "react";
import { connect } from "react-redux";
import ListItems from "../components/ListItems";
import Spinner from "../components/Spinner";

class List extends Component {
  render() {
    const {
      list: { payload, isLoading }
    } = this.props;

    if (isLoading) {
      return <Spinner name="ball-clip-rotate-multiple" />;
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
