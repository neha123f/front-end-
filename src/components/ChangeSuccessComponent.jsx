import React, { useState } from "react";
import '../styles/changepassword.css'

let ChangeSuccess=()=>{
    return (
        <div className="change-body">
            <div className="change-container">
            <form className="change-form">
                <div class="logo"></div>
                <h3>Woo hoo!</h3>
                <p id="otp-info">Your password has been changed successfully</p>
                <p id="otp-info">Now login with your new password</p>
                <button type="submit">Login</button>
            </form>
    </div>
        </div>
    )
}

export default ChangeSuccess;