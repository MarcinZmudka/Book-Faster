import React from "react";
import "./css/Nav.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Navi = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand className = "title">Book-Faster</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Link to="/" className=" navigation1">
              Strona Główna
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/compare" className=" navigation1">
              Porównaj
            </Link>
          </Nav.Item>
        </Nav>
        <Nav>
            <Nav.Item>
              <Link to="/login" className=" navigation2">
                Zaloguj się
              </Link>
            </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navi;
/*
<Navbar expand="lg" className="m-0 navbar">
      <Navbar.Brand href="/" className="title">
        Book-Faster
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav >
          <Nav.Item>
            <Link to="/" className=" navigation1">Strona Główna</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/compare" className=" navigation1">Porównaj</Link>
          </Nav.Item>
        <Nav.Item >
          <Link to="/login" className=" " >Zaloguj się</Link>
        </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
*/
