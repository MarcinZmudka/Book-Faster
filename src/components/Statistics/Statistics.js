import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Statistics.css";

const Statistic = props => {
  const averagePrice = updateAveragePrice(props.hotels);;
  const numberOfHotels = updateNumberOfHotels(props.hotels);
  const minPrice = updateMinPrice(props.hotels);
  const maxPrice = updateMaxPrice(props.hotels);
  const pricePerNight = updatePricePerNigth(props.hotels, averagePrice);

  return (
    <Container className="text-left">
      <Row className="my-3 mx-1 row_number">
        <Col lg={8} className="stat_desc p-0">
          Średnia cena:{" "}
        </Col>
        <Col lg={4} className="numbers p-0">
          {averagePrice}
        </Col>
      </Row>
      <Row className="my-3 mx-1 row_number">
        <Col lg={8} className="stat_desc p-0">
          Liczba obiektów:{" "}
        </Col>
        <Col lg={4} className="numbers  p-0">
          {numberOfHotels}
        </Col>
      </Row>
      <Row className="my-3 mx-1 row_number">
        <Col lg={8} className="stat_desc p-0">
          Cena najmniejsza:{" "}
        </Col>
        <Col lg={4} className="numbers p-0">
          {minPrice}
        </Col>
      </Row>
      <Row className="my-3 mx-1 row_number">
        <Col lg={8} className="stat_desc p-0">
          Cena największa:{" "}
        </Col>
        <Col lg={4} className="numbers p-0">
          {maxPrice}
        </Col>
      </Row>
      <Row className="my-3 mx-1 row_number">
        <Col lg={8} className="stat_desc p-0">
          Cena za noc:{" "}
        </Col>
        <Col lg={4} className="numbers p-0">
          {pricePerNight}
        </Col>
      </Row>
    </Container>
  );
};
const updateAveragePrice = hotels => {
  let summary = 0;
  if (hotels.length !== 0) {
    for (let i = 0; i < hotels.length; i++) {
      summary += parseInt(hotels[i].price, 10);
    }
    const length = hotels.length;
    let averagePrice = Math.round(summary / length);
    return averagePrice;
  } else {
    return 0;
  }
};
const updateMinPrice = hotels => {
  let min = 0;
  if (hotels.length !== 0) {
    min = parseInt(hotels[0].price, 10);
    for (let i = 1; i < hotels.length; i++) {
      if (min > hotels[i].price) min = parseInt(hotels[i].price, 10);
    }
  }
  return min;
};
const updateMaxPrice = hotels => {
  let max = 0;
  if (hotels.length !== 0) {
    max = parseInt(hotels[0].price, 10);
    for (let i = 1; i < hotels.length; i++) {
      if (max < hotels[i].price) max = parseInt(hotels[i].price, 10);
    }
  }
  return max;
};
const updateNumberOfHotels = hotels => {
  if (hotels.length > 0) {
    const length = hotels.length;
    return length;
  } else {
    return 0;
  }
};
const updatePricePerNigth = (hotels, averagePrice) => {
  if (hotels.length > 0) {
    const displayed = hotels;
    let length = displayed.length;
    let averageDay = 0;
    for (let i = 0; i < length; i++) {
      averageDay += displayed[i].interval;
    }
    averageDay = averageDay / length;
    let value = Number.isInteger(averageDay)
      ? Math.round(averagePrice / averageDay)
      : "Ustal interwał";
    return value;
  }
};

export default Statistic;
