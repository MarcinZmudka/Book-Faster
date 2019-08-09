import React from "react";
import "./Nav.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Navi = () => {
  return (
    <Navbar expand="lg" className="mb-3 navbar">
      <Navbar.Brand href="/" className="title">
        Book-Faster
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav >
          <Nav.Item>
            <Link to="/" className=" navigation1">Home</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to="/compare" className=" navigation1">Compare</Link>
          </Nav.Item>
        </Nav>
        <Nav >
        <Link to="/option" className=" navigation2" >Option</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navi;
