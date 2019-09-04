import React, { useContext, useEffect } from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import { SearchContext } from "../../content/SearchContext";
import { UserHotelStatsContext } from "../../content/UserHotelStatsContext";
import { HotelContext } from "../../content/HotelContext";
import { UserAuthContext } from "../../content/UserAuthContext";
import { ClockContext } from "../../content/ClockContext";

const HotelQuery = gql`
  query Hotel(
    $name: String!
    $place: String!
    $date: String!
    $interval: Int!
    $accommodation_type: Int!
    $numberOfGuest: String!
  ) {
    hotel(name: $name, place: $place, arrival: $date, interval: $interval, accommodation_type: $accommodation_type, numberOfGuest: $numberOfGuest) {
      name
      arrival
      depart
      place
      price
      interval
      accommodation_type
      numberOfGueast
    }
  }
`;
const QueryHotels = () => {
  const [clock] = useContext(ClockContext);
  let [{ name, place, interval, date, accommodation_type, numberOfGuest }] = useContext(SearchContext);
  if(date === ""){
    date = `${clock.year}-${clock.month}-${clock.day}`;
  }
  const [, setUserHotelStats] = useContext(UserHotelStatsContext);
  const [userAuth, , userInfo] = useContext(UserAuthContext);
  const [, setHotel] = useContext(HotelContext);
  const { loading, error, data } = useQuery(HotelQuery, {
    variables: { name, place, date, interval, accommodation_type, numberOfGuest }
  });

  useEffect(() => {
    if (userAuth) {
      const displayHotels = findUser(data.hotel, userInfo.hotel, date != "");
      setHotel(displayHotels[0]);
      setUserHotelStats(displayHotels[1]);
    }
  }, [name, place, interval, date, data, accommodation_type, numberOfGuest ]);

  return <div></div>;
};

const findUser = (selected = [], user, date) => {
  let displayUser = "";
  let displayHotels = selected.filter(item => item.name.trim() !== user);
  if (date) {
    displayUser = selected.filter(item => item.name.trim() === user);
  }
  return [displayHotels, displayUser];
};
export default QueryHotels;
