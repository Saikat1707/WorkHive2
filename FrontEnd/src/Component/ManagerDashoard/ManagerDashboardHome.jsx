import React from "react";
import "../CSS/ManagerDashboardHome.css";
import ManagerProfileSideBar from "./ManagerDashboardUpper/ManagerProfileSideBar";
import ManagerTaskCreationForm from "./ManagerDashboardUpper/ManagerTaskCreationForm";
import ManagerEmployeeList from "./ManagerDashboardUpper/ManagerEmployeeList";
import ManagerTaskOverview from "./ManagerDashboardMiddle/ManagerTaskOverview";
import ManagerAcceptedTask from "./ManagerDashboardMiddle/ManagerAcceptedTask";
import ManagerRejectedTask from "./ManagerDashboardMiddle/ManagerRejectedTask";
const ManagerDashboardHome = () => {
  
  

  return (
    <div className="ManagerDashboardMain">
      <div className="ManagerUpper">
        <ManagerProfileSideBar/>
        <ManagerTaskCreationForm/>
        <ManagerEmployeeList/>
      </div>
      <div className="ManagerMiddle">
        <ManagerTaskOverview/>
        <div className="ManagerAcceptedRejectedTable">
        <ManagerAcceptedTask/>
        <ManagerRejectedTask/>
        </div>
      </div>
      <div className="ManagerBottom"></div>
    </div>
  );
};

export default ManagerDashboardHome;
