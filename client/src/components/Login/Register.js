import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FirebaseContext } from "./../../content/FirebaseContext";
import { UserAuthContext } from "./../../content/UserAuthContext";
import "./css/Login.css";
import Register_engine from "./Register_engine";

const Register = props => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [hotel, setHotel] = useState("");
  const [place, setPlace] = useState("");
  const [error, setError] = useState(0);
  const [, setUserAuth, , setUserInfo] = useContext(UserAuthContext);
  const clock = getTime();
  const firebase = useContext(FirebaseContext);

  const updateEmail = event => {
    const value = event.target.value;
    setLogin(value);
  };
  const updateName = event => {
    const value = event.target.value;
    setName(value);
  };
  const updatePassword1 = event => {
    const value = event.target.value;
    setPassword1(value);
  };
  const updatePassword2 = event => {
    const value = event.target.value;
    setPassword2(value);
  };
  const updateUserHotel = event => {
    const value = event.target.value;
    setHotel(value);
  };
  const updatePlace = event => {
    const value = event.target.value;
    setPlace(value);
  };
  const typedDataIncorrect = () => {
    if(password1 == ""){
      setError("Hasło nie może być puste");
      return true;
    }
    if(password2 == ""){
      setError("Hasło nie może być puste");
      return true;
    }
    if(password1 != password2){
      setError("Podane hasło różnią się");
      return true;
    }
    if(login == "" ){ 
      setError("Email nie może być pusty");
      return true;
    }
    if(hotel == "" ){ 
      setError("Hotel nie może być pusty");
      return true;
    }
    if(place == ""){
      setError("Miejscowość nie może być puste")
      return true;
    }
    if(name == ""){
      setError("Imię nie może być puste")
      return true;
    }
    return false;
  }
  const onSubmit = event => {
    event.preventDefault();
    if (!typedDataIncorrect()) {
      try{
        Register_engine({
          firebase: firebase,
          name: name,
          login: login,
          password: password1,
          hotel: hotel,
          place: place,
          valid_date: clock,
          setError: setError,
          setUserAuth: setUserAuth,
          setUserInfo: setUserInfo,
          props_history: props.history
        });
      }
      catch(error){
        setError(error);
      }
    }
  };

  return (
        <div className = "login_background">
          <span className="login_logo">BOOK FASTER</span>
          <p className="login_title">Zarejestruj się</p>
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
              <Form.Label className="label">Imię</Form.Label>
              <Form.Control
                type="text"
                placeholder="Twoje imię"
                id="name"
                onChange={updateName}
              />
            </Form.Group>
            <Form.Group className="login_group">
              <Form.Label className="label">Hasło</Form.Label>
              <Form.Control
                type="password"
                placeholder="Hasło"
                id="password1"
                onChange={updatePassword1}
              />
            </Form.Group>

            <Form.Group className="login_group">
              <Form.Label className="label">Potwierdź hasło</Form.Label>
              <Form.Control
                type="password"
                placeholder="Hasło"
                id="password2"
                onChange={updatePassword2}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label">Nazwa twojego obiektu</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nazwa twojego obiektu"
                onChange={updateUserHotel}
              />
              <Form.Text className="undername">
                Wpisz nazwę swojego obiektu tutaj, dzięki temu będzie wyróżniany
                przy wynikach wyszukiwania.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail1">
              <Form.Label className="label">Miejscowość</Form.Label>
              <Form.Control as="select" onChange={updatePlace}>
                <option value="">Miejscowość</option>
                <option>Białka Tatrzańska</option>
                <option>Bukowina Tatrzańska</option>
                <option>Zakopane</option>
              </Form.Control>
              <Form.Text className="undername">
                W której znajduje się twój obiekt
              </Form.Text>
            </Form.Group>
            <Button variant="secondary" type="submit">
              Zarejestruj się
            </Button>
          </Form>
        </div>
  );
};

export default Register;

const getTime = () => {
  let string = localStorage.getItem("time-bookfaster");
  let object = JSON.parse(string);
  return object;
}