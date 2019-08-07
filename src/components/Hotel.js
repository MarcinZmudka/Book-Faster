import React from 'react';
import './Hotel.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hotel = (props) => {
    return (
        <Container fluid>
            <Row className = "my-0 py-2 row_hotel">
                <Col md={3}>{props.value.name}</Col>
                <Col md={2}>{props.value.price} PLN</Col>
                <Col md={2}>{props.value.place}</Col>
                <Col md={2}>{props.value.arrival}</Col>
                <Col md={2}>{props.value.depart}</Col>
                <Col md={1}>{props.value.interval ? props.value.interval : 3}</Col>
            </Row>
        </Container>
    )
}

export default Hotel;