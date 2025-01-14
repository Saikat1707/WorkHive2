import React from 'react';
import "../CSS/ManagerPeople.css"

const ManagerPeople = () => {
  const managers = [
    {
      id: 1,
      email: 'manager1@example.com',
      name: 'John Doe',
      age: 35,
      tasksCompleted: 120,
      tasksFailed: 30,
    },
    {
      id: 2,
      email: 'manager2@example.com',
      name: 'Jane Smith',
      age: 42,
      tasksCompleted: 95,
      tasksFailed: 25,
    },
    {
      id: 3,
      email: 'manager3@example.com',
      name: 'Mike Johnson',
      age: 29,
      tasksCompleted: 150,
      tasksFailed: 20,
    },
    {
      id: 4,
      email: 'manager4@example.com',
      name: 'Emily Davis',
      age: 33,
      tasksCompleted: 180,
      tasksFailed: 15,
    },
    {
      id: 5,
      email: 'manager5@example.com',
      name: 'Robert Brown',
      age: 39,
      tasksCompleted: 130,
      tasksFailed: 40,
    },
    {
      id: 6,
      email: 'manager6@example.com',
      name: 'Laura Wilson',
      age: 28,
      tasksCompleted: 160,
      tasksFailed: 10,
    },
    {
      id: 7,
      email: 'manager7@example.com',
      name: 'David Martinez',
      age: 45,
      tasksCompleted: 110,
      tasksFailed: 50,
    },
    {
      id: 8,
      email: 'manager8@example.com',
      name: 'Sophia Taylor',
      age: 31,
      tasksCompleted: 140,
      tasksFailed: 25,
    },
    {
      id: 9,
      email: 'manager9@example.com',
      name: 'James Anderson',
      age: 37,
      tasksCompleted: 170,
      tasksFailed: 5,
    },
    {
      id: 10,
      email: 'manager10@example.com',
      name: 'Olivia Lee',
      age: 30,
      tasksCompleted: 190,
      tasksFailed: 8,
    },
  ];
  

  return (
    <div className="manager-container">
      <h2 className="manager-heading">Employees in Manager's Room</h2>
      <div className="manager-card-container">
        {managers.map((manager) => {
          const totalTasks = manager.tasksCompleted + manager.tasksFailed;
          const performance =
            totalTasks > 0 ? ((manager.tasksCompleted / totalTasks) * 100).toFixed(2) : 0;

          return (
            <div key={manager.id} className="manager-card">
              <h3 className="manager-name">{manager.name}</h3>
              <p className="manager-email"><strong>Email:</strong> {manager.email}</p>
              <p className="manager-age"><strong>Age:</strong> {manager.age}</p>
              <p className="manager-tasks">
                <strong>Tasks Completed:</strong> {manager.tasksCompleted}
              </p>
              <p className="manager-tasks">
                <strong>Tasks Failed:</strong> {manager.tasksFailed}
              </p>
              <p className={`manager-performance ${performance >= 75 ? 'high' : performance >= 50 ? 'medium' : 'low'}`}>
                <strong>Overall Performance:</strong> {performance}%
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManagerPeople;
