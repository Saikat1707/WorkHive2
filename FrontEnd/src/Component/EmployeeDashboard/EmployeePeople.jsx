import React from 'react';
import "../CSS/EmployeePeople.css";

const EmployeePeople = () => {
  const employees = [
    { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com' },
    { id: 3, name: 'Charlie Davis', email: 'charlie.davis@example.com' },
    { id: 4, name: 'Diana Ross', email: 'diana.ross@example.com' },
    { id: 5, name: 'Ethan Clark', email: 'ethan.clark@example.com' },
  ];

  return (
    <div className="employee-container">
      <h2 className="employee-heading">Employees in the Room</h2>
      <div className="employee-card-container">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <p className="employee-name">{employee.name}</p>
            <p className="employee-email">{employee.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeePeople;
