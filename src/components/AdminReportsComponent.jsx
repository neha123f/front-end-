import React, { useState } from "react";
import '../styles/admindashboard.css';
import valtechLogo from '../assets/valtech-logo.jpg'

let AdminReports=()=>{
    const [isActive, setIsActive] = useState(false);

  function toggleSidebar() {
    setIsActive(!isActive);
  }
    return(
        <div className="admin-container">
        <div className={`navigation ${isActive ? 'active' : ''}`}>
            <div className="company">    
                <a href="">   
                         <span className="icon"><img src={valtechLogo} alt="valtech-logo" width="20" height="20" className="logo"/>  </span>                  
                        <span className="company-name">Valtech_</span>
                </a>    
            </div>  
            <hr/>
            <ul>
                <li>
                    <a href="/admin">
                        <span className="icon"><ion-icon name="grid-sharp"></ion-icon></span>
                        <span className="name">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/adminbookings" className="active-tab">
                        <span className="icon"><ion-icon name="calendar"></ion-icon></span>
                        <span className="name">Bookings</span>
                    </a>
                </li>
                <li>
                    <a href="/adminusers">
                        <span className="icon"><ion-icon name="people-sharp"></ion-icon></span>
                        <span className="name">Users</span>
                    </a>
                </li>
                <li>
                    <a href="/adminreports">
                        <span className="icon"><ion-icon name="keypad"></ion-icon></span>
                        <span className="name">Reports</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className="icon"><ion-icon name="log-out-sharp"></ion-icon></span>
                        <span className="name">Log Out</span>
                    </a>
                </li>
            </ul>
        </div>
        <div className={`main ${isActive ? 'active' : ''}`}>
            <header>
                <div className="admin-main">
                    <span id="sideBar-btn" onClick={toggleSidebar}><ion-icon name="menu"></ion-icon> <span className="dash-name">Reports</span></span>  
                </div>
            </header>
            <form>
                <div className="form-floating mb-3">
                    <select className="form-select" name="type" id="type" required onchange="getTypeOfRequest()">
                        <option selected></option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="individual">Individual Reports</option>
                    </select>
                    <label for="type">Select type of requests</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="date" className="form-control" name="from" id="from" required onchange="getFromDate()"/>
                  <label for="from">From Date</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="date" className="form-control" name="to" id="to" required readonly/>
                  <label for="to">To Date</label>
                </div> 
                
                <button className="btn btn-secondary">Next</button>
            </form>
        </div>
    </div>
    )
}

export default AdminReports;