import React, { createContext, useState } from "react";

export const UserHotelStatsContext = createContext();

export const UserHotelStatsProvider = props => {
  const [userHotelStats, setUserHotelStats] = useState("");
  return (
    <UserHotelStatsContext.Provider value={[userHotelStats, setUserHotelStats]}>
      {props.children}
    </UserHotelStatsContext.Provider>
  );
};

