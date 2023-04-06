import React, { useState } from "react";
import '../styles/admindashboard.css';
import valtechLogo from '../assets/valtech-logo.jpg'

let AdminDashboard=()=>{
    const [isActive, setIsActive] = useState(false);

  function toggleSidebar() {
    setIsActive(!isActive);
  }
    return(
        <div className="admin-container">
        <div className={`navigation ${isActive ? 'active' : ''}`}>
            <div className="company">    
                <a href="#">   
                         <span className="icon"><img src={valtechLogo} alt="valtech-logo" width="20" height="20" className="logo"/>  </span>                  
                        <span className="company-name">Valtech_</span>
                </a>    
            </div>  
            <hr/>
            <ul>
                <li>
                    <a href="/admin" className="active-tab">
                        <span className="icon"><ion-icon name="grid-sharp"></ion-icon></span>
                        <span className="name">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="adminbooking.html">
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
                    <span id="sideBar-btn" onClick={toggleSidebar}><ion-icon name="menu"></ion-icon> <span className="dash-name">Dashboard</span></span>  
                </div>
            </header>
            <section className="info">
                <div className="total">
                    <div>
                        <h3>250</h3>
                        <h6>Total Bookings</h6>
                    </div>
                    <span className="food-icon"><ion-icon name="people-sharp"></ion-icon></span>
                    
                </div>
                <div className="total">
                    <div>
                        <h3>230</h3>
                        <h6>Opted Food</h6>
                    </div>
                    <span className="food-icon"><ion-icon name="fast-food-sharp"></ion-icon></span>
                </div>
            </section>
            <h3>Booking Information</h3>
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
                        </tr>
                      </tbody>
                  </table>
                </div>
        </div>
    </div>
    )
}

export default AdminDashboard;