import React, { useContext } from "react";
import "./Nav.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { UserAuthContext } from "../../content/UserAuthContext";
import SignOut from "../Login/SignOut";

const Navi = () => {
  const [userAuth] = useContext(UserAuthContext);
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand className="title">Book-Faster</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Link to="/" className=" navigation1">
              Strona Główna
            </Link>
          </Nav.Item>
          <Nav.Item>
            {userAuth ? (
              <Link to="/compare" className=" navigation1">
                Porównaj
              </Link>
            ) : (
              ""
            )}
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item className = "option_nav">
            {userAuth ? <Link to="/option" className="navigation1" >Konto</Link> : ""}
          </Nav.Item>
          <Nav.Item>
            {!userAuth ? (
              <Link to="/login" className=" ">
                <Button variant="outline-secondary">Zaloguj się</Button>
              </Link>
            ) : (
              <SignOut />
            )}
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navi;
