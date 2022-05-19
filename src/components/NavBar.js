import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/crocodile.png";
import "./../App.css";
import {
  Container,
  Nav,
  Navbar,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            Navigator
            <img src={logo} alt="croc" width="50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/" className="navlinks">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" className="navlinks">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact" className="navlinks">
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
