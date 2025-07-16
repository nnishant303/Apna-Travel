import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    navigate("/home");
  };

  return (
    <div className="auth__form-container">
      <form className="auth__form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="auth__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="auth__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="auth__button">Login</button>
        <p>Don’t have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
