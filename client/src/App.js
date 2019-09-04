import React from "react";
import "./App.css";
import { HotelProvider } from "./content/HotelContext";
import { UserHotelStatsProvider } from "./content/UserHotelStatsContext";
import CompareContext from "./components/CompareContext/CompareContext";
import Navi from "./components/Nav/Navi";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Option from "./components/OptionPage/OptionPage";
import LoginPage from "./components/Login/LoginPage";
import { FirebaseProvider } from "./content/FirebaseContext";
import Register from "./components/Login/Register";
import { UserAuthProvider } from "./content/UserAuthContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Session from "./components/Login/UserSession";
import PasswordReset from "./components/Login/PasswordReset";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { SearchProvider } from "./content/SearchContext";
import QueryHotel from "./components/QueryHotels/QueryHotels";
import { ClockProvider } from "./content/ClockContext";
import ClockSetter from "./components/ClockSetter/ClockSetter";

const client = new ApolloClient({
  uri: `/graphql`
});

function App() {
  return (
    <div className="App">
      <Router>
        <ClockProvider>
          <ClockSetter/>
        <UserAuthProvider>
          <HotelProvider>
            <SearchProvider>
              <UserHotelStatsProvider>
                <ApolloProvider client={client}>
                  <QueryHotel />
                </ApolloProvider>
                <Switch>
                  <Route path="/" component={Session} />
                </Switch>
                <FirebaseProvider>
                  <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/Register" component={Register} />
                    <Route path="/PasswordReset" component={PasswordReset} />
                    <Route path="/" component={Navi} />
                  </Switch>
                  <Switch>
                    <Route path="/" exact component={MainPage} />
                    <PrivateRoute path="/option" component={Option} />
                    <PrivateRoute path="/compare" component={CompareContext} />
                    <Route path="/c" component={MainPage} />
                  </Switch>
                </FirebaseProvider>
              </UserHotelStatsProvider>
            </SearchProvider>
          </HotelProvider>
        </UserAuthProvider>
        </ClockProvider>
      </Router>
    </div>
  );
}

export default App;
