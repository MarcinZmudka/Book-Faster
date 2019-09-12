import React from "react";
import "./App.css";
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
import { QueryHotels } from "./components/QueryHotels/QueryHotels";
import ClockSetter from "./components/ClockSetter/ClockSetter";

const client = new ApolloClient({
  uri: `/graphql`
});

function App() {
  return (
    <div className="App">
      <Router>
          <ClockSetter />
          <UserAuthProvider>
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
                <ApolloProvider client={client}>
                  <PrivateRoute path="/compare" component={QueryHotels} />
                </ApolloProvider>
                <Route path="/c" component={MainPage} />
              </Switch>
            </FirebaseProvider>
          </UserAuthProvider>
      </Router>
    </div>
  );
}

export default App;
