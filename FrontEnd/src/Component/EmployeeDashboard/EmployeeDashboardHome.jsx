import React from 'react';
import '../CSS/EmployeeDashboardHome.css';
import img from "../ManagerDashoard/Images/manager.png"
const EmployeeDashboardHome = () => {
  const employeeProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'A dedicated software engineer with a passion for problem-solving.',
    organisation: 'TechCorp Solutions',
    manager: 'Jane Smith',
  };

  const tasks = {
    recentRequests: [
      {
        id: 1,
        title: 'Complete UI Design',
        description: 'Design the main dashboard UI.',
        deadline: '2024-12-30',
      },
      {
        id: 2,
        title: 'Fix Backend Bug',
        description: 'Resolve API integration issues.',
        deadline: '2024-12-28',
      },
    ],
    failedTasks: [
      {
        id: 1,
        title: 'Optimize Database',
        description: 'Failed to optimize database by the deadline.',
        deadline: '2024-12-20',
      },
    ],
    completedTasks: [
      {
        id: 1,
        title: 'Deploy Website',
        description: 'Successfully deployed the project website.',
        deadline: '2024-12-15',
      },
      {
        id: 2,
        title: 'Write Documentation',
        description: 'Completed technical documentation for the API.',
        deadline: '2024-12-10',
      },
    ],
  };

  const totalTasks = tasks.failedTasks.length + tasks.completedTasks.length;
  const performance =
    totalTasks > 0 ? ((tasks.completedTasks.length / totalTasks) * 100).toFixed(2) : 0;

  return (
    <div className="dashboard-container">
      {/* Employee Profile Section */}
      <div className="profile-section">
        {/* <h2>Employee Profile</h2> */}
        <div className="profile-card">
          <div className="profile-image">
            <img src={img} alt={`${employeeProfile.name}`} />
          </div>
          <div className="profile-details">
            <p><strong>Name:</strong> {employeeProfile.name}</p>
            <p><strong>Email:</strong> {employeeProfile.email}</p>
            <p><strong>Bio:</strong> {employeeProfile.bio}</p>
            <p><strong>Organisation:</strong> {employeeProfile.organisation}</p>
            <p><strong>Manager:</strong> {employeeProfile.manager}</p>
            <button className="edit-button">Edit Profile</button>
          </div>
        </div>
      </div>

      {/* Task Dashboard Section */}
      <div className="tasks-section">
        <h2>Task Dashboard</h2>

        {/* Recent Requests */}
        <div className="task-list">
          <h3>Recent Requests</h3>
          {tasks.recentRequests.length > 0 ? (
            tasks.recentRequests.map(task => (
              <div key={task.id} className="task-card">
                <p><strong>{task.title}</strong></p>
                <p>{task.description}</p>
                <p><strong>Deadline:</strong> {task.deadline}</p>
                <div className="task-actions">
                  <button className="accept-button">Accept</button>
                  <button className="reject-button">Reject</button>
                </div>
              </div>
            ))
          ) : (
            <p>No recent requests.</p>
          )}
        </div>

        {/* Failed Tasks */}
        <div className="task-list">
          <h3>Failed Tasks</h3>
          {tasks.failedTasks.length > 0 ? (
            tasks.failedTasks.map(task => (
              <div key={task.id} className="task-card failed">
                <p><strong>{task.title}</strong></p>
                <p>{task.description}</p>
                <p><strong>Deadline:</strong> {task.deadline}</p>
              </div>
            ))
          ) : (
            <p>No failed tasks.</p>
          )}
        </div>

        {/* Completed Tasks */}
        <div className="task-list">
          <h3>Completed Tasks</h3>
          {tasks.completedTasks.length > 0 ? (
            tasks.completedTasks.map(task => (
              <div key={task.id} className="task-card completed">
                <p><strong>{task.title}</strong></p>
                <p>{task.description}</p>
                <p><strong>Deadline:</strong> {task.deadline}</p>
              </div>
            ))
          ) : (
            <p>No completed tasks.</p>
          )}
        </div>

        {/* Overall Performance */}
        <div className="performance">
          <h3>Overall Performance</h3>
          <p>
            <strong>Performance:</strong> {performance}% ({tasks.completedTasks.length} tasks completed out of {totalTasks})
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboardHome;
