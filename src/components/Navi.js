import React from "react";
import "./Nav.css";
import Navbar from 'react-bootstrap/Navbar';

const Navi = () => {
  return (
    <Navbar expand="lg" className="mb-3 navbar">
      <Navbar.Brand href="#home" className="title">Book-Faster</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
};

export default Navi;
