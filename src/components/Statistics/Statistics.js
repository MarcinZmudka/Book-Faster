import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Statistics.css';

const Statistic = (props) => {
    
    return (
      <Container className="text-left">
        <Row className="my-3 mx-1 row_number">
          <Col lg={8} className="stat_desc p-0">
            Średnia cena:{" "}
          </Col>
          <Col lg={4} className="numbers p-0">
            {props.averagePrice}
          </Col>
        </Row>
        <Row className="my-3 mx-1 row_number">
          <Col lg={8} className="stat_desc p-0">
            Liczba obiektów:{" "}
          </Col>
          <Col lg={4} className="numbers  p-0">
            {props.numberOfObjects}
          </Col>
        </Row>
        <Row className="my-3 mx-1 row_number">
          <Col lg={8} className="stat_desc p-0">
            Cena najmniejsza:{" "}
          </Col>
          <Col lg={4} className="numbers p-0">
            {props.minPrice}
          </Col>
        </Row>
        <Row className="my-3 mx-1 row_number">
          <Col lg={8} className="stat_desc p-0">
            Cena największa:{" "}
          </Col>
          <Col lg={4} className="numbers p-0">
            {props.maxPrice}
          </Col>
        </Row>
        <Row className="my-3 mx-1 row_number">
          <Col lg={8} className="stat_desc p-0">
            Cena za noc:{" "}
          </Col>
          <Col lg={4} className="numbers p-0">
            {props.pricePerNight}
          </Col>
        </Row>
      </Container>
    );
}

export default Statistic;