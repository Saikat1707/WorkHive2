import React from 'react'
import "../CSS/ManagerChatBox.css"
import error from "./Images/404error.png"
const ManagerChatbox = () => {
  return (
    <div className='ManagerChatBoxMain'>
      <div className="ErrorCard">
        <img src={error} alt="404 error" />
        <p>THIS PAGE IS UNDER DEVELOPMENT WILL BE USEABLE SOON</p>
      </div>
    </div>
  )
}

export default ManagerChatbox