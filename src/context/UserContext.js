import React, { useState } from 'react'

export const UserCtx = React.createContext({})

export const UserCtxProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(undefined)

  return (
    <UserCtx.Provider value={{ authUser, setAuthUser }}>
      {children}
    </UserCtx.Provider>
  )
}
