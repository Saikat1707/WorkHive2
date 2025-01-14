import React, { useState } from 'react';

const CreateRequestForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [leaveDescription, setLeaveDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log({ name, email, leaveType, leaveDescription, startDate, endDate });
  };

  return (
    <form onSubmit={handleSubmit} className="leave-request-form"> 
      <h2>Leave Request Form</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="leaveType">Leave Type:</label>
        <select 
          id="leaveType" 
          value={leaveType} 
          onChange={(e) => setLeaveType(e.target.value)} 
          required 
        >
          <option value="">Select Leave Type</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Casual Leave">Casual Leave</option>
          <option value="Paternity Leave">Paternity Leave</option>
          <option value="Maternity Leave">Maternity Leave</option>
          {/* Add more leave types as needed */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="leaveDescription">Leave Description:</label>
        <textarea 
          id="leaveDescription" 
          value={leaveDescription} 
          onChange={(e) => setLeaveDescription(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Start Date:</label>
        <input 
          type="date" 
          id="startDate" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">End Date:</label>
        <input 
          type="date" 
          id="endDate" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
          required 
        />
      </div>
      <button type="submit" className="submit-button">Submit Request</button>
    </form>
  );
};

export default CreateRequestForm;