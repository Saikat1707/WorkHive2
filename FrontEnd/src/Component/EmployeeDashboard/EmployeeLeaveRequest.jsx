import React, { useState } from 'react'
import {Link, Outlet} from "react-router-dom"
import { useContext } from 'react'
import { LoginContext } from '../../Context/LoginContextProvider'
import "../CSS/EmployeeLeaveRequest.css"
import CreateRequestForm from './EmployeeRequest/CreateRequestForm'
const EmployeeLeaveRequest = () => {
  const LoginRoleData = useContext(LoginContext)
  const [create, setCreate] = useState(false)
  return (
    <div className='EmployeeLeaveMain'>
      <div className="EmployeeLeaveMenu">
        <button onClick={()=>{setCreate(false)}}><Link to={`/${LoginRoleData.LoginRole}/leaverequest`}>Create</Link> </button>
        <button onClick={()=>{setCreate(true)}}><Link to={`/${LoginRoleData.LoginRole}/leaverequest/pending`}>Pending</Link> </button>
        <button onClick={()=>{setCreate(true)}}><Link to={`/${LoginRoleData.LoginRole}/leaverequest/approved`}>Approved</Link></button>
        <button onClick={()=>{setCreate(true)}}><Link to={`/${LoginRoleData.LoginRole}/leaverequest/rejected`}>Rejected</Link></button>
      </div>
      {create ? <Outlet/>:<CreateRequestForm/>}
    </div>
  )
}

export default EmployeeLeaveRequest