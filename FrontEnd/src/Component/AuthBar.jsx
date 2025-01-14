import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./CSS/AuthBar.css";
import brain from "../assets/Images/brain.png";
import {Link} from "react-router-dom"
const AuthBar = () => {
  const titleRef = useRef(null); // Ref for the title container

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll("span"); // Select all letter spans

    // GSAP animation for each letter
    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1, // Delay between each letter animation
        ease: "power2.out",
      }
    );
  }, []);

  // Function to split the title into spans
  const splitTitle = (title) => {
    return title.split("").map((char, index) => (
      <span key={index} className="letter">
        {char}
      </span>
    ));
  };

  return (
    <div className="AuthBarMain">
      <div className="AuthBarLogo">
        <img src={brain} alt="Brain Logo" className="Brain" />
        <h3 ref={titleRef}>{splitTitle("WorkHive")}</h3>
        
      </div>
      <button class="btn-31">
        <span class="text-container">
          <span class="text"><Link to="/login"className="Link">Log in</Link> </span>
        </span>
      </button>
    </div>
  );
};

export default AuthBar;
