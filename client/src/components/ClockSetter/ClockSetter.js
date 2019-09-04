import React, { useContext, useEffect } from "react";
import axios from "axios";
import { ClockContext } from "../../content/ClockContext";

const ClockSetter = () => {
  const [clock, setClock] = useContext(ClockContext);
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://worldclockapi.com/api/json/cet/now?callback=mycallback`
    )
    .then(res => {
      if (clock === "") {
        const apiDate = new Date(res.data.currentDateTime);
        setClock({
          year: apiDate.getFullYear(),
          month: apiDate.getMonth() + 1,
          day: apiDate.getDate()
        });
      }
    });
  return <div></div>;
};
export default ClockSetter;
