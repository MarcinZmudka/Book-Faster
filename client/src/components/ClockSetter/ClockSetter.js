import React from "react";
import axios from "axios";

const ClockSetter = () => {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://worldclockapi.com/api/json/cet/now?callback=mycallback`
    )
    .then(res => {
      if (localStorage.getItem("time-bookfaster") !== null) {
        const apiDate = new Date(res.data.currentDateTime);
        localStorage.setItem("time-bookfaster", JSON.stringify({
          year: apiDate.getFullYear(),
          month: apiDate.getMonth() + 1,
          day: apiDate.getDate()
        }))
      }
    });
  return <div></div>;
};
export default ClockSetter;
