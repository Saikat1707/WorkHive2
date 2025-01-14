import React from "react";

const ManagerTaskOverview = () => {
  // Sample data for the tasks
  const tasks = [
    {
      title: "Build Homepage",
      description: "Create the homepage for the company website.",
      deadline: "2024-12-31T17:00", // ISO 8601 format for datetime
      totalEmployees: 5,
    },
    {
      title: "Database Migration",
      description: "Migrate database from MySQL to PostgreSQL.",
      deadline: "2024-12-28T10:00",
      totalEmployees: 3,
    },
    {
      title: "Marketing Campaign",
      description: "Plan and execute the New Year marketing campaign.",
      deadline: "2024-12-25T14:30",
      totalEmployees: 4,
    },
    {
      title: "Bug Fix Sprint",
      description: "Fix critical bugs reported in the application.",
      deadline: "2024-12-26T09:00",
      totalEmployees: 6,
    },
  ];

  return (
    <div className="ManagerTaskOverview">
      <h1>Manager Task Overview</h1>
      <table className="TaskTable">
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Task Deadline</th>
            <th>Total Assigned Employees</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            // Formatting the date and time
            const deadline = new Date(task.deadline);
            const formattedDeadline = deadline.toLocaleString("en-US", {
              dateStyle: "medium",
              timeStyle: "short",
            });

            return (
              <tr key={index}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{formattedDeadline}</td>
                <td>{task.totalEmployees}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerTaskOverview;
