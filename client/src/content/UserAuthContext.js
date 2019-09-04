import React, { createContext, useState } from "react";

export const UserAuthContext = createContext();

export const UserAuthProvider = props => {
  const [userAuth, setUserAuth] = useState(false);
  const [ userInfo, setUserInfo ] = useState("pusto");
  return (
    <UserAuthContext.Provider value={[userAuth, setUserAuth, userInfo, setUserInfo]}>
      {props.children}
    </UserAuthContext.Provider>
  );
};
