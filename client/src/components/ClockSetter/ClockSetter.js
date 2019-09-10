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
        const clock = JSON.parse(localStorage.getItem("time-bookfaster"));
        if (
          clock.year == apiDate.getFullYear() &&
          clock.month == apiDate.getMonth() + 1 &&
          clock.day == apiDate.getDate()
        ){

        }else{
          localStorage.setItem(
            "time-bookfaster",
            JSON.stringify({
              year: apiDate.getFullYear(),
              month: apiDate.getMonth() + 1,
              day: apiDate.getDate()
            })
          );
        }
      }
    });
  return <div></div>;
};
export default ClockSetter;
