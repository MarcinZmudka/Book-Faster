import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FirebaseContext } from "./../../content/FirebaseContext";
import { Link } from "react-router-dom";
import "./css/Login.css";

const LoginPage = () => {
  const [login, setLogin] = useState(0);
  const [password, setPassword] = useState(0);
  const [error, setError] = useState(0);
  const firebase = useContext(FirebaseContext);

  const updateEmail = event => {
    const value = event.target.value;
    setLogin(value);
  };

  const updatePassword = event => {
    const value = event.target.value;
    setPassword(value);
  };
  const onSubmit = event => {
    event.preventDefault();
    firebase
      .signInWithEmailAndPassword(login, password)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <Container>
      <Row>
        <Col className="d-none d-sm-block" />
        <Col>
          <span className="error_login">{error ? error : ""}</span>
          <Form onSubmit={onSubmit} className="login_form">
            <Form.Group className="login_group">
              <Form.Label>Adres Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Wprowadź email"
                id="email"
                onChange={updateEmail}
              />
            </Form.Group>

            <Form.Group className="login_group">
              <Form.Label>Hasło</Form.Label>
              <Form.Control
                type="password"
                placeholder="Hasło"
                id="password"
                onChange={updatePassword}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Zaloguj się
            </Button>
          </Form>
          <Link to="/register" className="login_link">
            Nie masz konta ? Zarejestruj się
          </Link>
        </Col>
        <Col className="d-none d-sm-block" />
      </Row>
    </Container>
  );
};

export default LoginPage;
