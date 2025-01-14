import React from 'react'
import {Link, Outlet} from "react-router-dom"
import { useContext } from 'react'
import { LoginContext } from '../../Context/LoginContextProvider'
import "../CSS/ManagerLeaveRequest.css"
const ManagerLeaveRequest = () => {
  const LoginRoleData = useContext(LoginContext)
  return (
    <div className='ManagerLeaveMain'>
      <div className="LeaveMenu">
        <button><Link to={`/${LoginRoleData.LoginRole}/leaverequest`}>Pending</Link> </button>
        <button><Link to={`/${LoginRoleData.LoginRole}/leaverequest/approved`}>Approved</Link></button>
        <button><Link to={`/${LoginRoleData.LoginRole}/leaverequest/rejected`}>Rejected</Link></button>
      </div>
      <Outlet/>
    </div>
  )
}

export default ManagerLeaveRequest