import React from "react";
import "./App.css";
import { HotelProvider } from "./content/HotelContext";
import HotelList from "./components/HotelList";
import Navi from "./components/Navi";

function App() {
  return (
    <div className="App"> 
    <Navi/>
      <HotelProvider>
        <HotelList />
      </HotelProvider>
    </div>
  );
}

export default App;
