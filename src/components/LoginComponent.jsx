import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import '../styles/login.css';

let Login=()=>{

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    let navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate(`/home?username=${username}&password=${password}`)
    }

  return (
    <div className="login-body">
    <div className="login-container">
      <form className="login-form" onSubmit={(e)=>handleSubmit}>
        <div className="logo"></div>
        <h3>Login</h3>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Employee ID"
          required
          onChange={(e)=>setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          required
          onChange={(e)=>setPassword(e.target.value)}
        />
        <div className="forget">
          <Link to="/forgot">Forgot Password?</Link>
        </div>
        <div id="error"></div>
        <Link to="/home"><button type="submit">Log In</button></Link>
      </form>
    </div>
    </div>
  );
};

export default Login;
