import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/Description.css";
import { UserHotelStatsContext } from "../content/UserHotelStatsContext";

const Description = (props) => {
  const [ userHotelStats, setUserHotelStats] = useContext(UserHotelStatsContext);
  const userHotelExist = () => userHotelStats.length > 0 ? true : false;
  const whatToShow = () => {
    if(userHotelExist()){
      return (
        <Col className="m-0 p-0 desc_title" md={2} onClick = {()=> props.sort("cena")}>
          <strong>Różnica</strong>
          <i className="fas fa-caret-square-down"></i>
      </Col>
      )
    }else{
      return (
        <Col className="m-0 p-0 desc_title" md={2} onClick = {()=> props.sort("data wyjazdu")}>
          <strong>Data wyjazdu</strong>
          <i className="fas fa-caret-square-down"></i>
        </Col>
      )
    }
  }
  return (
    <Container fluid className = "desc_container">
      <Row className="my-3 titles ">
          <Col className="m-0 p-0 desc_title" md={3} onClick = {()=> props.sort("nazwa")}>
            <strong>Nazwa obiektu</strong>
            <i className="fas fa-caret-square-down"></i>
          </Col>
        <Col className="m-0 p-0 desc_title" md={2} onClick = {()=> props.sort("cena")}>
          <strong>Cena</strong>
          <i className="fas fa-caret-square-down"></i>
        </Col>
        <Col className="m-0 p-0 desc_title" md={2} onClick = {()=> props.sort("miejscowość")}>
          <strong>Miejscowość</strong>
          <i className="fas fa-caret-square-down"></i>
        </Col>
        <Col className="m-0 p-0 desc_title" md={2} onClick = {()=> props.sort("data przyjazdu")}>
          <strong>Data przyjazdu</strong>
          <i className="fas fa-caret-square-down"></i>
        </Col>
        {whatToShow()}
        <Col className="m-0 p-0 desc_title" md={1} onClick = {()=> props.sort("dni")}>
          <strong>Dni</strong>
          <i className="fas fa-caret-square-down"></i>
        </Col>
      </Row>
    </Container>
  );
};

export default Description;
