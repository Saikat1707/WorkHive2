import React from 'react'
import NavigationBar from './NavigationBar'
import { Outlet } from 'react-router-dom'

const ManagerDashBoard = () => {
  return (
    <div>
      <NavigationBar/>
      <Outlet/>
    </div>
  )
}

export default ManagerDashBoard