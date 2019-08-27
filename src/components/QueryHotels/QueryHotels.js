import React, { useContext, useEffect } from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import { SearchContext } from "../../content/SearchContext";
import { UserHotelStatsContext } from "../../content/UserHotelStatsContext";
import { HotelContext } from "../../content/HotelContext";
import { UserAuthContext } from "../../content/UserAuthContext";

const HotelQuery = gql`
  query Hotel(
    $name: String!
    $place: String!
    $date: String!
    $interval: Int!
  ) {
    hotel(name: $name, place: $place, arrival: $date, interval: $interval) {
      name
      arrival
      depart
      place
      price
      interval
    }
  }
`;
const QueryHotels = () => {
  const [{ name, place, interval, date }] = useContext(SearchContext);
  const [, setUserHotelStats] = useContext(UserHotelStatsContext);
  const [userAuth, , userInfo] = useContext(UserAuthContext);
  const [, setHotel] = useContext(HotelContext);
  const { loading, error, data } = useQuery(HotelQuery, {
    variables: { name, place, date, interval }
  });

  useEffect(() => {
    if (userAuth) {
      const displayHotels = findUser(data.hotel, userInfo.hotel, date != "");
      setHotel(displayHotels[0]);
      setUserHotelStats(displayHotels[1]);
    }
  }, [name, place, interval, date, data]);

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
