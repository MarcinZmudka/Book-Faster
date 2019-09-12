import React, { useContext, createContext, useState } from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import { UserAuthContext } from "../../content/UserAuthContext";
import HotelList from "../HotelList/HotelList";
import Loader from "../Loader/Loader";

const HotelQuery = gql`
  query Hotel(
    $name: String!
    $place: String!
    $date: String!
    $interval: Int!
    $accommodation_type: Int!
    $numberOfGuest: String!
  ) {
    hotel(
      name: $name
      place: $place
      arrival: $date
      interval: $interval
      accommodation_type: $accommodation_type
      number_of_guests: $numberOfGuest
    ) {
      _id
      name
      arrival
      departure
      place
      price
      interval
      accommodation_type
      number_of_guests
    }
  }
`;
export const searchContext = createContext();
export const UserHotelStatsContext = createContext();
export const QueryHotels = () => {
  //const [clock] = useContext(ClockContext);
  const clock = getTime();
  const [search, setSearch] = useState({
    name: "",
    place: "",
    interval: 3,
    date: `${clock.year}-${clock.month}-${clock.day}`,
    accommodation_type: 0,
    numberOfGuest: "2"
  });
  const {
    name,
    place,
    date,
    interval,
    accommodation_type,
    numberOfGuest
  } = search;
  const [, , userInfo] = useContext(UserAuthContext);
  const { loading, error, data } = useQuery(HotelQuery, {
    variables: {
      name,
      place,
      date,
      interval,
      accommodation_type,
      numberOfGuest
    }
  });
  if (loading) {
    return <Loader/>;
  }
  if (error) {
    console.log("Query Error", error);
  }
  if (data) {
    const displayHotels = findUser(data.hotel, userInfo.hotel);
    return (
      <UserHotelStatsContext.Provider value={[displayHotels[1]]}>
        <searchContext.Provider value={[search, setSearch]}>
          <HotelList hotels={displayHotels[0]} userHotel={displayHotels[1]} />
        </searchContext.Provider>
      </UserHotelStatsContext.Provider>
    );
  }
  return <div></div>;
};

const findUser = (selected, user) => {
  let displayUser = [];
  let displayHotels = [];
  if (selected.length > 0) {
    displayHotels = selected.filter(item => item.name.trim() !== user);
    displayUser = selected.filter(item => item.name.trim() === user);
  }
  return [displayHotels, displayUser];
};

const getTime = () => {
  let string = localStorage.getItem("time-bookfaster");
  let object = JSON.parse(string);
  return object;
}
