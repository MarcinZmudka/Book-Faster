import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./OptionPage.css";
import { UserAuthContext } from "../../content/UserAuthContext";
import { FirebaseContext } from "../../content/FirebaseContext";

const Option = () => {
  const [, , userInfo, setUserInfo] = useContext(UserAuthContext);
  const firebase = useContext(FirebaseContext);
  const [hotel, setHotel] = useState(userInfo.hotel);
  const [place, setPlace] = useState(userInfo.place);
  const [note, setNote] = useState(false);
  const updateUserHotel = event => {
    const value = event.target.value;
    setHotel(value);
  };

  const updatePlace = event => {
    const value = event.target.value;
    setPlace(value);
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    const name = userInfo.name;
    const login = userInfo.login
    setUserInfo({name, hotel, place, login});
    const db = firebase.getDB();
    db.collection("users").doc(login).set({
      name: name,
      login: login,
      hotel: hotel,
      place: place
  }).then(() => {
    setNote("Zmiany zostały zachowane");
  });
  }

  return (
    <Container>
      <Row>
        <Col className="d-none d-sm-block" />
        <Col className="a">
          <p className = "option_note">{note ? note : ""}</p>
          <p className="display_name">
            Witaj, {userInfo !== undefined ? userInfo.name : ""}
          </p>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label">Nazwa twojego obiektu</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nazwa twojego obiektu"
                onChange={updateUserHotel}
                value={hotel}
              />
              <Form.Text className="undername">
                Wpisz nazwę swojego obiektu tutaj, dzięki temu będzie wyróżniany
                przy wynikach wyszukiwania.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label">Miejscowość</Form.Label>
              <Form.Control as="select" onChange={updatePlace} value={place}>
                <option value="">Miejscowość</option>
                <option>Białka Tatrzańska</option>
                <option>Bukowina Tatrzańska</option>
                <option>Zakopane</option>
              </Form.Control>
              <Form.Text className="undername">
                W której znajduje się twój obiekt
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label">Twój Email</Form.Label>
              <Form.Control
                type="text"
                value={userInfo.login}
                onChange={updateUserHotel}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Zatwierdź zmiany
            </Button>
          </Form>
        </Col>
        <Col className="d-none d-sm-block" />
      </Row>
    </Container>
  );
};

export default Option;
