import React from "react";
import "./MainPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dane1 from "../images/dane1.png";
import dane2 from "../images/dane2.png";
import wyszukiwarka from "../images/wyszukiwarka.png";
import statystyki from "../images/statystyki.png";
import booking from "../images/booking.png";

const MainPage = () => {
  return (
    <div>
      <div className="skos1" />
      <Container fluid className="m-0 p-0">
        <Row className="przedstawienie m-0 ">
          <p className="triangle" />
          <Col className="obraz pt-5">
            <img src={dane2} className="img_dane2" alt="" />
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
      <Container fluid className="m-0 p-0"> 
        <Row className="skos2">
          <Col md={4} className = "stats_column">
            <div>
              <div className="text-stat">Przeglądaj statystyki</div>
              <div className="subText">
                Sprawdź czy twój obiekt jest tańszy czy droższy w danym terminie
                oraz ilość dostępnych obiektów
              </div>
            </div>
          </Col>
          <Col md={8}>
            <img src={dane1} alt="" className="stats foto" />
          </Col>
        </Row>
        </Container>
        <Container fluid className="m-0 p-0">
        <Row className="skos3">
          <p className="triangle2" />
          <Col md={3} className="wyszukiwarka-text">
            <div>
              <div className="text-stat">Wyszukuj według kryteriów</div>
              <div className="subText">
                Wyszukuj po nazwie, miejscowości, dacie, długości pobytu.
              </div>
            </div>
          </Col>
          <Col className={"wyszukiwarka"} md={3}>
            <img src={wyszukiwarka} alt="" className="foto" />
          </Col>

          <Col md={3} className="wyszukiwarka-text">
            <div>
              <div className="text-stat">Porównuj otrzymane wyniki</div>
              <div className="subText">
                Sprawdź średnią cenę za pobyt, ile obiektów jest dostępnych w
                tym terminie oraz jaka jest cena za noc
              </div>
            </div>
          </Col>
          <Col md={3} className="srednie">
            <img src={statystyki} alt="" className="foto" />
          </Col>
        </Row>
        <Row className="dane">
          <Col>
            <div className="text-stat">Dane z serwisu</div>
          </Col>
          <Col className="booking_logo">
            <img src={booking} alt="logo_booking" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
