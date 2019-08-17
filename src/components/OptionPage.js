import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/OptionPage.css";
import { UserAuthContext } from "../content/UserAuthContext";

const Option = () => {
  const [userAuth, setUserAuth, userInfo, setUserInfo] = useContext(
    UserAuthContext
  );
  const updateUserHotel = event => {
    const value = event.target.value;
    userInfo.updateProfile({
      hotelName: value
    }).then(()=>{
      console.log("done")
    }).catch(err => {
      console.log(err);
    })
    console.log(userInfo.providerData[0]);
  };
  const updatePlace = () => {

  }
  return (
    <Container>
      <Row>
        <Col className="d-none d-sm-block" />
        <Col className="a">
          <p className="display_name">Witaj, {userInfo.providerData > 0 ? userInfo.providerData[0].displayName : ""}</p>
          <Form>
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
            <Form.Group controlId="formBasicEmail">
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
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label">Twój Email</Form.Label>
              <Form.Control
                type="text"
                value={userInfo.email}
                onChange={updateUserHotel}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col className="d-none d-sm-block" />
      </Row>
    </Container>
  );
};

export default Option;
