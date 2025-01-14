import React, { createContext, useState } from 'react'
export const LoginContext = createContext(null)
const LoginContextProvider = (props) => {
  const [LoginProp, setLoginProp] = useState(false)
  const [LoginRole, setLoginRole] = useState("")
  return (
    <LoginContext.Provider value={{LoginProp,setLoginProp,LoginRole,setLoginRole}}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider