import React, {useContext} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './OptionPage.css';
import { UserHotelContext } from "../content/UserHotelContext";

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
        <Col />
        <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label">Nazwa twojego obiektu</Form.Label>
              <Form.Control type="text" placeholder="Nazwa twojego obiektu" onChange = {updateUserHotel}/>
              <Form.Text className="undername" >
                Wpisz nazwę swojego obiektu tutaj, dzięki temu będzie wyróżniany
                przy wynikach wyszukiwania.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col />
      </Row>
    </Container>
  );
};

export default Option;
