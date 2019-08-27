import React from "react";
import Hotel from "../Hotel/Hotel";
import Filter from "../Filter/Filter";
import Statistic from "../Statistics/Statistics";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Description from "../Description/Description";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./HotelList.css";
import Sorter from "../Sorter/Sorter";
import UserHotel from "../UserHotel/UserHotel";
import Pages from '../Pagination/Pagination';


class HotelList extends React.Component {
  constructor(props) {
    super(props);
    const hotels = props.hotel;
    this.state = {
      displayedHotels: hotels,
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
  componentDidUpdate(prevProps){
    if(prevProps != this.props){
      console.log("mam updata");
      const hotels = this.props.hotel;
      this.setState({
        displayedHotels: hotels,
        currentPage: 1,
        indexOfFirst: 0,
        indexOfLast: 10,
      })
    }
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
                  hotels = {this.state.displayedHotels}
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
            </Jumbotron>
            <Pages numberOfHotels = {this.state.displayedHotels.length} hotelPerPage = {10} changePage = {this.changePage} currentPage ={this.state.currentPage}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HotelList;
