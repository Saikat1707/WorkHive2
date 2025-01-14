import React from 'react'
import { Link } from "react-router-dom";
const ManagerTaskCreationForm = () => {
  return (
    <div className="ManagerTaskCreation">
          <div className="TaskCreationHead">
            <h2>Hello , Mr. Saikat Bera</h2>
            <p>Keep your room maintained with us </p>
          </div>
          <form className="TaskCreationForm">
            <div className="TaskCreationformGroup">
              <label htmlFor="TaskTitle">Task-title : </label>
              <input
                type="text"
                name="TaskTitle"
                placeholder="Enter your task title"
              />
            </div>
            <div className="TaskCreationformGroup">
              <label htmlFor="TaskDesc">Task description : </label>
              <textarea
                name="TaskDesc"
                placeholder="Enter your Task description"
                cols={30}
                rows={10}
              ></textarea>
            </div>
            <div className="TaskCreationformGroup">
              <label htmlFor="Taskdate">Task-deadline : </label>
              <input
                type="date"
                name="Taskdate"
              />
            </div>
            <button className="ChooseEmployeeBtn">
              <Link className="ChooseEmployeeBtnLink">Choose Employee</Link>{" "}
            </button>
            <p>Total employee assigned for the task : 10 </p>
            <button type="submit" className="AssignBtn">
              Assign
            </button>
          </form>
        </div>
  )
}

export default ManagerTaskCreationForm