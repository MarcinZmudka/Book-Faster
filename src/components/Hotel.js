import React from 'react';
import './css/Hotel.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hotel = (props) => {
    return (
        <Container fluid className = "container_hotel">
            <Row className = "my-0 py-2 row_hotel">
                <Col className = "hotel_column" md={3}>{props.value.name}</Col>
                <Col className = "hotel_column" md={2}>{props.value.price} PLN</Col>
                <Col className = "hotel_column" md={2}>{props.value.place}</Col>
                <Col className = "hotel_column" md={2}>{props.value.arrival}</Col>
                <Col className = "hotel_column" md={2}>{props.value.depart}</Col>
                <Col className = "hotel_column" md={1}>{props.value.interval ? props.value.interval : 3}</Col>
            </Row>
        </Container>
    )
}

export default Hotel;