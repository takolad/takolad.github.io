import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import "./style.css";

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand href="/react-portfolio/">
          John Hinojosa's Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/react-portfolio/">
              Home
            </Link>
            <Link className="nav-link" to="/react-portfolio/portfolio">
              Portfolio
            </Link>
            <Link className="nav-link" to="/react-portfolio/contact">
              Contact
            </Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/takolad"
            >
              GitHub Profile
            </Nav.Link>
            <Nav.Link
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/john-hinojosa/"
            >
              LinkedIn Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
