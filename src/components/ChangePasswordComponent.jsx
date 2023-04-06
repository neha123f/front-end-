import React, { useState } from "react";
import '../styles/changepassword.css'


let ChangePassword=()=>{
    return(
        <div className="change-body">
            <div className="change-container">
            <form className="change-form">
            <div className="logo"></div>
            <h3>Change password</h3>
            <input type="password" name="otp" id="otp" placeholder="Enter Old Password" required/>
            <input type="password" name="password" id="password" placeholder="Enter New Password" required/>
            <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm New Password" required/>
            <a href="/changesuccess"><button type="submit">Change Password</button></a>
            </form>
            </div> 
        </div>
    )
}

export default ChangePassword;