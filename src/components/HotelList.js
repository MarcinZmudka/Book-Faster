import React from "react";
import Hotel from "./Hotel";
import Filter from "./Filter";
import Statistic from "./Statistics";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Description from "./Description";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./css/HotelList.css";
import Sorter from "./Sorter";
import UserHotel from "./UserHotel";
import Pages from './Pagination';

class HotelList extends React.Component {
  constructor(props) {
    super(props);
    const hotels = props.hotel;
    this.state = {
      displayedHotels: hotels,
      averagePrice: 0,
      numberOfHotels: 0,
      minPrice: 0,
      maxPrice: 0,
      pricePerNight: 0,
      currentPage: 1,
      indexOfFirst: 0,
      indexOfLast: 10,
    };
  }

  setDisplayed = ( displayed) => {
    let newState = this.state;
    newState.displayedHotels = displayed;
    newState.currentPage = 1;
    newState.indexOfFirst = 0;
    newState.indexOfLast = 10;
    this.setState(newState);
    this.updateStatistics();
  }
  updateStatistics = () => {
    setTimeout(() => {
      this.updateAveragePrice();
      this.updateMaxPrice();
      this.updateMinPrice();
      this.updateNumberOfHotels();
      this.updatePricePerNigth();
    }, 100);
  }
  changePage = (indexOfFirst, indexOfLast, currentPage) => {
    let newState = this.state;
    newState.currentPage = currentPage;
    newState.indexOfFirst = indexOfFirst;
    newState.indexOfLast = indexOfLast;
    this.setState(newState);
  }
  sort = type => {
    const newDisplayed = Sorter(type, this.state.displayedHotels);
    let displayed = this.state.displayedHotels;
    displayed.displayedHotels = newDisplayed;
    this.setState(displayed);
  };
  updateAveragePrice = () => {
    let summary = 0;
    if (this.state.displayedHotels.length !== 0) {
      for (let i = 0; i < this.state.displayedHotels.length; i++) {
        summary += parseInt(this.state.displayedHotels[i].price, 10);
      }
      const length = this.state.displayedHotels.length;
      let averagePrice = Math.round(summary / length);
      this.setState(prevState => (prevState.averagePrice = averagePrice));
    } else {
      this.setState(prevState => (prevState.averagePrice = 0));
    }
  };
  updateMinPrice = () => {
    let min = 0;
    if (this.state.displayedHotels.length !== 0) {
      min = parseInt(this.state.displayedHotels[0].price, 10);
      for (let i = 1; i < this.state.displayedHotels.length; i++) {
        if (min > this.state.displayedHotels[i].price)
          min = parseInt(this.state.displayedHotels[i].price, 10);
      }
    }
    this.setState(prevState => (prevState.minPrice = min));
  };
  updateMaxPrice = () => {
    let max = 0;
    if (this.state.displayedHotels.length !== 0) {
      max = parseInt(this.state.displayedHotels[0].price, 10);
      for (let i = 1; i < this.state.displayedHotels.length; i++) {
        if (max < this.state.displayedHotels[i].price)
          max = parseInt(this.state.displayedHotels[i].price, 10);
      }
    }
    this.setState(prevState => (prevState.maxPrice = max));
  };
  updateNumberOfHotels = () => {
    if (this.state.displayedHotels.length > 0) {
      const length = this.state.displayedHotels.length;
      this.setState(prevState => (prevState.numberOfHotels = length));
    } else {
      this.setState(prevState => (prevState.numberOfHotels = 0));
    }
  };
  updatePricePerNigth = () => {
    if (this.state.displayedHotels.length > 0) {
      const displayed = this.state.displayedHotels;
      let length = displayed.length;
      let averageDay = 0;
      for (let i = 0; i < length; i++) {
        averageDay += displayed[i].interval;
      }
      averageDay = averageDay / length;
      let value = Number.isInteger(averageDay)
        ? Math.round(this.state.averagePrice / averageDay)
        : "Ustal interwał";
      let state = this.state;
      state.pricePerNight = value;
      this.setState(state);
    }
  };
  componentDidMount() {
    setTimeout(() => {
      this.updateAveragePrice();
      this.updateMaxPrice();
      this.updateMinPrice();
      this.updateNumberOfHotels();
      this.updatePricePerNigth();
    }, 300);
  }
  render() {
    return (
      <Container fluid className="mt-3">
        <Row className="">
          <Col lg={3} className="m-0">
            <Jumbotron className="filter_jumbotron py-3">
              <Filter hotels = {this.props.hotel} setHotels = {this.setDisplayed} user = {this.props.userHotel} userHotel = {UserHotel.setUser}/>
            </Jumbotron>
            <Jumbotron className="statistic_jumbotron py-3">
              {this.state.displayedHotels ? (
                <Statistic
                  averagePrice={this.state.averagePrice}
                  numberOfObjects={this.state.numberOfHotels}
                  minPrice={this.state.minPrice}
                  maxPrice={this.state.maxPrice}
                  pricePerNight={this.state.pricePerNight}
                />
              ) : (
                ""
              )}
            </Jumbotron>
          </Col>
          <Col lg={9}>
            <UserHotel />
            <Jumbotron className="m-0 p-1 data_field">
              <Description sort={this.sort} />
              {this.state.displayedHotels
                ? this.state.displayedHotels.slice(this.state.indexOfFirst,this.state.indexOfLast).map(item => {
                    return <Hotel value={item} key={item.id} />;
                  })
                : ""}
              {this.state.displayedHotels === []
                ? "Nie znaleziony obiektów spełniających podane kryteria"
                : ""}
            </Jumbotron>
            <Pages numberOfHotels = {this.state.displayedHotels.length} hotelPerPage = {10} changePage = {this.changePage} currentPage ={this.state.currentPage}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HotelList;
