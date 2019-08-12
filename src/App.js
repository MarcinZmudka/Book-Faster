import React from "react";
import "./App.css";
import { HotelProvider } from "./content/HotelContext";
import { UserHotelProvider } from "./content/UserHotelContext";
import { UserHotelStatsProvider } from "./content/UserHotelStatsContext";
import CompareContext from "./components/CompareContext";
import Navi from "./components/Navi";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Option from "./components/OptionPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navi />
        <HotelProvider>
          <UserHotelProvider>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/option" component={Option} />
              <UserHotelStatsProvider>
                <Route path="/compare" component={CompareContext} />  
              </UserHotelStatsProvider>
              
            </Switch>
          </UserHotelProvider>
        </HotelProvider>
      </Router>
    </div>
  );
}

export default App;
