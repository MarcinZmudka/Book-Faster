import React, { useContext } from 'react';
import './Hotel.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UserHotelStatsContext } from '../QueryHotels/QueryHotels';

const Hotel = (props) => {
    const [ userHotelStats ] = useContext(UserHotelStatsContext);
    const userHotelExist = () => userHotelStats.length > 0 ? true : false;
    const whatToShow = () => userHotelExist() ? (props.value.price - userHotelStats[0].price) : props.value.departure;
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
                <Col className = "hotel_column" md={2}>{props.value.price} zł</Col>
                <Col className = "hotel_column" md={2}>{props.value.place}</Col>
                <Col className = "hotel_column" md={2}>{props.value.arrival}</Col>
                <Col className = "hotel_column" style = { whatStyle()} md={2}>{whatToShow()}</Col>
                <Col className = "hotel_column" md={1}>{props.value.interval ? props.value.interval : 3}</Col>
            </Row>
            <Row className = "my-0 py-2 row_hidden_hotel">
                <Col className = "hotel_column" md={3}>Cena za dobę: </Col>
                <Col className = "hotel_column" md={2}>{Math.round(props.value.price/props.value.interval)}</Col>
                <Col className = "hotel_column" md={2}>Twoja cena za dobę: </Col>
                <Col className = "hotel_column" md={2}>{userHotelExist() ? Math.round(userHotelStats[0].price/props.value.interval) : "Nie jesteś dostępny w podanym terminie"}</Col>
            </Row>
        </Container>
    )
}
export default Hotel;