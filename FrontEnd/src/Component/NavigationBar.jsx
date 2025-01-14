import React, { useContext, useEffect, useState } from "react";
import "./CSS/NavigationBar.css";
import { gsap } from "gsap";
import {Link} from "react-router-dom"
import { LoginContext } from "../Context/LoginContextProvider";
const NavigationBar = () => {
  const LoginRoledata = useContext(LoginContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const splitting = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="LogoChar">
        {char}
      </span>
    ));
  };

  useEffect(() => {
    gsap.from(".LogoChar", {
      x: 50,
      opacity: 0,
      duration: 2,
      stagger: 0.8,
      repeat: -1,
      ease: "elastic.out(1,0.3)",
    });
  }, []);
  

  return (
    <div className="NavBarMain">
      <div className="NavBarLogo">
        <h2>{splitting("DUTIO")}</h2>
      </div>
      <button
        className="NavBarToggler"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>
      <div className={`NavBarMenu ${isMenuOpen ? "active" : ""}`}>
        <ul className="Navitems">
          <li><Link className="Navlink" to={`/${LoginRoledata.LoginRole}/dashboard`}>Home</Link></li>
          <li><Link className="Navlink" to={`/${LoginRoledata.LoginRole}/people`}>People</Link></li>
          <li><Link className="Navlink" to={`/${LoginRoledata.LoginRole}/chatbox`}>Chatbox</Link></li>
          <li><Link className="Navlink" to={`/${LoginRoledata.LoginRole}/leaverequest`}>Leave Request</Link></li>
          <li><Link className="Navlink" to={`/contact`}>Contact support</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
