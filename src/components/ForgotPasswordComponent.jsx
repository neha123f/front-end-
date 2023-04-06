import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/forgotpassword.css'

let ForgotPassword=()=>{

  const[email,setEmail]=useState();

    return (
      <div className="forgot-body">
        <div className="forgot-container">
          <form className="forgot-form">
            <div className="logo">
            </div>
            <h3>It's okay! Reset your password</h3>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
              onChange={(e)=>setEmail(e.target.value)}
            />
            <Link to="/forgot/successmessage"><button type="submit">Continue</button></Link>
          </form>
        </div>
        </div>
      );
}

export default ForgotPassword;
