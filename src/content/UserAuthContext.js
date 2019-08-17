import React, { createContext, useState } from "react";

export const UserAuthContext = createContext();

export const UserAuthProvider = props => {
  const [userAuth, setUserAuth] = useState(true);
  const [ userInfo, setUserInfo ] = useState(0);
  return (
    <UserAuthContext.Provider value={[userAuth, setUserAuth, userInfo, setUserInfo]}>
      {props.children}
    </UserAuthContext.Provider>
  );
};
