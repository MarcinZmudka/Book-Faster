import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Description.css";
import { UserHotelStatsContext } from "../../content/UserHotelStatsContext";

const Description = (props) => {
  const [ userHotelStats] = useContext(UserHotelStatsContext);
  const userHotelExist = () => userHotelStats.length > 0 ? true : false;
  const whatToShow = () => {
    if(userHotelExist()){
      return (
        <Col className="m-0 p-0 desc_title" md={2} onClick = {()=> props.sort("cena")}>
          <div><strong className="text_desc">Różnica</strong></div>
      </Col>
      )
    }else{
      return (
        <Col className="m-0 p-0 desc_title" md={2} onClick = {()=> props.sort("data wyjazdu")}>
          <p><strong className="text_desc">Data wyjazdu</strong></p>
        </Col>
      )
    }
  }
  return (
    <Container fluid className = "desc_container">
      <Row className="my-3 titles ">
          <Col className="m-0 p-0 desc_title" md={3} onClick = {()=> props.sort("nazwa")}>
          <p><strong className="text_desc">Nazwa obiektu</strong></p>
          </Col>
        <Col className="m-0 p-0 desc_title" md={2} onClick = {()=> props.sort("cena")}>
        <p><strong className="text_desc">Cena</strong></p>
        </Col>
        <Col className="m-0 p-0 desc_title" md={2} onClick = {()=> props.sort("miejscowość")}>
        <p ><strong className="text_desc">Miejscowość</strong></p>
        </Col>
        <Col className="m-0 p-0 desc_title" md={2} onClick = {()=> props.sort("data przyjazdu")}>
        <p ><strong className="text_desc">Data przyjazdu</strong></p>
        </Col>
        {whatToShow()}
        <Col className="m-0 p-0 desc_title" md={1} onClick = {()=> props.sort("dni")}>
        <p ><strong className="text_desc">Dni</strong></p>
        </Col>
      </Row>
    </Container>
  );
};

export default Description;
