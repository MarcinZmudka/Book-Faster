import React, { useContext } from "react";
import { UserAuthContext } from "../../content/UserAuthContext";

const Session = props => {
  const [userAuth, setUserAuth, userInfo, setUserInfo] = useContext(
    UserAuthContext
  );
  const UserIsLogged = () => {
    return userInfo !== "pusto";
  };
  const logUserFromStorage = () => {
    const user = JSON.parse(localStorage.getItem("booking-faster"));
    if (user !== null) {
      if (!userCrossedSession(user)) {
        setUserInfo(user);
        setUserAuth(true);   
        setTimeout(() => {
          props.history.push("/compare");   
        }, 50);   
      }
    }
  };
  const userCrossedSession = user => {
    const date = -(new Date(user.startTimeOfSession) - new Date()); //1h = 3 600 000 ms
    const int = parseInt(date) / (1000*60*60);
    return int > 1;
  };
  if (UserIsLogged()) {
    let storageUser = userInfo;
    storageUser.startTimeOfSession = new Date();
    localStorage.setItem("booking-faster", JSON.stringify(storageUser));
  }
  if (!userAuth) {
    logUserFromStorage();
  }

  return <div />;
};

export default Session;
