import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FirebaseContext } from "./../../content/FirebaseContext";
import { UserAuthContext } from "./../../content/UserAuthContext";
import { Link } from "react-router-dom";
import "./css/Login.css";

const LoginPage = props => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(0);
  const firebase = useContext(FirebaseContext);
  const [, setUserAuth, , setUserInfo] = useContext(UserAuthContext);
  const updateEmail = event => {
    const value = event.target.value;
    setLogin(value);
  };

  const updatePassword = event => {
    const value = event.target.value;
    setPassword(value);
  };
  const loginPassEmpty = () => {
    if(login === "" ){ 
      setError("Email nie może być pusty");
      return true;
    }
    if( password === ""){
      setError("Hasło nie może być puste")
      return true;
    }
    return false;
  }
  const checkErrorCode = err => {
    switch(err){
      case "auth/user-not-found":
        setError("Nierozpoznano nazwy użytkownika");
        break;
      case "auth/wrong-password":
        setError("Wprowadzone hasło jest nieprawidłowe");
        break;
      default: 
        setError("Spróbuj raz jeszcze");
        break;
    }
  }
  const onSubmit = event => {
    event.preventDefault();
    if(!loginPassEmpty()){
      firebase
      .signInWithEmailAndPassword(login, password)
      .then(res => {
        setUserAuth(true);
        var user = firebase.auth.currentUser;
        if (user != null) {
          let db = firebase.getDB();
          db.collection("users")
            .doc(login)
            .get()
            .then(function(user) {
              setUserInfo(user.data());
              }).catch(function(error) {
            });
        }
        props.history.push("/compare");
      })
      .catch(err => {
        checkErrorCode(err.code);
      });
    }
  };

  return (
        <div className = "login_background">
          <span className="login_logo">BOOK FASTER</span>
          <p className="login_title">Zaloguj się</p>
          <p className="error_login">{error ? error : ""}</p>
          <Form onSubmit={onSubmit} className="login_form">
            <Form.Group className="login_group">
              <Form.Label className="label">Adres Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Wprowadź email"
                id="email"
                onChange={updateEmail}
              />
            </Form.Group>

            <Form.Group className="login_group">
              <Form.Label className="label">Hasło</Form.Label>
              <Form.Control
                type="password"
                placeholder="Hasło"
                id="password"
                onChange={updatePassword}
              />
            </Form.Group>

            <Button variant="secondary" type="submit">
              Zaloguj się
            </Button>
          </Form>
          <Link to="/register" className="login_link">
            Nie masz konta ? Zarejestruj się
          </Link>
          <Link to="/passwordReset" className = "login_reset">
            Zapomniałeś hasła ?
          </Link>
        </div>

  );
};

export default LoginPage;
