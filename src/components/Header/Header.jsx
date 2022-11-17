import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <Navbar>
      <Container>
        <Link to="/">
          <Navbar.Brand
            className={
              location.pathname === "/" ? "btn btn-success" : "btn btn-light"
            }
          >
            Home
          </Navbar.Brand>
        </Link>
        <Link to="/contact">
          <Navbar.Brand
            className={
              location.pathname === "/contact"
                ? "btn btn-success"
                : "btn btn-light"
            }
          >
            Contact us
          </Navbar.Brand>
        </Link>
        <Link to="/about">
          <Navbar.Brand
            className={
              location.pathname === "/about"
                ? "btn btn-success"
                : "btn btn-light"
            }
          >
            About us
          </Navbar.Brand>
        </Link>
        <Link to="/add">
          <Navbar.Brand
            className={
              location.pathname === "/add" ? "btn btn-success" : "btn btn-light"
            }
          >
            Add product
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
