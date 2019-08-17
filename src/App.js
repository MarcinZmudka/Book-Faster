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
import LoginPage from "./components/Login/LoginPage";
import { FirebaseProvider } from "./content/FirebaseContext";
import Register from "./components/Login/Register";
import { UserAuthProvider } from "./content/UserAuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <UserAuthProvider>
        <FirebaseProvider>
            <UserHotelProvider>
            <Navi />
              <Switch>
                <Route path="/" exact component={MainPage} />
                <PrivateRoute path="/option" component={Option} />
                <Route path="/login" component={LoginPage} />
                <Route path="/Register" component={Register} />
                <HotelProvider>
                  <UserHotelStatsProvider>
                    <PrivateRoute path="/compare" component={CompareContext} />
                  </UserHotelStatsProvider>
                </HotelProvider>
                <Route path="/c" component={MainPage}/>
              </Switch>
            </UserHotelProvider>
          </FirebaseProvider>
        </UserAuthProvider>
      </Router>
    </div>
  );
}

export default App;
