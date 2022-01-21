import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";

const Bar = () => {
  return (
    <Navbar color="light" light>
      <Nav className="ms-auto">
        <NavItem>
          <NavLink tag={Link} to="/">
            Product Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/prodCart">
            Product Cart
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/prodUpload">
            Product Upload
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/prodMange">
            Manage Product
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Bar;
