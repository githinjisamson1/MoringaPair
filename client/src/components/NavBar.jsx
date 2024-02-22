import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../styles.css";

const NavBar = () => {
  return (
    <Navbar className="navbar" bg="light" data-bs-theme="light" className="Container-fluid">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://plus.unsplash.com/premium_photo-1661277695409-0cc85f3b8a00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          {" Moringa Pair"}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/About Us" className="nav-link">
            About
          </Link>
          <Link to="/Contact Us" className="nav-link">
            Contact
          </Link>
          <Link to="/Footer" className="nav-link">
            Footer
          </Link>
        </Nav>

        <Row>
          <Col>
            <Link to="/students" className="nav-link">
              Students
            </Link>
          </Col>
          <Col>
            <Link to="/pairs" className="nav-link">
              Pairs
            </Link>
          </Col>
          <Col>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </Col>
          <Col>
            <Link to="/signup" className="nav-link">
              SignUp
            </Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
