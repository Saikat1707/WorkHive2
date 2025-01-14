import React from "react";

const ManagerRejectedTask = () => {
  // Sample data for rejected tasks
  const rejectedTasks = [
    { title: "Build Homepage", rejectedEmployees: 2 },
    { title: "Database Migration", rejectedEmployees: 1 },
    { title: "Marketing Campaign", rejectedEmployees: 0 },
    { title: "Bug Fix Sprint", rejectedEmployees: 3 },
  ];

  return (
    <div className="ManagerRejectedTask">
      <h1>Rejected Tasks Details </h1>
      <table className="RejectedTaskTable">
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Total Employees Who Rejected</th>
          </tr>
        </thead>
        <tbody>
          {rejectedTasks.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.rejectedEmployees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerRejectedTask;
