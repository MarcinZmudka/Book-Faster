import React, { createContext, useState } from "react";

export const HotelContext = createContext(); // udostępnia dane

export const HotelProvider = props => {
  const [hotel, setHotel] = useState("");
  return (
    <HotelContext.Provider value={[hotel, setHotel]}>
      {props.children}
    </HotelContext.Provider>
  );
};
