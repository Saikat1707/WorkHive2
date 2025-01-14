import React, { useContext } from 'react'
import AuthBar from './AuthBar'
import "./CSS/AuthBox.css"
import BrainLite from "../assets/Images/brainLite.webp"
import brain from "../assets/Images/brain.png"
import { Outlet, useLocation } from 'react-router-dom'
import { LoginContext } from '../Context/LoginContextProvider'
const AuthenticationBox = () => {
  const Location = useLocation()
  console.log(Location.pathname)
  const LoginPropData = useContext(LoginContext)
  if(Location.pathname == "/login"){
    LoginPropData.setLoginProp(true)
  }else if(Location.pathname == "/"){
    LoginPropData.setLoginProp(false)
  }
  return (
    <div>
        <div className="AuthBoxMain">
          <div className="AuthBox">
            <div className="AuthImg">
              <h2>{LoginPropData.LoginProp== true?"Welcome Back User":"Join Dutio today"}</h2>
              <p>{LoginPropData.LoginProp==true?"Log in":"Sign up"} to access personalized recommendations, amazing features, and more. It’s fast, easy, and free!</p>
              <img src={BrainLite} alt="brainLite" />
            </div>
            <div className="AuthForm">
              <Outlet/>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default AuthenticationBox