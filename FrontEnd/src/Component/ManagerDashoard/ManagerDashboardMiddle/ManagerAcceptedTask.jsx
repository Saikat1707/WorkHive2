import React from "react";

const ManagerAcceptedTask = () => {
  // Sample data for accepted tasks
  const acceptedTasks = [
    { title: "Build Homepage", acceptedEmployees: 4 },
    { title: "Database Migration", acceptedEmployees: 2 },
    { title: "Marketing Campaign", acceptedEmployees: 3 },
    { title: "Bug Fix Sprint", acceptedEmployees: 5 },
  ];

  return (
    <div className="ManagerAcceptedTask">
      <h1>Accepted Tasks Details</h1>
      <table className="AcceptedTaskTable">
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Total Employees Who Accepted</th>
          </tr>
        </thead>
        <tbody>
          {acceptedTasks.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.acceptedEmployees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerAcceptedTask;
