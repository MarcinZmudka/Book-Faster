import React, { createContext, useState } from "react";

export const UserHotelContext = createContext();

export const UserHotelProvider = props => {
  const [userHotel, setUserHotel] = useState("");
  return (
    <UserHotelContext.Provider value={[userHotel, setUserHotel]}>
      {props.children}
    </UserHotelContext.Provider>
  );
};
