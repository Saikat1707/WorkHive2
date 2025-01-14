import React from 'react'
import error from "../ManagerDashoard/Images/404error.png"
import "../CSS/ManagerChatBox.css"
const EmployeeChatBox = () => {
  return (
    <div className='ManagerChatBoxMain'>
          <div className="ErrorCard">
            <img src={error} alt="404 error" />
            <p>THIS PAGE IS UNDER DEVELOPMENT WILL BE USEABLE SOON</p>
          </div>
        </div>
  )
}

export default EmployeeChatBox