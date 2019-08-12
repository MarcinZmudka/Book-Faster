import React from "react";
import "./css/MainPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dane1 from "./images/dane1.png";
import dane from "./images/dane.png";
import wyszukiwarka from "./images/wyszukiwarka.png";
import statystyki from "./images/statystyki.png";
const MainPage = () => {
  return (
    <div>
      <div className="skos1" />
      <Container fluid className="m-0 p-0">
        <Row className="przedstawienie m-0 ">
        <p className = "triangle"></p>
          <Col className="obraz pt-5">
            <img src={dane} alt=""/>
          </Col>
          <Col className="text pt-5">
            <div className="box-text">
              <div className="title-text">
                Monitoruj ceny swojej konkurencji
              </div>
              <div className="subText">
                Nasza strona dostarczy Ci informacje na temat cen, dostępności i
                inne dane na temat twojej konkurencji{" "}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className = "skos2">
          <Col>
            <div className="text-stat">Przeglądaj statystyki</div>
            <img src={dane1} alt="" className="stats"/>
          </Col>
        </Row>
        <Row className = "skos3">
        <p className = "triangle2"></p>
          <Col md={2} />
          <Col md={4}>
            <div className="text-stat">Wyszukuj według kryteriów</div>
            <img src={wyszukiwarka} alt=""/>
          </Col>
          <Col md={4}>
            <div className="text-stat">Porównuj otrzymane wyniki</div>
            <img src={statystyki} alt=""/>
          </Col>
          <Col md={2} />
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
