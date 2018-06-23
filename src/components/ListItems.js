import React, { Component } from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem, Collapse } from "reactstrap";
import CartItems from "../components/CartItems";

export default class ListItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selecteds: []
    };
  }

  componentDidMount() {
    this.setState({ selecteds: this.props.selecteds });
  }

  onListSelected(name) {
    const index = this.state.selecteds.indexOf(name);

    if (index < 0) {
      this.state.selecteds.push(name);
    } else {
      this.state.selecteds.splice(index, 1);
    }

    this.setState({ selecteds: [...this.state.selecteds] });
  }

  render() {
    const { lists } = this.props;

    return (
      <ListGroup>
        {lists.map((list, index) => {
          return (
            <ListGroupItem
              onClick={() => this.onListSelected(list.name)}
              key={index}
            >
              {list.name}
              <Collapse isOpen={this.state.selecteds.includes(list.name)}>
                <CartItems
                  items={list.payload}
                  showDelete={false}
                  showMark={false}
                  showExport={false}
                />
              </Collapse>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  }
}

ListItems.propTypes = {
  lists: PropTypes.array.isRequired,
  selecteds: PropTypes.arrayOf(PropTypes.string)
};
