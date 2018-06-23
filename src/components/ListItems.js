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

  onListSelected(id) {
    const index = this.state.selecteds.indexOf(id);

    if (index < 0) {
      this.state.selecteds.push(id);
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
              onClick={() => this.onListSelected(index)}
              key={index}
            >
              {Math.random()
                .toString(36)
                .substr(2, 5)}
              <Collapse isOpen={this.state.selecteds.includes(index)}>
                <CartItems
                  items={list}
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
  selecteds: PropTypes.arrayOf(PropTypes.number)
};
