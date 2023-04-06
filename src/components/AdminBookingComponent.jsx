import React, { useState } from "react";
import '../styles/admindashboard.css';
import valtechLogo from '../assets/valtech-logo.jpg'

let AdminBooking=()=>{
    const [isActive, setIsActive] = useState(false);

  function toggleSidebar() {
    setIsActive(!isActive);
  }
    return (
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
                    <span id="sideBar-btn" onClick={toggleSidebar}><ion-icon name="menu"></ion-icon> <span className="dash-name">Bookings</span></span>  
                </div>
            </header>

            <form onsubmit="return false;">
                
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="bookingID" id="bookingID" required onchange="getFromDate()" />
                  <label for="bookingID">Enter Booking ID</label>
                </div>
                
                
                <button className="btn btn-secondary">Next</button>
            </form>
            <h3>Booked Information</h3>
            <div className="table-container table-responsive">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Employee ID</th>
                          <th scope="col">Employee Name</th>
                          <th scope="col">Request Type</th>
                          <th scope="col">From Date</th>
                          <th scope="col">To Date</th>
                          <th scope="col">Shift Timing</th>
                          <th scope="col">Booked Seat</th>
                          <th scope="col">Food Opted</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td><button className="btn btn-success">Confirm</button></td>
                        </tr>
                      </tbody>
                  </table>
                </div>
        </div>
    </div>
    )
}

export default AdminBooking;