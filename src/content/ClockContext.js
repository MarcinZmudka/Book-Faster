import React, { createContext, useState } from "react";

export const ClockContext = createContext(); // udostępnia dane

export const ClockProvider = props => {
  const [date, setDate] = useState("");
  return (
    <ClockContext.Provider value={[date, setDate]}>
      {props.children}
    </ClockContext.Provider>
  );
};
