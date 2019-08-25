import React, { useContext } from 'react';
import './Hotel.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UserHotelStatsContext } from '../../content/UserHotelStatsContext';

const Hotel = (props) => {
    const [ userHotelStats ] = useContext(UserHotelStatsContext);
    const userHotelExist = () => userHotelStats.length > 0 ? true : false;
    const whatToShow = () => userHotelExist() ? (props.value.price - userHotelStats[0].price) : props.value.depart;
    const priceStyleBigger = {
        color: "red",
    }
    const priceStyleSmaller = {
        color: "green",
    }
    const whatStyle = () => {
        if(userHotelExist()){
            if(whatToShow() >= 0){
                return priceStyleSmaller;
            } else{
                return priceStyleBigger;
            }
        }
    }
    return (
        <Container fluid className = "container_hotel">
            <Row className = "my-0 py-2 row_hotel">
                <Col className = "hotel_column" md={3}>{props.value.name}</Col>
                <Col className = "hotel_column" md={2}>{props.value.price} PLN</Col>
                <Col className = "hotel_column" md={2}>{props.value.place}</Col>
                <Col className = "hotel_column" md={2}>{props.value.arrival}</Col>
                <Col className = "hotel_column" style = { whatStyle()} md={2}>{whatToShow()}</Col>
                <Col className = "hotel_column" md={1}>{props.value.interval ? props.value.interval : 3}</Col>
            </Row>
        </Container>
    )
}

export default Hotel;