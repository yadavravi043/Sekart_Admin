import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { signout } from "../../actions/auth.action";
import { useDispatch } from "react-redux";
const Header = () => {
  const user = localStorage.getItem("user");
  const dispatch = useDispatch();
  
  const loggedOut = () => {
    dispatch(signout());
  };
  const isLoggedOut = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span onClick={loggedOut} className="nav-link">
            Signout
          </span>
        </li>
      </Nav>
    );
  };
  const isLoggedIn = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link">
            signin
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">
            signup
          </NavLink>
        </li>
      </Nav>
    );
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ zIndex: "1" }}
      >
        <Container fluid>
          <Link to="/" className="navbar-brand">
            Admin Dashboard
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
            </NavDropdown>*/}
            </Nav>
            {user ? isLoggedOut() : isLoggedIn()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
