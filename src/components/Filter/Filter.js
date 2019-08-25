import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./Filter.css";
import Filter_engine from "./Filter_eng";
import { UserHotelStatsContext } from "../../content/UserHotelStatsContext";

const Filter = props => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [interval, setInterval] = useState("");
  const [place, setPlace] = useState("");
  const [, setUserHotelStats] = useContext(UserHotelStatsContext);
  const [error, setError] = useState("");

  const updateName = event => {
    const name = event.target.value;
    setName(name);
  };
  const updatePlace = event => {
    const place = event.target.value;
    setPlace(place);
  };
  const updateDay = event => {
    let date = event.target.value;
    setDay(date);
  };
  const updateMonth = event => {
    let date = event.target.value;
    setMonth(date);
  };
  const updateYear = event => {
    let date = event.target.value;
    setYear(date);
  };
  const updateInterval = event => {
    const interval = event.target.value;
    setInterval(interval);
  };
  const isDateFormEmpty = () => {
    if (day == "" && month == "" && year == "") {
      return false;
    }
    if (day == "") {
      setError("Podaj dzień");
      return true;
    }
    if (month == "") {
      setError("Podaj miesiąc");
      return true;
    }
    if (year == "") {
      setError("Podaj rok");
      return true;
    }
  };
  const search = event => {
    event.preventDefault();
    const date = day === "" ? "" : `${day}-${month}-${year}`;
    if (!isDateFormEmpty()) {
      setError("");
      const displayedHotels = Filter_engine(props.user, props.hotels, [
        name,
        place,
        date,
        interval
      ]);
      props.setHotels(displayedHotels[0]);
      setUserHotelStats(displayedHotels[1]);
    }
  };
  const clear = event => {
    event.preventDefault();
    setName("");
    setDay("");
    setMonth("");
    setYear("");
    setInterval("");
    setPlace("");
    document.getElementById("myForm").reset();
    const hotels = props.hotels;
    props.setHotels(hotels);
    setUserHotelStats("");
  };
  return (
    <Form id="myForm" onSubmit={search}>
      <p className="error_filter">{error != "" ? error : null}</p>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="label">Nazwa obiektu</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nazwa obiektu"
          name="name"
          onChange={updateName}
          value={name}
        />
        <Form.Text className="underName">
          Tutaj wpisz nazwę obiektu, który chcesz wyszukać
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail1">
        <Form.Label className="label">Nazwa miejscowości</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nazwa miejscowości"
          name="place"
          onChange={updatePlace}
          value={place}
        />
        <Form.Text className="underName">
          Tutaj wpisz nazwę miejscowości
        </Form.Text>
      </Form.Group>
      <Form.Label className="label">Data Przyjazdu</Form.Label>
      <Form.Row>
        <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
          <Form.Control as="select" onChange={updateDay}>
            <option value="">dzień</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="exampleForm.ControlSelect2">
          <Form.Control as="select" onChange={updateMonth}>
            <option value="">miesiąc</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="exampleForm.ControlSelect3">
          <Form.Control as="select" onChange={updateYear}>
            <option value="">rok</option>
            <option>2019</option>
            <option>2020</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="formBasicPassword">
        <Form.Label className="label">Długość pobytu</Form.Label>
        <Form.Control as="select" onChange={updateInterval}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </Form.Control>
      </Form.Group>
      <Form.Row>
        <Form.Group as={Col}>
          <Button variant="primary" type="submit" className="button">
            Szukaj
          </Button>
        </Form.Group>
        <Form.Group as={Col}>
          <Button variant="danger" onClick={clear} className="button">
            Wyczyść
          </Button>
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

export default Filter;
