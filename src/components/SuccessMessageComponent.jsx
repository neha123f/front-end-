import React from "react";
import { Link } from "react-router-dom";
import '../styles/success.css'

let SuccessMessage=()=>{
    return (
        <div className="success-body">
        <div className="success-container">
          <form className="success-form">
            <div className="logo">
            </div>
            <h3>Woo hoo!</h3>
            <p id="otp-info">New password has been sent to your mail</p>
            <p id="otp-info">Now login with your new password</p>
            <Link to="/"><button type="submit">Login</button></Link>
          </form>
        </div>
        </div>
      );
}

export default SuccessMessage;


