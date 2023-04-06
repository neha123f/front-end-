import React, { useState } from "react";
import '../styles/admindashboard.css';
import valtechLogo from '../assets/valtech-logo.jpg'

let AdminUsers=()=>{
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
                    <span id="sideBar-btn" onClick={toggleSidebar}><ion-icon name="menu"></ion-icon> <span className="dash-name">User Information</span></span>  
                </div>
            </header>
            <div className="user-form" id="add-user">
                <h2>Add User</h2>
                <form action=""> 
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="empid" name="empid" placeholder="name@example.com"/>
                    <label for="empid">Employee ID</label>
                  </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="empname" name="empname" placeholder="name@example.com"/>
                    <label for="empname">Employee Name</label>
                  </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="empemail" name="empemail" placeholder="name@example.com"/>
                    <label for="empemail">Employee Email</label>
                  </div>
                <div className="form-floating mb-3">
                    <input type="tel" className="form-control" id="empphone" name="empphone" placeholder="name@example.com"/>
                    <label for="empphone">Employee Phone Number</label>
                  </div>
                <div className="form-floating mb-3">
                    <input type="tel" className="form-control" id="emprole" name="emprole" placeholder="name@example.com"/>
                    <label for="emprole">Employee Role</label>
                  </div>
                  <button className="btn btn-dark" type="submit">Submit</button>   
                </form>
            </div>
            
             <h2>User Records</h2> 
            <div className="table-container table-responsive">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Employee ID</th>
                          <th scope="col">Employee Name</th>
                          <th scope="col">Employee Email</th>
                          <th scope="col">Employee Phone Number</th>
                          <th></th>
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
                          <td><button className="btn btn-success">Edit</button></td>
                          <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                      </tbody>
                  </table>
                </div>
        </div>
    </div>
    )
}

export default AdminUsers;