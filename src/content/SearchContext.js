import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = props => {
  const [search, setSearch] = useState({
    name:"",
    place: "",
    interval: 0,
    date: "",
  });
  return (
    <SearchContext.Provider value={[search, setSearch]}>
      {props.children}
    </SearchContext.Provider>
  );
};