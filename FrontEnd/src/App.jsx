import React, { useContext } from 'react'
import "./App.css"
import AuthenticationBox from "../src/Component/AuthenticationBox"
import { Route, Routes } from 'react-router-dom'
import { Login } from './Component/Login'
import { SignUp } from './Component/SignUp'
import ManagerDashBoard from './Component/ManagerDashBoard'
import EmployeeDashBoard from './Component/EmployeeDashBoard'
import { LoginContext } from './Context/LoginContextProvider'
import ManagerProfile from "./Component/ManagerDashoard/ManagerProfile"
import ManagerPeople from "./Component/ManagerDashoard/ManagerPeople"
import ManagerChatbox from './Component/ManagerDashoard/ManagerChatbox'
import ContactSupport from './Component/ContactSupport'
import EmployeeProfile from "./Component/EmployeeDashboard/EmployeeProfile"
import EmployeeChatBox from "./Component/EmployeeDashboard/EmployeeChatBox"
import EmployeePeople from "./Component/EmployeeDashboard/EmployeePeople"
import ManagerDashboardHome from "./Component/ManagerDashoard/ManagerDashboardHome"
import EmployeeDashBoardHome from "./Component/EmployeeDashboard/EmployeeDashboardHome"
import ManagerLeaveRequest from './Component/ManagerDashoard/ManagerLeaveRequest'
import EmployeeLeaveRequest from './Component/EmployeeDashboard/EmployeeLeaveRequest'
import ManagerPending from './Component/ManagerDashoard/ManagerRequest/ManagerPending'
import ManagerApprovedRequest from './Component/ManagerDashoard/ManagerRequest/ManagerApprovedRequest'
import ManagerRejectedRequest from './Component/ManagerDashoard/ManagerRequest/ManagerRejectedRequest'
import EmployeePending from './Component/EmployeeDashboard/EmployeeRequest/EmployeePending'
import EmployeeApproved from './Component/EmployeeDashboard/EmployeeRequest/EmployeeApproved'
import EmployeeRejected from './Component/EmployeeDashboard/EmployeeRequest/EmployeeRejected'
import CreateRequestForm from './Component/EmployeeDashboard/EmployeeRequest/CreateRequestForm'
import KeyGenerator from './Component/KeyGenerator'

const App = () => {
  const LoginRoleData = useContext(LoginContext)
  console.log(LoginRoleData)
  return (
    <div>
      <Routes>
        <Route path='/' element={<AuthenticationBox/>}>
          <Route path='/' element={<SignUp/>}/>
          {/* <Route path='/key' element={<KeyGenerator/>}/> */}
          <Route path='/login' element={<Login/>}/>
        </Route>

        <Route path='/manager' element={<ManagerDashBoard/>}>
          <Route path='dashboard' element={<ManagerDashboardHome/>}/>
          <Route path='profile' element={<ManagerProfile/>}/>
          <Route path='people' element={<ManagerPeople/>}/>
          <Route path='chatbox' element={<ManagerChatbox/>}/>
          <Route path='leaverequest' element={<ManagerLeaveRequest/>}>
            <Route path='' element={<ManagerPending/>} />
            <Route path='approved' element={<ManagerApprovedRequest/>} />
            <Route path='rejected' element={<ManagerRejectedRequest/>}/>
          </Route>
        </Route>
        <Route path='/employee' element={<EmployeeDashBoard/>}>
          <Route path='dashboard' element={<EmployeeDashBoardHome/>}/>
          <Route path='profile' element={<EmployeeProfile/>}/>
          <Route path='people' element={<EmployeePeople/>}/>
          <Route path='chatbox' element={<EmployeeChatBox/>}/>
          <Route path='leaverequest' element={<EmployeeLeaveRequest/>}>
            {/* <Route path='create' element={<CreateRequestForm/>}/> */}
            <Route path='pending' element={<EmployeePending/>}/>
            <Route path='approved' element={<EmployeeApproved/>}/>
            <Route path='rejected' element={<EmployeeRejected/>}/>
          </Route>
        </Route>
        <Route path='contact' element={<ContactSupport/>}/>
        
      </Routes>
    </div>
  )
}

export default App