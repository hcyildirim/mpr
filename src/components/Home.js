import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Products from "../containers/Products";
import Cart from "../containers/Cart";

export default class Home extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">MPR</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/products">
                  Products
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/cart">
                  Cart
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>

          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
        </div>
      </Router>
    );
  }
}
