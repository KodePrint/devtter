import React, {useState} from "react";

export const UserCtx = React.createContext({});

export const UserCtxProvider = ({children}) => {
  const [user, setUser] = useState(undefined);
  const [session, setSession] = useState(undefined);

  return <UserCtx.Provider value={{user, setUser, session, setSession}}>{children}</UserCtx.Provider>;
}