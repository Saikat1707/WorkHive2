import React from 'react'

import ManagerImg from "../Images/manager.png";
const ManagerProfileSideBar = () => {
  return (
        <div className="ManagerProfile">
          <img src={ManagerImg} alt="Managerimg" />
          <p>
            {" "}
            <span className="ManagerProfileSpan">Name :</span> Saikat Bera
          </p>
          <p>
            {" "}
            <span className="ManagerProfileSpan">Email :</span>{" "}
            berasaikat731@gmail.com
          </p>
          <p>
            {" "}
            <span className="ManagerProfileSpan">Bio :</span> Work passionately
            untill the success comes under your foot
          </p>
          <p>
            {" "}
            <span className="ManagerProfileSpan">
              Employee in room :
            </span> 13{" "}
          </p>
          <div className="keySection">
            <p>Key : abs4jb6GJJ55 </p>
            <p>use your key to join the employee </p>
          </div>
          <button className="ManagerProfileEditBttn">Edit</button>
        </div>
  )
}

export default ManagerProfileSideBar