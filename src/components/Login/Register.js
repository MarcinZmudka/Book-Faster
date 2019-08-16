import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FirebaseContext } from "./../../content/FirebaseContext";
import { Link } from "react-router-dom";
import "./css/Login.css";

const Register = () => {
  const [login, setLogin] = useState(0);
  const [password1, setPassword1] = useState(0);
  const [password2, setPassword2] = useState(0);
  const [error, setError] = useState(0);
  const firebase = useContext(FirebaseContext);

  const updateEmail = event => {
    const value = event.target.value;
    setLogin(value);
  };

  const updatePassword1 = event => {
    const value = event.target.value;
    setPassword1(value);
  };
  const updatePassword2 = event => {
    const value = event.target.value;
    setPassword2(value);
  };
  const onSubmit = event => {
    event.preventDefault();
    if (password1 == password2) {
      firebase
        .createUserWithEmailAndPassword(login, password1)
        .then(authUser => {
          console.log(authUser);
        })
        .catch(err => {
          setError(err.message);
        });
    } else {
      setError("Podane hasła róźnią się");
    }
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
                id="password1"
                onChange={updatePassword1}
              />
            </Form.Group>

            <Form.Group className="login_group">
              <Form.Label>Potwierdź hasło</Form.Label>
              <Form.Control
                type="password"
                placeholder="Hasło"
                id="password2"
                onChange={updatePassword2}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Zarejestruj się
            </Button>
          </Form>
        </Col>
        <Col className="d-none d-sm-block" />
      </Row>
    </Container>
  );
};

export default Register;
