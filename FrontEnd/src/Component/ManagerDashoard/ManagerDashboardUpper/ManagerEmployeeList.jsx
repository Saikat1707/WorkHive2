import React from 'react'
const ManagerEmployeeList = () => {
    const employees = [
        {
          username: "JohnDoe",
          status: "On Leave",
          completedTasks: 7,
        },
        {
          username: "JaneSmith",
          status: "Active",
          completedTasks: 15,
        },
        {
          username: "MikeJohnson",
          status: "On Leave",
          completedTasks: 8,
        },
        {
          username: "EmilyClark",
          status: "Active",
          completedTasks: 12,
        },
        {
          username: "RobertBrown",
          status: "On Leave",
          completedTasks: 5,
        },
        {
          username: "SophiaDavis",
          status: "Active",
          completedTasks: 20,
        },
        {
          username: "LiamWilson",
          status: "Active",
          completedTasks: 18,
        },
        {
          username: "NoahMartin",
          status: "On Leave",
          completedTasks: 4,
        },
        {
          username: "OliviaGarcia",
          status: "Active",
          completedTasks: 22,
        },
        {
          username: "IsabellaAnderson",
          status: "Active",
          completedTasks: 25,
        },
      ];
  return (
    <div className="EmployeeList">
          <div className="EmployeeListHead">
            <p>Employee</p>
          </div>
          <table className="EmployeeListTable">
            <thead>
              <tr>
                <th>Username</th>
                <th>Status</th>
                <th>Completed Tasks</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.username}</td>
                  <td>{employee.status}</td>
                  <td>{employee.completedTasks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  )
}

export default ManagerEmployeeList