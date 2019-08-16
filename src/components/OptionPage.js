import React, {useContext} from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './css/OptionPage.css';
import { UserHotelContext } from "../content/UserHotelContext";
import LoginPage from "./Login/LoginPage";

const Option = () => {
    const [ userHotel, setUserHotel ] = useContext(UserHotelContext);
    const updateUserHotel = event => {
        const value = event.target.value;
        setUserHotel(value);
        console.log(userHotel);
    }
  return (
    <Container>
      <Row>
        <LoginPage />
      </Row>
      <Row>
        <Col />
        <Col className = "a">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label">Nazwa twojego obiektu</Form.Label>
              <Form.Control type="text" placeholder="Nazwa twojego obiektu" onChange = {updateUserHotel}/>
              <Form.Text className="undername" >
                Wpisz nazwę swojego obiektu tutaj, dzięki temu będzie wyróżniany
                przy wynikach wyszukiwania.
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
        <Col />
      </Row>
    </Container>
  );
};

export default Option;
