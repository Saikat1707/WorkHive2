import React, { useContext, useState } from "react";
import "./CSS/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContextProvider";

export const Login = () => {
  const { setLoginRole, LoginRole } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleFormData = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role");
      return;
    }

    setLoginRole(role.toLowerCase());

    if (role.toLowerCase() === "manager") {
      navigate("/manager/dashboard");
    } else if (role.toLowerCase() === "employee") {
      navigate("/employee/dashboard");
    }

    // Clear input fields after submission
    setEmail("");
    setPassword("");
    setRole("");
  };

  return (
    <div className="LoginMain">
      <h3>Log in</h3>
      <form className="LoginForm" onSubmit={handleFormData}>
        <div className="LoginformGroup">
          <label htmlFor="email">Email ID: </label>
          <input
            required
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="LoginformGroup">
          <label htmlFor="password">Password: </label>
          <input
            required
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="LoginformGroup">
          <label htmlFor="role">Organizational Role: </label>
          <select
            required
            name="role"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="manager">Manager/Leader</option>
            <option value="employee">Employee/TeamMates</option>
          </select>
        </div>
        <button type="submit" className="Create">
          Log in
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/">Create Account</Link>
      </p>
    </div>
  );
};
